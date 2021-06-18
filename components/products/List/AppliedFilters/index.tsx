import {useCallback, useContext, useMemo} from 'react'
import cn from 'classnames'
import {CurrencyContext} from 'components/common/CurrencyContext'
import {Item} from './Item'
import {ProductsFilter} from 'components/common/types'
import styles from './index.css'
import {UnderlineWrapper} from 'components/common/UnderlineWrapper'
import {useFormikContext} from 'formik'
import {useTranslation} from 'i18n'

export function AppliedFilters(props: {
  className?: string
}) {
  const {t} = useTranslation()
  const {setFieldValue, values} = useFormikContext<ProductsFilter>()
  const currencyCtx = useContext(CurrencyContext)

  const prefix = useMemo(() => ({
    CAD: 'C$', EUR: '€', GBP: '£', USD: '$',
  })[currencyCtx.active], [currencyCtx.active])

  const clear = useCallback(() => {
    setFieldValue('colors', [])
    setFieldValue('minPrice', '')
    setFieldValue('maxPrice', '')
    setFieldValue('vendors', [])
    setFieldValue('tags', [])
  }, [setFieldValue])

  const hasAppliedFilters = values.colors.length > 0 || values.minPrice !== '' || values.maxPrice !== '' ||
  values.vendors.length > 0 || values.tags.length > 0

  return <div className={cn(styles.appliedFilters, props.className, {'is-shown': hasAppliedFilters})}>
    <div className="wrapper">
      {values.colors.map(item => <Item
        className="item"
        // eslint-disable-next-line react/jsx-no-bind
        clear={() => setFieldValue('colors', values.colors.filter(e => e !== item))}
        key={`colors-${item}`}
      >{item}</Item>)}

      {values.minPrice && <Item
        className="item"
        // eslint-disable-next-line react/jsx-no-bind
        clear={() => setFieldValue('minPrice', '')}
      >{`${t('min')}: ${prefix}${values.minPrice}`}</Item>}

      {values.maxPrice && <Item
        className="item"
        // eslint-disable-next-line react/jsx-no-bind
        clear={() => setFieldValue('maxPrice', '')}
      >{`${t('max')}: ${prefix}${values.maxPrice}`}</Item>}

      {values.vendors.map(item => <Item
        className="item"
        // eslint-disable-next-line react/jsx-no-bind
        clear={() => setFieldValue('vendors', values.vendors.filter(e => e !== item))}
        key={`vendors-${item}`}
      >{item}</Item>)}

      {values.tags.map(item => <Item
        className="item"
        // eslint-disable-next-line react/jsx-no-bind
        clear={() => setFieldValue('tags', values.tags.filter(e => e !== item))}
        key={`tags-${item}`}
      >{item}</Item>)}

      {hasAppliedFilters && <div className="button-wrapper">
        <UnderlineWrapper className="wrapper">
          <button className="button" onClick={clear} type="button">
            {t('clearAll')}
          </button>
        </UnderlineWrapper>
      </div>}
    </div>
  </div>
}
