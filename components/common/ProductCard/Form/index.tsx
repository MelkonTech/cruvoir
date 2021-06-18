import {Form as FormikForm, useFormikContext} from 'formik'
import {Option, Product} from 'components/common/types'
import {useCallback, useContext, useState} from 'react'
import {Button} from 'components/common/Button'
import {CartContext} from 'components/common/CartContext'
import cn from 'classnames'
import {SizesField} from './SizesField'
import styles from './index.css'
import {useTranslation} from 'i18n'
import {Variant} from 'components/common/types/variant'

export function Form(props: {
  className?: string
  isAvailableForSale: boolean
  options: Option[]
  product: Product
  unavailableOptions: Object
  variants: {node: Variant}[]
}) {
  const cartCtx = useContext(CartContext)
  const {t} = useTranslation()
  const {values} = useFormikContext<Record<'Size' | 'Color', string>>()
  const [isAddToBagLoading, setIsAddToBagLoading] = useState(false)

  const addToBag = useCallback(async () => {
    const addProductParams = {
      handle  : props.product.handle,
      quantity: 1,
      values  : values,
    }

    setIsAddToBagLoading(true)

    // Do not show confirmation popup on the cart page
    if(window.location.pathname === '/cart')
      await cartCtx.addProduct(addProductParams)
    else
      await cartCtx.addProductWithConfirm(addProductParams)

    setIsAddToBagLoading(false)
  }, [cartCtx, props.product.handle, values])

  return <FormikForm className={cn(styles.form, props.className)}>
    <SizesField
      className="field"
      options={props.options}
      values={values}
      variants={props.variants}
    />

    <Button
      appearance="outline"
      className="button"
      isLoading={isAddToBagLoading}
      disabled={!props.isAvailableForSale}
      width="flex"
      onClick={addToBag}
    >{t(props.isAvailableForSale ? 'addToBag' : 'soldOut')}</Button>
  </FormikForm>
}
