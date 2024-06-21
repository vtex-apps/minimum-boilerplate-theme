import React, { useEffect, useState } from 'react'
import { SliderLayout } from 'vtex.slider-layout'
import axios from 'axios'
import PostCard from './components/PostCard'
import type { WpPostProps } from './typing'
// import styles from './styles.css'

export interface CategoryPostProps {
  id: number
  name: string
  link: string
}

export default function WordpressHomePosts() {
  const [posts, setPosts] = useState<WpPostProps[]>()
  const [categories, setCategories] = useState<CategoryPostProps[]>()

  async function getPosts() {
    const req = await axios.get(
      'https://blog.rolandbrasil.com.br/wp-json/wp/v2/posts'
    )

    setPosts(req.data)
  }

  async function getWpCategories() {
    const req = await axios.get(
      'https://blog.rolandbrasil.com.br/wp-json/wp/v2/categories'
    )

    setCategories(req.data)
  }

  const configSlider: any = {
    itemsPerPage: {
      desktop: 3,
      tablet: 2,
      phone: 1,
    },
    showNavigationArrows: 'always',
  }

  useEffect(() => {
    getPosts()
    getWpCategories()
  }, [])

  if (!posts || !categories) return null

  return (
    <>
      <div>
        <SliderLayout {...configSlider}>
          {posts.map((post) => {
            const { slug } = post
            const category = categories.find(
              (cat) => cat.id === post.categories?.[0]
            )

            return (
              <PostCard
                post={post}
                key={slug}
                categoryName={category?.name ?? ''}
              />
            )
          })}
        </SliderLayout>
      </div>
    </>
  )
}
