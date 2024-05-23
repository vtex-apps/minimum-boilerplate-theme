// Dependencies
import React, { useEffect } from 'react'

// Styles
import styles from './styles.css'

// Hooks
import { ItemContext } from 'vtex.product-list'
import { FormattedCurrency } from 'vtex.format-currency'
import { useLazyQuery } from 'react-apollo'

// Query
import GET_PRODUCT_BY_ID from '../../graphql/queries/getProductById.gql'

const { useItemContext } = ItemContext

const MinicartCustomPrice = () => {
  const [getProductById, { data, loading, error }] =
    useLazyQuery(GET_PRODUCT_BY_ID)

  const {
    item: { productId },
  } = useItemContext() ?? {}

  useEffect(() => {
    if (productId) {
      getProductById({
        variables: { identifier: { field: 'id', value: productId } },
      })
    }
  }, [productId, getProductById])

  if (loading) return <div className={styles.priceLoading}>Carregando...</div>

  const {
    Price = 0,
    ListPrice = 0,
    spotPrice = 0,
  } = data?.product.items?.[0].sellers?.[0].commertialOffer ?? {}

  if (!Price || !ListPrice || !spotPrice || error) return null

  const hasOldPrice = ListPrice > Price

  return (
    <div className={styles.priceWrapper}>
      <span className={styles.oldPrice}>
        {hasOldPrice && <FormattedCurrency value={ListPrice} />}
      </span>
      <span className={styles.sellingPrice}>
        <FormattedCurrency value={spotPrice} /> no pix
      </span>
      <span className={styles.price}>
        ou{' '}
        <b>
          <FormattedCurrency value={Price} />
        </b>{' '}
        no cartão
      </span>
    </div>
  )
}

export default MinicartCustomPrice
