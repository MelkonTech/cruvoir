import * as R from 'ramda'
import {createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState} from 'react'
import {useMutation, useQuery} from '@apollo/react-hooks'
import AddToWishListMutation from './graphql/add-to-wishlist.graphql'
import {AuthModalContext} from 'components/common/AuthModalContext'
import RemoveFromWishListMutation from './graphql/remove-from-wishlist.graphql'
import {UserContext} from 'components/common/UserContext'
import WishListQuery from './graphql/wishlist.graphql'
type Wish = {customer_id: string, id: string, product_id: string}
type WishList = Wish[]

type ContextValue = {
  add: (productId: string) => void
  isWished: (productId: string) => boolean
  list: WishList
  remove: (productId: string) => void
}

export const WishListContext = createContext<ContextValue>({
  add     : () => null,
  isWished: () => false,
  list    : [],
  remove  : () => null,
})

export function WishListContextProvider(props: {
  children: ReactNode
}) {
  const [addToWishList] = useMutation(AddToWishListMutation, {context: {isInternalAPI: true}})
  const authModalCtx = useContext(AuthModalContext)
  const [removeFromWishList] = useMutation(RemoveFromWishListMutation, {context: {isInternalAPI: true}})
  const userCtx = useContext(UserContext)
  const customerId = R.prop('id', userCtx.user)
  const [delayedAddProductId, setAddDelayedProductId] = useState<string | null>(null)
  const isCustomerLoggedIn = Boolean(userCtx.user)

  const {data, loading}: {data: {wishlist: WishList}, loading: boolean} = useQuery(
    WishListQuery,
    {context: {isInternalAPI: true}, skip: !isCustomerLoggedIn, variables: {customerId: customerId}},
  )

  const list = loading || !isCustomerLoggedIn ? [] : data.wishlist

  // When user is not loggedin all products are shown as non-wished — there is no way non-loggedin
  // user will unwish a product
  const add = useCallback((productId: string) => {
    if(!isCustomerLoggedIn) {
      authModalCtx.setActive('signin')
      setAddDelayedProductId(productId)
      return
    }

    addToWishList({
      optimisticResponse: {
        __typename: 'mutation_root',

        insert_wishlist: {
          __typename: 'wishlist_mutation_response',

          returning: [{
            __typename : 'wishlist',
            customer_id: customerId,

            // The pair of customerId: str and productId: str is unique on DB side
            id: customerId + productId,

            product_id: productId,
          }],
        },
      },

      update: (proxy, response) => {
        const chacheQueryParams = {query: WishListQuery, variables: {customerId: customerId}}
        const listFromCache: {wishlist: WishList} = proxy.readQuery(chacheQueryParams)

        proxy.writeQuery({
          ...chacheQueryParams,
          data: {wishlist: [...listFromCache.wishlist, ...response.data.insert_wishlist.returning]},
        })
      },

      variables: {customerId: customerId, productId},
    })
  }, [addToWishList, authModalCtx, customerId, isCustomerLoggedIn])

  const remove = useCallback((productId: string) => {
    removeFromWishList({
      optimisticResponse: {
        __typename: 'mutation_root',

        delete_wishlist: {
          __typename: 'wishlist_mutation_response',
          
          returning: [{
            __typename : 'wishlist',
            customer_id: customerId,
            id         : R.find<Wish>(R.propEq('product_id', productId), list).id,
            product_id : productId,
          }],
        },
      },

      update: proxy => {
        const chacheQueryParams = {query: WishListQuery, variables: {customerId: customerId}}
        const listFromCache: {wishlist: WishList} = proxy.readQuery(chacheQueryParams)

        proxy.writeQuery({
          ...chacheQueryParams,
          data: {wishlist: R.reject(R.propEq('product_id', productId), listFromCache.wishlist)},
        })
      },

      variables: {customerId, productId},
    })
  }, [customerId, list, removeFromWishList])

  const isWished = useCallback(
    (productId: string): boolean => R.any(R.propEq('product_id', productId), list),
    [list],
  )

  const value = useMemo(() => ({
    add,
    isWished,
    list,
    remove,
  }), [add, isWished, list, remove])

  // When user data arrives wish a product that was wished before sign in
  useEffect(() => {
    if(userCtx.user && delayedAddProductId) {
      setAddDelayedProductId(null)
      add(delayedAddProductId)
    }
  }, [add, delayedAddProductId, setAddDelayedProductId, userCtx])

  return <WishListContext.Provider value={value}>{props.children}</WishListContext.Provider>
}
