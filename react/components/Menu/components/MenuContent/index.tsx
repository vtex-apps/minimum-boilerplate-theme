/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Dependencies
import React, { useEffect, useState } from 'react'
import classnames from 'classnames'

// Styles
import styles from './styles.css'

// Hooks
import { useMenu } from '../../../../hooks/useMenu'

// @ts-ignore
import { useDevice } from 'vtex.device-detector'

// Types
import type { MenuDepartment } from '../../typing'
import LoginMobile from '../LoginMobile'

interface MenuContentProps {
  staticLink: any
}

const MenuContent = ({ staticLink }: MenuContentProps) => {
  const [activeDepartment, setActiveDepartment] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const { departments } = useMenu()
  const { isMobile } = useDevice()

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement

    if (isMobile) {
      if (menuOpen) {
        body.style.overflow = 'hidden'
      } else {
        body.style.overflow = 'unset'
      }
    }
  }, [menuOpen, isMobile])

  const menuClasses = classnames(styles.menuWrapper, {
    [styles.open]: isMobile && menuOpen,
  })

  const handleMenuClose = () => {
    setMenuOpen(false)
    setActiveDepartment(null)
  }

  return (
    <div className={styles.menuContainer}>
      {isMobile && (
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      )}
      <div className={menuClasses}>
        {isMobile && (
          <button className={styles.closeButton} onClick={handleMenuClose} />
        )}
        {isMobile && <LoginMobile />}
        {isMobile && <span className={styles.listTitleMobile}>Categorias</span>}
        <ul className={styles.menuList}>
          {(departments as MenuDepartment[])?.map((department) => {
            const {
              name,
              link,
              categories,
              departmentImageDesktop,
              departmentThumbImageMobile,
              departmentImageMobile,
            } = department

            const hasCategories = categories && categories.length > 0
            const isActive = activeDepartment === name

            const departmentClasses = classnames(styles.categoryWrapper, {
              [styles.active]: isActive,
            })

            return (
              <li
                key={name}
                className={styles.menuItem}
                onMouseEnter={() => {
                  if (!isMobile && hasCategories) {
                    setActiveDepartment(name)
                  }
                }}
                onMouseLeave={() => {
                  if (!isMobile && hasCategories) {
                    setActiveDepartment(null)
                  }
                }}
              >
                <a href={link}>
                  {isMobile && (
                    <img src={departmentThumbImageMobile.src} alt={name} />
                  )}
                  <span>{name}</span>
                  {isMobile && hasCategories && (
                    <button
                      type="button"
                      onClick={(evt) => {
                        evt.preventDefault()
                        evt.stopPropagation()
                        setActiveDepartment(name)
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6 12L10 8L6 4"
                          stroke="#5A5A66"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                </a>
                {hasCategories && (
                  <div className={departmentClasses}>
                    <div className={styles.departmentTitleWrapper}>
                      <button
                        className={styles.hideCategory}
                        onClick={() => setActiveDepartment(null)}
                      />
                      <h3 className={styles.departmentTitle}>{name}</h3>
                      <a href={link} className={styles.viewAllLink}>
                        Ver tudo em {name}
                      </a>
                    </div>
                    {isMobile && departmentImageMobile?.src && (
                      <img
                        className={styles.departmentImageMobile}
                        src={departmentImageMobile?.src}
                        alt={name}
                      />
                    )}
                    <div className={styles.subMenuCategoryContent}>
                      <ul className={styles.subMenuCategoryList}>
                        {categories?.map((category) => {
                          const { name: categoryName, link: categoryLink } =
                            category

                          return (
                            <li
                              key={categoryName}
                              className={styles.subMenuCategoryItem}
                            >
                              <a
                                href={categoryLink}
                                className={styles.subMenuCategoryLink}
                              >
                                {categoryName}
                              </a>
                            </li>
                          )
                        })}
                        <li className={styles.subMenuCategoryItem}>
                          <a href={link} className={styles.subMenuCategoryLink}>
                            Ver tudo
                          </a>
                        </li>
                      </ul>

                      {departmentImageDesktop?.src && (
                        <div className={styles.departmentImage}>
                          <img src={departmentImageDesktop.src} alt={name} />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
        {isMobile && (
          <a href="/boss-black-friday" className={styles.brandSwitcherMobile} />
        )}
        {isMobile && (
          <a
            href="https://www.roland.com/backstage/login"
            className={styles.helpCenterMobile}
          >
            Central de Ajuda
          </a>
        )}
        {!isMobile && staticLink?.active && (
          <a
            href={staticLink.link}
            className={styles.staticDepartment}
            style={{
              backgroundColor: staticLink.backgroundColor,
              color: staticLink.color,
            }}
          >
            {staticLink.name}
          </a>
        )}
      </div>

      {(menuOpen || activeDepartment !== null) && (
        <div
          className={styles.menuOverlay}
          role="button"
          tabIndex={0}
          onClick={() => {
            setActiveDepartment(null)
          }}
        />
      )}
    </div>
  )
}

export default MenuContent
