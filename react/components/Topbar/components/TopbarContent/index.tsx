import React from 'react'

import styles from './styles.css'

interface TopbarContentProps {
  backgroundColor: string
  color: string
  link: string
  text: string
}

const TopbarContent = ({
  backgroundColor,
  color,
  text,
  link,
}: TopbarContentProps) => {
  return (
    <div className={styles.topbarContetWrapper} style={{ backgroundColor }}>
      <a href={link} target="_blank" rel="noreferrer">
        <span className={styles.contentText} style={{ color }}>
          {text}
        </span>
      </a>
    </div>
  )
}

export default TopbarContent
