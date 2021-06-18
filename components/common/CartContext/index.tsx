import * as R from 'ramda'
import {CartItem, ShippingAddress} from 'components/common/types'
import {createContext, ReactNode, useCallback, useEffect, useMemo, useState} from 'react'
import {Product, Variant} from 'components/common/types'
import {useApolloClient, useMutation, useQuery} from '@apollo/react-hooks'
import {ApolloQueryResult} from 'apollo-client'
import ApplyDiscountCodeMutation from './graphql/apply-discount-code.graphql'
import {CartModal} from './CartModal'
import CheckoutCreateMutation from './graphql/create-checkout.graphql'
import CheckoutQuery from 'components/common/graphql/checkout.graphql'
import CheckoutUpdateMutation from './graphql/update-checkout.graphql'
import {ConfirmModal} from './ConfirmModal'
import Cookies from 'js-cookie'
import InventoryQuantityQuery from './graphql/inventory-quantity.graphql'
import ProductQuery from './graphql/product.graphql'
import RemoveDiscountCodeMutation from './graphql/remove-discount-code.graphql'
type AddToCartParams = {handle: string, quantity: number, values: Record<'Size' | 'Color', string>}

type ContextValue = {
  addProduct: (params: AddToCartParams) => Promise<void>
  addProductWithConfirm: (params: AddToCartParams) => Promise<void>
  applyPromoCode: (code: string) => Promise<void>
  cartItems: CartItem[]
  checkoutId: string
  clearCart: () => void
  fetchInventoryQuantityOfProducts: (ids: string[]) => void
  inventoryQuantityOfProducts: Record<string, Record<string, number>>
  discount: {code: string | null, typename: 'PricingPercentageValue' | 'MoneyV2', value: string | number}
  itemsCount: number
  openCart: () => void
  refetch: (params?: any) => Promise<ApolloQueryResult<any>>
  removeProduct: (variantID: string) => Promise<void>
  removePromoCode: () => Promise<void>
  shippingAddress?: ShippingAddress | null
  subtotal: number
  tax: number
  total: number
  updateProduct: (params: {variantID: string, quantity: number}) => Promise<void>
}

export const CartContext = createContext<ContextValue>({
  addProduct                      : () => null,
  addProductWithConfirm           : () => null,
  applyPromoCode                  : () => null,
  cartItems                       : [],
  checkoutId                      : '',
  clearCart                       : () => null,
  discount                        : null,
  fetchInventoryQuantityOfProducts: () => null,
  inventoryQuantityOfProducts     : {},
  itemsCount                      : 0,
  openCart                        : () => null,
  refetch                         : async () => null,
  removeProduct                   : () => null,
  removePromoCode                 : () => null,
  subtotal                        : 0,
  tax                             : 0,
  total                           : 0,
  updateProduct                   : () => null,
})

export function CartContextProvider(props:{children: ReactNode, initialValue: {checkoutId?: string}}) {
  const [addedProduct, setAddedProduct] = useState(null)
  const [checkoutId, setCheckoutId] = useState(props.initialValue.checkoutId)
  const [isConfirmShown, setIsConfirmShown] = useState(false)
  const closeConfirmation = useCallback(() => setIsConfirmShown(false), [])
  const [isCartShown, setIsCartShown] = useState(false)
  const closeCart = useCallback(() => setIsCartShown(false), [])
  const openCart = useCallback(() => setIsCartShown(true), [])

  const {data, refetch} = useQuery(
    CheckoutQuery,
    {skip: !checkoutId, variables: {id: checkoutId}},
  )

  const checkoutData = useMemo(() => checkoutId ? data : {}, [checkoutId, data])
  const [createCheckout] = useMutation(CheckoutCreateMutation)
  const [updateCheckout] = useMutation(CheckoutUpdateMutation)
  const [applyDiscountCode] = useMutation(ApplyDiscountCodeMutation)
  const [removeDiscountCode] = useMutation(RemoveDiscountCodeMutation)
  const apolloClient = useApolloClient()

  const convertItemsForRead = useCallback(inputData => R.compose(
    R.pluck('node'),
    R.pathOr<{node: CartItem}[]>([], ['node', 'lineItems', 'edges']),
  )(inputData), [])

  const subtotal = parseFloat(R.pathOr('0', ['node', 'subtotalPriceV2', 'amount'], checkoutData))

  const clearCart = useCallback(() => {
    setCheckoutId('')
    Cookies.remove('checkoutId')
  }, [])

  const discount = useMemo(() => R.compose(
    R.ifElse(
      Boolean,

      item => ({
        code    : item.node.code,
        typename: item.node.value.__typename,

        value: item.node.value.__typename === 'PricingPercentageValue'
          ? item.node.value.percentage
          : item.node.value.amount,
      }),

      () => ({
        code    : null,
        typename: 'MoneyV2',
        value   : '0',
      }),
    ),

    R.find<{node: {code?: string, value: any}}>(item => !!item.node.code),
  )(R.pathOr([], ['node', 'discountApplications', 'edges'], checkoutData)), [checkoutData])

  // The amount left to be paid. This is equal to the cost of the line items, taxes and shipping minus discounts and gift cards.
  const total = parseFloat(R.pathOr('0', ['node', 'paymentDueV2', 'amount'], checkoutData))

  const tax = parseFloat(R.pathOr('0', ['node', 'totalTaxV2', 'amount'], checkoutData))
  const cartItems = useMemo(() => convertItemsForRead(checkoutData), [checkoutData, convertItemsForRead])
  const [inventoryQuantityOfProducts, setInventoryQuantityOfProducts] = useState({})

  const addProduct = useCallback<ContextValue['addProduct']>(async params => {
    try {
      // Find a product’s variant based on its selected options.
      const product = await apolloClient.query({
        fetchPolicy: 'no-cache',
        query      : ProductQuery,

        variables: {
          handle         : params.handle,
          selectedOptions: R.map(key => ({name: key, value: params.values[key]}), Object.keys(params.values)),
        },
      })

      const variantID = product.data.productByHandle.variantBySelectedOptions.id

      // Prevent cart items quantity going over the stock
      // Consider requested quantity and the quantity of the item that was already added
      const newInventoryQuantityOfProduct = R.pathOr(
        1,
        [product.data.productByHandle.id, variantID],
        inventoryQuantityOfProducts,
      ) - params.quantity - R.compose<CartItem[], CartItem, number>(
        R.propOr(0, 'quantity'),

        R.find(cartItem => cartItem.variant.product.id === product.data.productByHandle.id &&
          cartItem.variant.id === variantID),
      )(cartItems)

      if(newInventoryQuantityOfProduct < 0)
        console.log('Stock is empty!')

      let result = null

      if(checkoutId && newInventoryQuantityOfProduct >= 0) {
        // Check item variant already in cart
        const idx = R.findIndex(item => item.variant.id === variantID, cartItems)

        // Prepare items which already in cart
        const lineItems = R.map(item => ({quantity: item.quantity, variantId: item.variant.id}), cartItems)

        if(~idx)
          lineItems[idx].quantity += params.quantity
        else
          lineItems.push({quantity: params.quantity, variantId: variantID})

        result = await updateCheckout({variables: {
          checkoutId: checkoutId,
          lineItems : lineItems,
        }})
      }else if(newInventoryQuantityOfProduct >= 0){
        result = await createCheckout({variables: {input: {
          lineItems: [{quantity: params.quantity, variantId: variantID}],
        }}})

        setCheckoutId(result.data.checkoutCreate.checkout.id)
        Cookies.set('checkoutId', result.data.checkoutCreate.checkout.id, {expires: 30}) // expires in days
      }

      setAddedProduct({
        image: R.compose(
          R.path(['node']),
          R.head,
        )(product.data.productByHandle.images.edges),

        title : product.data.productByHandle.title,
        vendor: product.data.productByHandle.vendor,
      })

      await refetch()
      return result
    } catch(e) {
      console.error(e)
    }
  }, [apolloClient, cartItems, checkoutId, createCheckout, inventoryQuantityOfProducts, refetch, updateCheckout])

  const updateProduct = useCallback(async (params: {variantID: string, quantity: number}) => {
    const cachedData = apolloClient.readQuery({query: CheckoutQuery, variables: {id: checkoutId}})

    const newSubtotal = R.compose(
      R.sum,

      R.map<CartItem, number>(
        cartItem => (
          cartItem.variant.id === params.variantID ? params.quantity : cartItem.quantity
        ) * parseFloat(cartItem.variant.priceV2.amount.toString()),
      ),
    )(cartItems)

    apolloClient.writeQuery({
      data: {
        ...cachedData,

        node: {
          ...cachedData.node,

          lineItems: {
            ...cachedData.node.lineItems,

            edges: R.map(
              (item: {node: CartItem}) => ({
                ...item,

                node: {
                  ...item.node,
                  quantity: item.node.variant.id === params.variantID ? params.quantity : item.node.quantity,
                },
              }),

              cachedData.node.lineItems.edges,
            ),
          },

          paymentDueV2   : {...cachedData.node.paymentDueV2, amount: newSubtotal},
          subtotalPriceV2: {...cachedData.node.subtotalPriceV2, amount: newSubtotal},
        },
      },

      query    : CheckoutQuery,
      variables: {id: checkoutId},
    })

    try {
      await updateCheckout({
        variables: {
          checkoutId: checkoutId,

          lineItems: R.map(item => ({
            quantity : item.variant.id === params.variantID ? params.quantity : item.quantity,
            variantId: item.variant.id,
          }), convertItemsForRead(cachedData)),
        },
      })
    } catch(e) {
      console.error(e)

      // Refetch only then request failed!
      await refetch()
    }
  }, [checkoutId, apolloClient, cartItems, convertItemsForRead, refetch, updateCheckout])

  const removeProduct = useCallback(async (variantID: string) => {
    // WARN read/write queries used for "optimistic" UI without races
    const cachedData = apolloClient.readQuery({query: CheckoutQuery, variables: {id: checkoutId}})

    const newSubtotal = R.compose<CartItem[], CartItem[], number[], number>(
      R.sum,
      R.map(cartItem => cartItem.quantity * parseFloat(cartItem.variant.priceV2.amount.toString())),
      R.reject((cartItem: CartItem) => cartItem.variant.id === variantID),
    )(cartItems)

    apolloClient.writeQuery({
      data: {
        ...cachedData,

        node: {
          ...cachedData.node,

          lineItems: {
            ...cachedData.node.lineItems,

            edges: R.filter(
              (i: {node: CartItem}) => i.node.variant.id !== variantID,
              cachedData.node.lineItems.edges,
            ),
          },

          paymentDueV2   : {...cachedData.node.paymentDueV2, amount: newSubtotal},
          subtotalPriceV2: {...cachedData.node.subtotalPriceV2, amount: newSubtotal},
        },
      },

      query    : CheckoutQuery,
      variables: {id: checkoutId},
    })

    try {
      await updateCheckout({
        variables: {
          checkoutId: checkoutId,

          lineItems: R.compose<CartItem[], CartItem[], any>(
            R.map((item: any) => ({quantity: item.quantity, variantId: item.variant.id})),
            R.filter((item: CartItem) => item.variant.id !== variantID),
          )(convertItemsForRead(cachedData)),
        },
      })
    } catch(e) {
      console.error(e)

      // Refetch only then request failed!
      await refetch()
    }
  }, [checkoutId, apolloClient, cartItems, convertItemsForRead, refetch, updateCheckout])

  const addProductWithConfirm = useCallback<ContextValue['addProduct']>(async params => {
    setIsCartShown(false)
    setIsConfirmShown(false)
    const result = await addProduct(params)
    setIsConfirmShown(true)
    return result
  }, [addProduct])

  const fetchInventoryQuantityOfProducts = useCallback(async (ids: string[]) => {
    // {<product id>: {<variant id>: <quantity>}}
    setInventoryQuantityOfProducts(R.reduce((acc, product: Product) => R.assoc(

      // Admin API returns decoded ids — decode them to base64 in order to match ids returned by Storefront API
      btoa(product.id),

      R.compose<{node: Variant}[], [string, number][], Record<string, number>>(
        R.fromPairs,

        R.map<{node: Variant}, [string, number]>(
          (variant: {node: Variant}) => [btoa(variant.node.id), variant.node.inventoryQuantity || 0],
        ),
      )(product.variants.edges),

      acc,
    ),

    {},

    R.pathOr([], ['data', 'nodes'], await apolloClient.query({
      context  : {isInternalAPI: true},
      query    : InventoryQuantityQuery,
      variables: {ids: ids},
    }))))
  }, [apolloClient])

  const applyPromoCode = useCallback(async (code: string) => {
    try {
      const r = await applyDiscountCode({variables: {checkoutId: checkoutId, discountCode: code}})

      const errors = R.compose(
        R.pluck('message'),
        R.pathOr([], ['checkoutUserErrors']),
      )(r.data.checkoutDiscountCodeApplyV2)

      if(R.length(errors))
        return Promise.reject(errors[0])
    } catch(e) {
      console.error(e)
    }

    await refetch()
  }, [applyDiscountCode, checkoutId, refetch])

  const removePromoCode = useCallback(async () => {
    try {
      const r = await removeDiscountCode({variables: {checkoutId: checkoutId}})

      const errors = R.compose(
        R.pluck('message'),
        R.pathOr([], ['checkoutUserErrors']),
      )(r.data.checkoutDiscountCodeRemove)

      if(R.length(errors))
        return Promise.reject(errors[0])
    } catch(e) {
      console.error(e)
    }

    await refetch()
  }, [checkoutId, refetch, removeDiscountCode])

  const contextValue = useMemo<ContextValue>(() => ({
    addProduct           : addProduct,
    addProductWithConfirm: addProductWithConfirm,
    applyPromoCode       : applyPromoCode,
    cartItems            : cartItems,
    checkoutId           : checkoutId,
    clearCart            : clearCart,
    discount             : discount,
    fetchInventoryQuantityOfProducts,
    inventoryQuantityOfProducts,
    itemsCount           : cartItems.length,
    openCart             : openCart,
    refetch              : refetch,
    removeProduct        : removeProduct,
    removePromoCode      : removePromoCode,
    shippingAddress      : R.path(['node', 'shippingAddress'], checkoutData),
    subtotal             : subtotal,
    tax                  : tax,
    total                : total,
    updateProduct        : updateProduct,
  }), [
    addProduct, addProductWithConfirm, applyPromoCode, cartItems, checkoutId, clearCart, discount,
    fetchInventoryQuantityOfProducts, inventoryQuantityOfProducts, openCart, refetch, removeProduct, removePromoCode,
    checkoutData, subtotal, tax, total, updateProduct,
  ])

  useEffect(() => {
    let timeoutId

    if(isConfirmShown)
      timeoutId = setTimeout(() => setIsConfirmShown(false), 5000)

    return () => clearTimeout(timeoutId)
  }, [isConfirmShown])

  return <CartContext.Provider value={contextValue}>
    {props.children}

    {isCartShown && <CartModal
      removeProduct={removeProduct}
      updateProduct={updateProduct}
      close={closeCart}
      itemsCount={cartItems.length}
      items={cartItems}
      subtotal={contextValue.subtotal}
    />}

    {isConfirmShown && <ConfirmModal
      subtotal={contextValue.subtotal}
      itemsCount={cartItems.length}
      close={closeConfirmation}
      product={addedProduct}
    />}
  </CartContext.Provider>
}
