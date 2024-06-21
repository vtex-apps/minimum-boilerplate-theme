/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react'
import styles from './styles.css'
import type { WpPostProps } from '../../typing'

interface PostCardProps {
  post: WpPostProps
  categoryName: string
}

const PostCard = ({ post, categoryName }: PostCardProps) => {
  const { excerpt, yoast_head_json, title, link } = post

  return (
    <div className={styles.postCardWrapper}>
      <div className={styles.postCardImageWrapper}>
        <img
          className={styles.postCardImage}
          src={yoast_head_json?.og_image?.[0]?.url}
          alt={yoast_head_json?.og_title}
        />
      </div>
      <div className={styles.postCardInfos}>
        <span className={styles.postCardCategoryName}>{categoryName}</span>
        <h3 className={styles.postCardTitle}>{title?.rendered}</h3>
        <div
          className={styles.postCardExcerpt}
          dangerouslySetInnerHTML={{ __html: excerpt?.rendered }}
        />
        <a
          className={styles.postCardReadMore}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Ler mais
        </a>
      </div>
    </div>
  )
}

export default PostCard
