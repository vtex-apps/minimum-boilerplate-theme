import React, { useEffect } from 'react'
import styles from './styles.css'
import './styles.global.css'
import { useProduct } from 'vtex.product-context'

const TrustVoxStars = () => {
  const { product } = useProduct() ?? {}

  // @ts-ignore
  window._trustvox_shelf_rate = []
  // @ts-ignore
  window._trustvox_shelf_rate.push(['_storeId', '114129'])

  useEffect(() => {
    const script = document.createElement('script')

    script.src = '//rate.trustvox.com.br/widget.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  return (
    <div className={styles.stars_container}>
      <a
        className="trustvox-fluid-jump trustvox-widget-rating"
        href="#trustvox-reviews"
        title="Pergunte e veja opiniões de quem já comprou"
      >
        <div
          className="trustvox-shelf-container"
          data-trustvox-product-code-js={product?.productId}
          data-trustvox-should-skip-filter="true"
          data-trustvox-display-rate-schema="true"
        />
      </a>
    </div>
  )
}

export default TrustVoxStars
