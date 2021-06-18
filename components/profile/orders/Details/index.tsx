import * as R from 'ramda'
import {CartItem, NormalizedCartItem} from 'components/common/types'
import {Fragment, useContext, useMemo} from 'react'
import {normalizeCartItemForRead, translatedProductTitle} from 'components/common/helpers'
import {Breadcrumbs} from 'components/common/Breadcrumbs'
import cn from 'classnames'
import {ConvertCurrency} from 'components/common/ConvertCurrency'
import {CurrencyContext} from 'components/common/CurrencyContext'
import {EmptyMessage} from 'components/common/EmptyMessage'
import moment from 'moment'
import OrderQuery from './graphql/order.graphql'
import {ProfileLayout} from 'components/profile/common/ProfileLayout'
import styles from './index.css'
import {useQuery} from '@apollo/react-hooks'
import {useRouter} from 'next/router'
import {useTranslation} from 'i18n'

type Order = {node: {
  financialStatus: string
  fulfillmentStatus: string
  lineItems: {edges: {node: CartItem}[]}[]
  name: string
  phone: string
  processedAt: string

  shippingAddress: {
    formatted: string
  }

  statusUrl: string

  successfulFulfillments: {
    trackingCompany: string

    trackingInfo: {
      number: string
      url: string
    }
  }

  totalPriceV2: {
    amount: number
  }
}}

export function Details(props: {
  className?: string
  id: string
}) {
  const router = useRouter()
  const {t, i18n} = useTranslation()
  const currencyCtx = useContext(CurrencyContext)

  const {data: orderData, loading}: {data: Order, loading: boolean} = useQuery(
    OrderQuery,
    {variables: {id: router.query.id}},
  )

  const cartItems: NormalizedCartItem[] = useMemo(
    () => R.compose(
      R.map(normalizeCartItemForRead),
      R.pluck('node'),
      R.pathOr([], ['node', 'lineItems', 'edges']),
    )(orderData),

    [orderData],
  )

  const breadcrumbs = useMemo(() => {
    return [
      {
        as   : '/profile/orders',
        href : '/profile/orders',
        title: t('myOrders'),
      },

      {
        as   : null,
        href : null,
        title: R.pathOr('', ['node', 'name'], orderData),
      },
    ]
  }, [orderData, t])

  if(loading)
    return <div>Loading...</div>

  return <ProfileLayout className={cn(styles.details, props.className)}>
    <div className="content">
      <Breadcrumbs className="breadcrumbs" items={breadcrumbs} />

      {orderData && <div className="section">
        <div className="list styled-scrollbar">
          <div className="section">
            {R.map(item => <div className="item" key={item.id}>
              {item.image
                ? <img className="image" src={item.image.transformedSrc} alt={item.image.altText} />
                : <EmptyMessage className="empty-message">{t('noImage')}</EmptyMessage>
              }

              <div className="content">
                <div className="vendor">{item.vendor}</div>

                <div className="title">
                  {translatedProductTitle({i18n, product: {handle: item.handle, title: item.title}, t})}
                </div>

                {R.map(o => <div key={o.name} className="size">{`${t(o.name)}: ${o.value}`}</div>, item.options || [])}
              </div>

              <div className="price">
                {item.quantity}
                {' x '}

                <ConvertCurrency from="USD" to={currencyCtx.active}>
                  {item.price}
                </ConvertCurrency>
              </div>
            </div>, cartItems)}

            {R.length(cartItems) === 0 && <EmptyMessage className="empty-message">
              {t('emptyOrderMessage')}
            </EmptyMessage>}
          </div>
        </div>

        <div className="main">
          <div className="section">
            <div className="label">{t('orderDate')}</div>

            <div className="value">
              {moment(orderData.node.processedAt, moment.ISO_8601)
                .locale(i18n.language || i18n.options['defaultLanguage'])
                .format('MMMM D, YYYY')}
            </div>
          </div>

          <div className="section">
            <div className="label">{t('orderStatus')}</div>
            <div className="value">{orderData.node.financialStatus}, {orderData.node.fulfillmentStatus}</div>
          </div>

          <div className="section">
            <div className="label">{t('orderTotal')}:</div>

            <div className="value">
              <ConvertCurrency from="USD" to={currencyCtx.active}>
                {orderData.node.totalPriceV2.amount}
              </ConvertCurrency>
            </div>
          </div>

          <div className="section">
            <h2 className="label">{t('shippingAddress')}</h2>

            <div className="value">
              {orderData.node.phone && <Fragment>
                {orderData.node.phone}
                <br />
              </Fragment>}

              {orderData.node.shippingAddress.formatted}
            </div>
          </div>

          <div className="section">
            <h2 className="label">{t('shippingMethod')}</h2>

            <div className="value">
              {orderData.node.successfulFulfillments.trackingCompany || 'No shipping method specified'}

              {orderData.node.successfulFulfillments.trackingInfo && <a
                className="link"
                href={orderData.node.successfulFulfillments.trackingInfo.url}
                rel="nofollow"
              >{orderData.node.successfulFulfillments.trackingInfo.number}</a>}
            </div>
          </div>

          <div className="note">
            {t('cancelOrderRequestMessage')}
            <br />
            <a className="link" href="mailto:support@cruvoir.com">support@cruvoir.com</a>
          </div>
        </div>
      </div>}

      {!orderData && <EmptyMessage className="empty-message">{t('orderNotFound')}</EmptyMessage>}
    </div>
  </ProfileLayout>
}
