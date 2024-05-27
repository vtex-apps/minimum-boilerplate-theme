/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useEffect, useState, useCallback } from 'react'
import styles from './styles.css'

import { OrderForm } from 'vtex.order-manager'
import { FormattedCurrency } from 'vtex.format-currency'
import { useApolloClient } from 'react-apollo'

import GET_PRODUCT_BY_ID from '../../graphql/queries/getProductById.gql'

const { useOrderForm } = OrderForm

const MinicartSummary: React.FC = () => {
  const client = useApolloClient()
  const {
    orderForm: { items },
  } = useOrderForm()

  const [spotPriceTotal, setSpotPriceTotal] = useState<number>(0)
  const [priceTotal, setPriceTotal] = useState<number>(0)
  const [listPriceTotal, setListPriceTotal] = useState<number>(0)

  const fetchProductPricesById = useCallback(
    async (productId: string) => {
      const { data } = await client.query({
        query: GET_PRODUCT_BY_ID,
        variables: { identifier: { field: 'id', value: productId } },
      })

      if (data?.product?.items) {
        return data.product.items.reduce(
          (
            acc: { spotPrice: number; price: number; listPrice: number },
            productItem: any
          ) => {
            const itemSpotPrice =
              productItem?.sellers?.[0]?.commertialOffer?.spotPrice ?? 0

            const itemPrice =
              productItem?.sellers?.[0]?.commertialOffer?.Price ?? 0

            const itemListPrice =
              productItem?.sellers?.[0]?.commertialOffer?.ListPrice ?? 0

            return {
              spotPrice: acc.spotPrice + itemSpotPrice,
              price: acc.price + itemPrice,
              listPrice: acc.listPrice + itemListPrice,
            }
          },
          { spotPrice: 0, price: 0, listPrice: 0 }
        )
      }

      return { spotPrice: 0, price: 0, listPrice: 0 }
    },
    [client]
  )

  const fetchProductsPrices = useCallback(async () => {
    let totalSpotPrice = 0
    let totalPrice = 0
    let totalListPrice = 0

    for (const item of items) {
      const { spotPrice, price, listPrice } = await fetchProductPricesById(
        item.productId
      )

      totalSpotPrice += spotPrice
      totalPrice += price
      totalListPrice += listPrice
    }

    setSpotPriceTotal(totalSpotPrice) // Assuming prices are in cents and converting to dollars
    setPriceTotal(totalPrice)
    setListPriceTotal(totalListPrice)
  }, [items, fetchProductPricesById])

  useEffect(() => {
    fetchProductsPrices()
  }, [items, fetchProductsPrices])

  const maxInstallments = 10

  return (
    <div className={styles.minicartSummary}>
      <div className={styles.subtotalWrapper}>
        <span className={styles.subtotalTitle}>Subtotal</span>
        <span className={styles.totalPrice}>
          <FormattedCurrency value={listPriceTotal} />
        </span>
        <span className={styles.priceWithDiscount}>
          <FormattedCurrency value={spotPriceTotal} />
        </span>
      </div>

      <span className={styles.pixText}>no pix ou boleto</span>
      <p className={styles.installments}>
        ou{' '}
        <b>
          <FormattedCurrency value={priceTotal} />
        </b>{' '}
        em até <b>{maxInstallments}x sem juros</b>
      </p>
    </div>
  )
}

export default MinicartSummary
