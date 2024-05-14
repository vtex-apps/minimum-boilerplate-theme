/* eslint-disable jsx-a11y/click-events-have-key-events */
// Dependencies
import React, { useState } from 'react'
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

const MenuContent = () => {
  const { isMobile } = useDevice()
  const { departments } = useMenu()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDepartment, setActiveDepartment] = useState<string | null>(null)

  console.log('departments', departments)

  if (!departments) return null

  const menuClasses = classnames(styles.menuWrapper, {
    [styles.open]: isMobile && menuOpen,
  })

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
          <button
            className={styles.closeButton}
            onClick={() => setMenuOpen(false)}
          />
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
              <li key={name} className={styles.menuItem}>
                <button
                  onClick={() => setActiveDepartment(isActive ? null : name)}
                >
                  {isMobile && (
                    <img src={departmentThumbImageMobile.src} alt={name} />
                  )}
                  <span>{name}</span>
                </button>
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
                    {isMobile && (
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
        {isMobile && <button className={styles.brandSwitcherMobile} />}
      </div>
      {activeDepartment !== null ||
        (menuOpen && (
          <div
            className={styles.menuOverlay}
            role="button"
            tabIndex={0}
            onClick={() => {
              setActiveDepartment(null)
            }}
          />
        ))}
    </div>
  )
}

export default MenuContent
