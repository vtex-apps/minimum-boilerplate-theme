/* eslint-disable jsx-a11y/click-events-have-key-events */
// Dependencies
import type { ReactNode } from 'react'
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
  children: ReactNode
  staticLink: any
}

const MenuContent = ({ children, staticLink }: MenuContentProps) => {
  const [activeDepartment, setActiveDepartment] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const { departments } = useMenu()
  const { isMobile } = useDevice()

  console.log(staticLink)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const stickyClassNames = classnames(styles.userInteractions, {
    [styles.sticky]: isSticky,
  })

  if (!departments) return null

  const menuClasses = classnames(styles.menuWrapper, {
    [styles.open]: isMobile && menuOpen,
  })

  const containerClasses = classnames(styles.menuContainer, {
    [styles.stickyMenu]: !isMobile && isSticky,
  })

  return (
    <div className={containerClasses}>
      {isMobile && (
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      )}
      <div className={menuClasses}>
        <a href="/" className={styles.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="28"
            viewBox="0 0 50 28"
            fill="none"
          >
            <path
              d="M14.4006 15.6948C14.4977 15.6948 14.5893 15.6948 14.6808 15.6948C23.4877 15.6948 32.2954 15.6948 41.1023 15.6948C42.6612 15.6948 44.0883 15.2757 45.3323 14.3162C46.8181 13.1699 47.667 11.6465 47.887 9.77362C48.2966 6.28192 45.8535 3.00703 42.3632 2.36629C41.9448 2.28944 41.5127 2.26031 41.0871 2.26031C28.2004 2.25465 15.3137 2.25627 2.4278 2.25546C2.35552 2.25546 2.28324 2.25546 2.19088 2.25546V27.7459H0V0.23697C0.0883421 0.23697 0.167047 0.23697 0.245752 0.23697C13.8207 0.23697 27.3965 0.237779 40.9714 0.235352C43.0178 0.235352 44.8978 0.763638 46.5426 2.01356C48.405 3.42853 49.5398 5.30787 49.8868 7.63136C50.2955 10.3723 49.6001 12.8171 47.7601 14.8914C46.4149 16.4083 44.7043 17.2869 42.711 17.5871C42.1448 17.672 41.5665 17.7068 40.9939 17.7076C32.9026 17.7149 24.8105 17.7125 16.7191 17.7125H16.4525V20.4502H49.1519V22.4525H14.4006V15.6956V15.6948Z"
              fill="#FF5A00"
            />
            <path
              d="M7.59053 19.7407V27.7516H5.40527V5.56274H43.1956V12.3212C43.0968 12.3212 43.0061 12.3212 42.9161 12.3212C34.1293 12.3212 25.3425 12.3237 16.5565 12.3188C15.2016 12.3188 13.9287 12.6109 12.7786 13.3446C11.072 14.4352 10.0689 16.0015 9.75813 18.0102C9.22727 21.4493 11.5065 24.7517 14.8386 25.5713C15.4201 25.7145 16.0095 25.7638 16.607 25.7638C27.3599 25.7614 38.1119 25.7622 48.8647 25.7622C48.9571 25.7622 49.0487 25.7622 49.1547 25.7622V27.7637H48.9435C38.1103 27.7637 27.278 27.7669 16.4448 27.7613C14.0853 27.7597 11.9884 27.0243 10.2593 25.369C8.79118 23.9638 7.95113 22.226 7.67486 20.2091C7.65318 20.0498 7.63792 19.8896 7.61945 19.7302C7.60981 19.7334 7.60017 19.7367 7.59053 19.7391V19.7407ZM7.60579 7.57395V18.3395C7.6596 17.9771 7.69253 17.6413 7.76079 17.3137C8.29807 14.7095 9.68986 12.7185 11.9988 11.4079C13.393 10.6167 14.9093 10.3019 16.5026 10.3028C24.614 10.3068 32.7255 10.3052 40.8369 10.3052H41.1324V7.57395H7.60579Z"
              fill="#FF5A00"
            />
          </svg>
        </a>
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
                  type="button"
                  onClick={(event) => {
                    event.preventDefault()
                    event.stopPropagation()
                    setActiveDepartment(isActive ? null : name)
                  }}
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
        {isMobile && (
          <a
            href="https://www.roland.com/backstage/login"
            className={styles.helpCenterMobile}
          >
            Central de Ajuda
          </a>
        )}
        {!isMobile && <div className={stickyClassNames}>{children}</div>}
        {!isMobile && staticLink.active && (
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
