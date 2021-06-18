import * as R from 'ramda'
import {Option, Variant} from 'components/common/types'
import {getVariantOptionByName} from 'components/common/helpers'

// Example — red color of a t-shirt may not be available in S or M size
export const getUnavailableOptions = (values, options: Option[], variants) => R.reduce(
  (obj, variant: {node: Variant}) => {
    if(variant.node.selectedOptions.length > 1) {
      for(let key in values)
        if(getVariantOptionByName(key, variant.node) === values[key])
          R.forEach(
            option => {
              if(option.name !== key && obj[option.name])
                obj[option.name].push(option.value)
            },

            variant.node.selectedOptions,
          )
    }else
      obj[variant.node.selectedOptions[0].name].push(variant.node.selectedOptions[0].value)

    return obj
  },

  R.reduce((obj, option) => R.assoc(option.name, [], obj), {}, options),

  R.filter(
    variant => variant.node.availableForSale === false,
    variants,
  ),
)
