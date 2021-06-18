import * as R from 'ramda'
import {Fragment, useContext, useMemo} from 'react'
import cn from 'classnames'
import {ConvertCurrency} from 'components/common/ConvertCurrency'
import {Currency} from 'components/common/types'
import {CurrencyContext} from 'components/common/CurrencyContext'
import {EmptyMessage} from 'components/common/EmptyMessage'
import {Link} from 'components/common/Link'
import moment from 'moment'
import OrdersQuery from './graphql/orders.graphql'
import {Paginator} from 'components/common/Paginator'
import {ProfileLayout} from 'components/profile/common/ProfileLayout'
import styles from './index.css'
import {useQuery} from '@apollo/react-hooks'
import {UserContext} from 'components/common/UserContext'
import {useTranslation} from 'i18n'

export function List(props: {
  className?: string
  query: Record<string, string>
}) {
  const {t, i18n} = useTranslation()
  const currencyCtx = useContext(CurrencyContext)
  const userCtx = useContext(UserContext)
  const perPage = 10

  const {data: ordersData, loading} = useQuery(OrdersQuery, {variables: {
    customerAccessToken: userCtx.accessToken,
    ...props.query.after ? {after: props.query.after} : {},
    ...props.query.before ? {before: props.query.before} : {},
    ...props.query.before ? {last: perPage} : {first: perPage},
  }})

  const urlBaseAs = '/profile/orders'
  const urlBaseHref = '/profile/orders'
  const orders = useMemo(() => R.pathOr([], ['customer', 'orders', 'edges'], ordersData), [ordersData])

  const firstCursor = useMemo(() => R.compose(
    R.path(['cursor']),
    R.head,
  )(orders), [orders])

  const lastCursor = useMemo(() => R.compose(
    R.path(['cursor']),
    R.last,
  )(orders), [orders])

  const pageInfo: {hasNextPage: boolean, hasPreviousPage: boolean} = R.path(['orders', 'pageInfo'], ordersData)
  const previousLinkAs = R.prop('hasPreviousPage', pageInfo) ? `${urlBaseAs}?before=${firstCursor}` : null
  const previousLinkHref = R.prop('hasPreviousPage', pageInfo) ? `${urlBaseHref}&before=${firstCursor}` : null
  const nextLinkAs = R.prop('hasNextPage', pageInfo) ? `${urlBaseAs}?after=${lastCursor}` : null
  const nextLinkHref = R.prop('hasNextPage', pageInfo) ? `${urlBaseHref}&after=${lastCursor}` : null
  const isEmpty = R.isEmpty(orders)

  if(loading)
    return <div>Loading...</div>

  return <ProfileLayout className={cn(styles.list, props.className)}>
    <div className="content">
      {isEmpty && <EmptyMessage className="empty-message">
        {t('noOrdersYet')}
      </EmptyMessage>}

      {!isEmpty && <Fragment>
        <table className="table">
          <tbody className="head">
            <tr className="row">
              <th className="cell">{t('orderNo')}</th>
              <th className="cell">{t('status')}</th>
              <th className="cell" style={{width: '50%'}}>{t('content')}</th>
              <th className="cell">{t('total')}</th>
            </tr>
          </tbody>

          <tbody className="body">
            {R.map(
              (order: {node: {
                currencyCode: Currency
                financialStatus: string
                fulfillmentStatus: string
                id: string
                lineItems: {edges: {node: {currentQuantity: number, title: string}}[]}
                name: string
                orderNumber: string
                processedAt: string
                statusUrl: string

                totalPriceV2: {
                  amount: number
                  currencyCode: Currency
                }
              }}) => <tr className="row" key={order.node.id}>
                <td className="cell" data-label={t('orderNo')}>
                  <span className="label">
                    <Link
                      as={`/profile/orders/${order.node.id}`}
                      className="link"
                      href="/profile/orders/[id]"
                    >#{order.node.orderNumber}</Link>

                    {` / ${moment(order.node.processedAt, moment.ISO_8601)
                      .locale(i18n.language || i18n.options['defaultLanguage'])
                      .format('MMMM D, YYYY')}`}
                  </span>
                </td>

                <td className="cell" data-label={t('status')}>
                  <span className="label">{order.node.financialStatus}, {order.node.fulfillmentStatus}</span>
                </td>

                <td className="cell" data-label={t('content')}>
                  <span className="label is-uppercased">
                    {R.map(edge => `${edge.node.title} X ${edge.node.currentQuantity}`, order.node.lineItems.edges)
                      .join(', ')}
                  </span>
                </td>

                <td className="cell" data-label={t('total')}>
                  <span className="important">
                    <ConvertCurrency from="USD" to={currencyCtx.active}>
                      {order.node.totalPriceV2.amount}
                    </ConvertCurrency>
                  </span>
                </td>
              </tr>,

              orders,
            )}
          </tbody>
        </table>

        <Paginator
          className="paginator"
          nextLinkAs={nextLinkAs}
          nextLinkHref={nextLinkHref}
          previousLinkAs={previousLinkAs}
          previousLinkHref={previousLinkHref}
        />
      </Fragment>}
    </div>
  </ProfileLayout>
}
