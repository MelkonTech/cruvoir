import * as R from 'ramda'
import {FacebookShareButton, PinterestShareButton, TwitterShareButton} from 'react-share'
import {Form as FormikForm, useFormikContext} from 'formik'
import {Image, Option} from 'components/common/types'
import {nameToHandle, translatedProductDescription, translatedProductTitle} from 'components/common/helpers'
import {Product, Variant} from 'components/common/types'
import {useCallback, useContext, useEffect, useState} from 'react'
import {Button} from 'components/common/Button'
import {CartContext} from 'components/common/CartContext'
import cn from 'classnames'
import getConfig from 'next/config'
import {Icon} from 'components/common/Icon'
import {Price} from 'components/common/types'
import {PriceWithCompareAt} from 'components/common/PriceWithCompareAt'
import sanitizeHtml from 'sanitize-html'
import {SizeField} from './SizeField'
import styles from './index.css'
import {useTranslation} from 'i18n'
import {WishButton} from 'components/common/WishButton'
const {publicRuntimeConfig} = getConfig()

export function Form(props: {
  className?: string
  compareAtPrice?: Price
  featuredImage?: Image
  gender: string
  isAvailableForSale: boolean
  options: Option[]
  price: Price
  product: Product
  selectedVariant?: Variant
  unavailableOptions: Object
}) {
  const cartCtx = useContext(CartContext)
  const {values} = useFormikContext<Record<'Size' | 'Color', string>>()
  const {t, i18n} = useTranslation()
  const sharingTitle = `${props.product.title} by ${props.product.vendor}`
  const [isAddToBagLoading, setIsAddToBagLoading] = useState(false)

  const sharingURL = R.join('/', [
    publicRuntimeConfig.NEXT_PUBLIC_APP_URL,
    props.gender.toLowerCase(),
    'shop/item',
    nameToHandle(props.product.vendor),
    props.product.handle,
  ])

  const addToBag = useCallback(async () => {
    setIsAddToBagLoading(true)

    await cartCtx.addProductWithConfirm({
      handle  : props.product.handle,
      quantity: 1,
      values,
    })

    setIsAddToBagLoading(false)
  }, [cartCtx, props.product.handle, values])

  useEffect(
    () => {
      cartCtx.fetchInventoryQuantityOfProducts([props.product.id])
    },

    // Fetching invtory quanity while update cart context object — avoid infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.product],
  )

  return <FormikForm className={cn(styles.form, props.className)}>
    <div className="section">
      <p className="vendor">{props.product.vendor}</p>
      <h1 className="title">{translatedProductTitle({i18n, product: props.product, t})}</h1>

      <PriceWithCompareAt
        className="price"
        compareAtPrice={R.path(['amount'], props.compareAtPrice)}
        hasPercent
        price={Number(R.path(['amount'], props.price))}
      />

      <hr className="divider" />

      <div className="share">
        <FacebookShareButton className="button" quote={sharingTitle} url={sharingURL}>
          <Icon className="icon" name="facebook" />
        </FacebookShareButton>

        <PinterestShareButton
          className="button"
          description={sharingTitle}
          media={props.featuredImage ? props.featuredImage.originalSrc : ''}
          url={sharingURL}
        >
          <Icon className="icon" name="pinterest" />
        </PinterestShareButton>

        <TwitterShareButton className="button" title={sharingTitle} url={sharingURL}>
          <Icon className="icon" name="twitter" />
        </TwitterShareButton>
      </div>

      <hr className="divider" />

      <div
        className="description"

        dangerouslySetInnerHTML={{__html: sanitizeHtml(
          translatedProductDescription({i18n, product: props.product, t}),
          {allowedTags: sanitizeHtml.defaults.allowedTags.concat(['dl', 'dt', 'dd'])},
        )}}
      />

      <WishButton className="wish" productId={props.product.id} />
    </div>

    <div className="actions">
      {R.map((option: Option) => <SizeField
        className="field"
        key={option.name}
        option={option}
        unavailableOptions={props.unavailableOptions[option.name] || []}
      />, props.options)}

      <Button
        disabled={!props.isAvailableForSale}
        className="button"
        isLoading={isAddToBagLoading}
        onClick={addToBag}
        width="flex"
        {...props.isAvailableForSale && {icon: 'cart'}}
      >
        {t(props.isAvailableForSale ? 'addToBag' : 'soldOut')}
      </Button>
    </div>
  </FormikForm>
}
