import * as R from 'ramda'
import {ChangeEvent, useCallback, useMemo} from 'react'
import {NativeSelect} from 'components/common/form'

export function Quantity(props: {
  className?: string
  maxQuantity: number
  updateProduct: (params: {variantID: string, quantity: number}) => Promise<void>
  variantID: string
  value: string | number
}) {
  const updateProduct = props.updateProduct

  const updateQuantity = useCallback((event: ChangeEvent<HTMLSelectElement>) => updateProduct({
    quantity : parseInt(event.currentTarget.value, 10),
    variantID: props.variantID,
  }), [props.variantID, updateProduct])

  // WARN Temporary options. Replace with real
  const quantityOptions = useMemo(
    () => R.map(i => ({label: String(i), value: String(i)}))(R.range(1, props.maxQuantity + 1)),
    [props.maxQuantity],
  )

  return <NativeSelect
    className={props.className}
    onChange={updateQuantity}
    options={quantityOptions}
    value={props.value}
  />
}
