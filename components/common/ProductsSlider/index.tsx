import cn from 'classnames'
import {Product} from 'components/common/types'
import {ProductCard} from 'components/common/ProductCard'
import {Slider} from 'components/common/Slider'
import styles from './index.css'
import {useTranslation} from 'i18n'

export function ProductsSlider(props: {
  className?: string
  products: Product[]
}) {
  const {t} = useTranslation()

  return <Slider
    className={cn(styles.productsSlider, props.className)}
    emptyMessage={t('noProductsFound')}
    hasNavigation
    noStyles
  >
    {props.products.map((product, productIndex) => <div className="slide" key={`product-${productIndex}`}>
      <ProductCard product={product} />
    </div>)}
  </Slider>
}
