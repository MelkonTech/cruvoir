import * as R from 'ramda'
import {Popup, ShippingAddress} from 'components/common/types'
import {useCallback, useContext, useState} from 'react'
import {ApolloQueryResult} from 'apollo-client'
import cn from 'classnames'
import DeleteCustomerAddressMutation from './graphql/delete-customer-address.graphql'
import {Loading} from 'components/common/Loading'
import styles from './index.css'
import {UnderlineWrapper} from 'components/common/UnderlineWrapper'
import {useMutation} from '@apollo/react-hooks'
import {UserContext} from 'components/common/UserContext'
import {useTranslation} from 'i18n'

export function Item(props: {
  addressesRefetch: (params?: any) => Promise<ApolloQueryResult<any>>
  address: ShippingAddress
  className?: string
  setShownItemId: (string) => void
  editFormPopup: Popup
}) {
  const {t} = useTranslation()
  const userCtx = useContext(UserContext)
  const [deleteAddressMutation] = useMutation(DeleteCustomerAddressMutation)
  const addressId = props.address.id
  const [submitErrors, setSubmitErrors] = useState([])
  const [isLoadingLayerShown, setLoadingLayerShown] = useState(false)
  const addressesRefetch = props.addressesRefetch
  const setShownItemId = props.setShownItemId
  const editFormPopup = props.editFormPopup

  const showUpdateForm = useCallback(() => {
    setShownItemId(props.address.id)
    editFormPopup.show()
  }, [props.address.id, setShownItemId, editFormPopup])

  const deleteAddress = useCallback(async () => {
    let errors = []
    setLoadingLayerShown(true)

    try {
      const r = await deleteAddressMutation({variables: {
        customerAccessToken: userCtx.accessToken,
        id                 : addressId,
      }})

      errors = R.compose(
        R.pluck('message'),
        R.pathOr([], ['customerUserErrors']),
      )(r.data.customerAddressDelete)
    } catch(e) {
      errors = R.compose(
        R.pluck('message'), R.pathOr([], ['graphQLErrors']),
      )(e) || [t('deletingAShippingAddressFailed')]
    }

    if(R.isEmpty(errors))
      await addressesRefetch()

    else{
      setSubmitErrors(errors)
      setLoadingLayerShown(false)
    }
  }, [addressesRefetch, addressId, deleteAddressMutation, t, userCtx.accessToken])

  return <div className={cn(styles.item, props.className)}>
    <div className="section">
      <h3 className="name">{props.address.name}</h3>
      <div className="phone">{props.address.phone}</div>
      <div className="address">{props.address.formatted.join(', ')}</div>
    </div>

    <div className="buttons">
      <UnderlineWrapper className="wrapper" isPermanent>
        <button className="button type--delete" onClick={deleteAddress}>{t('remove')}</button>
      </UnderlineWrapper>

      <UnderlineWrapper className="wrapper" isPermanent>
        <button className="button type--edit" onClick={showUpdateForm}>{t('edit')}</button>
      </UnderlineWrapper>
    </div>

    <Loading className={cn('loading-layer', {'is-shown': isLoadingLayerShown})} />

    {!R.isEmpty(submitErrors) && <div className="error-message">
      {R.map(message => <div className="row" key={message}>{message}</div>, submitErrors)}
    </div>}
  </div>
}
