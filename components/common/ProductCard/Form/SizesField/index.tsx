import * as R from 'ramda'
import cn from 'classnames'
import {getVariantOptionByName} from 'components/common/helpers'
import {Item} from './Item'
import {Option} from 'components/common/types'
import {Slider} from 'components/common/Slider'
import styles from './index.css'
import {Variant} from 'components/common/types/variant'

export function SizesField(props: {
  className?: string
  options: Option[]
  values: Record<'Size' | 'Color', string>
  variants: {node: Variant}[]
}) {
  return <Slider
    className={cn(styles.sizesField, props.className)}
    hasNavigation
  >
    {R.map(
      (option: Option) => R.map(value => {
        const isAvailableForSale = R.pathOr(false, ['node', 'availableForSale'], R.find(variant => {
          const variantColor = getVariantOptionByName('Color', variant.node)

          if(
            (!props.values.Color || !variantColor || variantColor === props.values.Color) &&
              getVariantOptionByName('Size', variant.node) === value
          )
            return true
        }, props.variants))

        return <Item
          className="slide"
          isAvailableForSale={isAvailableForSale}
          key={value}
          name={option.name}
          value={value}
        />
      }, option.values),

      props.options,
    )}
  </Slider>
}
