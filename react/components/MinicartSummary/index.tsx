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
    orderForm: { totalizers, items },
  } = useOrderForm()

  const [productsPrice, setProductsPrice] = useState<number>(0)

  const fetchProductPriceById = useCallback(
    async (productId: string) => {
      const { data } = await client.query({
        query: GET_PRODUCT_BY_ID,
        variables: { identifier: { field: 'id', value: productId } },
      })

      if (data?.product?.items) {
        return data.product.items.reduce((acc: number, productItem: any) => {
          const itemPrice = productItem?.sellers?.[0]?.commertialOffer?.Price

          return acc + itemPrice
        }, 0)
      }

      return 0
    },
    [client]
  )

  const fetchProductsPrice = useCallback(async () => {
    let totalPrice = 0

    for (const item of items) {
      const productPrice = await fetchProductPriceById(item.productId)

      totalPrice += productPrice
    }

    setProductsPrice(totalPrice)
  }, [items, fetchProductPriceById])

  useEffect(() => {
    fetchProductsPrice()
  }, [items, fetchProductsPrice])

  const totalItems = totalizers.find(
    (totalizer: any) => totalizer.id === 'Items'
  )

  const discountItems = totalizers.find(
    (totalizer: any) => totalizer.id === 'Discounts'
  )

  const totalItemsValue = totalItems ? totalItems.value / 100 : 0
  const priceWithDiscount = totalItems
    ? (totalItems.value - Math.abs(discountItems?.value ?? 0)) / 100
    : 0

  const maxInstallments = 10

  if (totalItemsValue === 0) return null

  return (
    <div className={styles.minicartSummary}>
      <div className={styles.subtotalWrapper}>
        <span className={styles.subtotalTitle}>Subtotal</span>
        <span className={styles.totalPrice}>
          <FormattedCurrency value={totalItemsValue} />
        </span>
        {discountItems && (
          <span className={styles.priceWithDiscount}>
            <FormattedCurrency value={priceWithDiscount} />
          </span>
        )}
      </div>

      <span className={styles.pixText}>no pix ou boleto</span>

      <p className={styles.installments}>
        ou{' '}
        <b>
          <FormattedCurrency value={productsPrice} />
        </b>{' '}
        em até <b>{maxInstallments}x sem juros</b>
      </p>
    </div>
  )
}

export default MinicartSummary
