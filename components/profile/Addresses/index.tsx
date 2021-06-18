import * as R from 'ramda'
import {Fragment, useContext, useMemo, useState} from 'react'
import {Add} from './Add'
import AddressesQuery from './graphql/addresses.graphql'
import cn from 'classnames'
import {Edit} from './Edit'
import {EmptyMessage} from 'components/common/EmptyMessage'
import {Item} from './Item'
import {Paginator} from 'components/common/Paginator'
import {ProfileLayout} from 'components/profile/common/ProfileLayout'
import {ShippingAddress} from 'components/common/types'
import styles from './index.css'
import {UnderlineWrapper} from 'components/common/UnderlineWrapper'
import {usePopup} from 'components/common/hooks'
import {useQuery} from '@apollo/react-hooks'
import {UserContext} from 'components/common/UserContext'
import {useTranslation} from 'i18n'

export function Addresses(props: {
  className?: string
  query: Record<string, string>
}) {
  const {t} = useTranslation()
  const userCtx = useContext(UserContext)
  const perPage = 10

  const {data: addressesData, loading, refetch: addressesRefetch} = useQuery(AddressesQuery, {variables: {
    customerAccessToken: userCtx.accessToken,
    ...props.query.after ? {after: props.query.after} : {},
    ...props.query.before ? {before: props.query.before} : {},
    ...props.query.before ? {last: perPage} : {first: perPage},
  }})

  const urlBaseAs = '/profile/addresses'
  const urlBaseHref = '/profile/addresses'
  const addresses = useMemo(() => R.pathOr([], ['addresses', 'edges'], addressesData), [addressesData])

  const firstCursor = useMemo(() => R.compose(
    R.path(['cursor']),
    R.head,
  )(addresses), [addresses])

  const lastCursor = useMemo(() => R.compose(
    R.path(['cursor']),
    R.last,
  )(addresses), [addresses])

  const pageInfo: {hasNextPage: boolean, hasPreviousPage: boolean} = R.path(['addresses', 'pageInfo'], addressesData)
  const previousLinkAs = R.prop('hasPreviousPage', pageInfo) ? `${urlBaseAs}?before=${firstCursor}` : null
  const previousLinkHref = R.prop('hasPreviousPage', pageInfo) ? `${urlBaseHref}&before=${firstCursor}` : null
  const nextLinkAs = R.prop('hasNextPage', pageInfo) ? `${urlBaseAs}?after=${lastCursor}` : null
  const nextLinkHref = R.prop('hasNextPage', pageInfo) ? `${urlBaseHref}&after=${lastCursor}` : null
  const listData = useMemo(() => R.pathOr([], ['customer', 'addresses', 'edges'], addressesData), [addressesData])
  const isEmpty = R.isEmpty(listData)
  const addFormPopup = usePopup()
  const editFormPopup = usePopup()
  const [shownItemId, setShownItemId] = useState(null)

  const editableAddress = useMemo<ShippingAddress>(
    () => R.path(['0', 'node'], listData.filter(address => shownItemId === address.node.id)),
    [listData, shownItemId],
  )

  if(loading)
    return <div>Loading...</div>

  return <ProfileLayout className={cn(styles.addresses, props.className)}>
    <div className="content">
      {!editFormPopup.isShown && !addFormPopup.isShown && <Fragment>
        <UnderlineWrapper className="button-wrapper" isPermanent>
          <button className="button" onClick={addFormPopup.show}>{t('addNewAddress')}</button>
        </UnderlineWrapper>

        {isEmpty && <EmptyMessage className="empty-message">
          {t('noAddressesYet')}
        </EmptyMessage>}

        {!isEmpty && <Fragment>
          <div className="list">
            {R.map((address: {node: ShippingAddress}) => <Item
              address={address.node}
              addressesRefetch={addressesRefetch}
              className="item"
              key={address.node.id}
              setShownItemId={setShownItemId}
              editFormPopup={editFormPopup}
            />, listData)}
          </div>

          <Paginator
            className="paginator"
            nextLinkAs={nextLinkAs}
            nextLinkHref={nextLinkHref}
            previousLinkAs={previousLinkAs}
            previousLinkHref={previousLinkHref}
          />
        </Fragment>}
      </Fragment>}

      {addFormPopup.isShown && <Add
        addressesRefetch={addressesRefetch}
        cancel={addFormPopup.close}
        className="form"
      />}

      {editFormPopup.isShown && <Edit
        address={editableAddress}
        addressesRefetch={addressesRefetch}
        cancel={editFormPopup.close}
        className="form"
      />}
    </div>
  </ProfileLayout>
}
