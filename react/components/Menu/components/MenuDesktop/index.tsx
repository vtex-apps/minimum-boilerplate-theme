/* eslint-disable jsx-a11y/click-events-have-key-events */
// Dependencies
import React, { useState } from 'react'
import classnames from 'classnames'

// Styles
import styles from './styles.css'

// Hooks
import { useMenu } from '../../../../hooks/useMenu'
import type { MenuDepartment } from '../../typing'

const MenuDesktop = () => {
  const { departments } = useMenu()
  const [activeDepartment, setActiveDepartment] = useState<string | null>(null)

  console.log('departments', departments)

  if (!departments) return null

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuWrapper}>
        <ul className={styles.menuList}>
          {(departments as MenuDepartment[])?.map((department) => {
            const { name, link, categories, departmentImageDesktop } =
              department

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
                  {name}
                </button>
                {hasCategories && (
                  <div className={departmentClasses}>
                    <div className={styles.departmentTitleWrapper}>
                      <h3 className={styles.departmentTitle}>{name}</h3>
                      <a href={link} className={styles.viewAllLink}>
                        Ver tudo em {name}
                      </a>
                    </div>
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
      </div>
      {activeDepartment !== null && (
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

export default MenuDesktop
