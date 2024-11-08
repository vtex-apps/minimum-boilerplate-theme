// Dependencies
import React from 'react'

// Styles
import styles from './styles.css'

// Context
import { CUSTOM_INFOCARD_SCHEMA } from './schema'

// Hooks
// @ts-ignore
import { useDevice } from 'vtex.device-detector'
// Interface
interface CustomInfoCardProps {
  cards: any
  cardSeeAll: any
}

const CustomInfoCard = ({ cards, cardSeeAll }: CustomInfoCardProps) => {
  const { isMobile } = useDevice()

  if (!cards || !cardSeeAll) {
    return null
  }

  const filteredCards = cards.slice(0, isMobile ? 5 : 7)

  return (
    <div className={styles['cards-container']}>
      {filteredCards.map((card: any) => {
        const { image, hoverImage, title, link, buttonLabel } = card

        return (
          <a className={styles['card-link']} href={link} key={image}>
            <div className={styles['card-wrapper']}>
              <div className={styles['card-image']}>
                <img src={image} alt={title} />
              </div>
              <div className={styles['hover-image']}>
                <img src={hoverImage} alt={title} />
              </div>
              <div className={styles['card-content']}>
                <h3>{title}</h3>
                <button>{buttonLabel}</button>
              </div>
            </div>
          </a>
        )
      })}
      <div className={styles['see-all-card']}>
        <span className={styles['see-all-card-title']}>{cardSeeAll.title}</span>
        <a className={styles['see-all-card-button']} href={cardSeeAll.link}>
          {cardSeeAll.buttonLabel}
        </a>
      </div>
    </div>
  )
}

CustomInfoCard.schema = CUSTOM_INFOCARD_SCHEMA

export default CustomInfoCard
