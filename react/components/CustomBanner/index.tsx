import React from 'react'
import styles from './styles.css'
import { useRuntime } from 'vtex.render-runtime'
import { SliderLayout } from 'vtex.slider-layout'
import { BANNER_SCHEMA } from './schema'

interface BannerProps {
  items: ItemProps[]
}

interface ItemProps {
  initalDate?: string
  finalDate?: string
  visible: boolean
  image: string
  imageMobile: string
  itemLink?: string
}

const CustomBanner: StorefrontFunctionComponent<BannerProps> = ({ items }) => {
  const { deviceInfo } = useRuntime()
  const actualDate = Date.now()

  if (!items || items.length === 0) return null

  const configSlider: any = {
    itemsPerPage: {
      desktop: 1,
      tablet: 1,
      phone: 1,
    },

    infinite: false,
    autoplay: {
      timeout: 5000,
    },

    usePagination: true,
    showNavigationArrows: 'never',
    showPaginationDots: 'always',
  }

  const filteredBanners =
    items?.filter((item) => {
      if (!item.visible) return false

      const initalDate = item.initalDate ? Date.parse(item.initalDate) : null
      const finalDate = item.finalDate ? Date.parse(item.finalDate) : null

      if (initalDate && !finalDate) {
        return actualDate >= initalDate
      }

      if (initalDate && finalDate) {
        return actualDate >= initalDate && actualDate < finalDate
      }

      if (!initalDate && finalDate) {
        return actualDate < finalDate
      }

      return true
    }) ?? []

  return (
    <div className={styles.bannerWrapper}>
      <SliderLayout {...configSlider}>
        {filteredBanners.map((item) => (
          <div className={styles.bannerContent} key={item.image}>
            <a href={item.itemLink ?? '#'}>
              <img
                src={deviceInfo.isMobile ? item.imageMobile : item.image}
                className={styles.bannerImage}
                alt="Banner"
              />
            </a>
          </div>
        ))}
      </SliderLayout>
    </div>
  )
}

CustomBanner.schema = BANNER_SCHEMA

export default CustomBanner
