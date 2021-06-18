import * as R from 'ramda'
import {useCallback, useContext, useMemo} from 'react'
import cn from 'classnames'
import {CollapsableSection} from 'components/products/List/filters/common/CollapsableSection'
import {CurrencyContext} from 'components/common/CurrencyContext'
import {Field} from 'components/common/form/common/Field'
import {Input} from 'components/common/form'
import styles from './index.css'
import {useField} from 'formik'
import {useFormikContext} from 'formik'
import {useTranslation} from 'i18n'

export function Price(props: {
  className?: string
  disabled?: boolean
  prefix?: string
}) {
  const {t} = useTranslation()
  const currencyCtx = useContext(CurrencyContext)

  const prefix = useMemo(() => ({
    CAD: 'C$', EUR: '€', GBP: '£', USD: '$',
  })[currencyCtx.active], [currencyCtx.active])

  const {setFieldValue}: {
    setFieldValue: (arg0: string, arg1: string) => void
  } = useFormikContext()

  const clear = useCallback(
    () => {
      setFieldValue('minPrice', '')
      setFieldValue('maxPrice', '')
    },

    [setFieldValue],
  )

  const [minField, minMeta] = useField('minPrice')
  const [maxField, maxMeta] = useField('maxPrice')
  const isInvalid = (minMeta.error || maxMeta.error) && (minMeta.touched || maxMeta.touched)

  return <CollapsableSection
    className={cn(styles.price, props.className)}
    clear={clear}
    isClearButtonShown={!R.isEmpty(minField.value) || !R.isEmpty(maxField.value)}
    isCollapsed
    title={t('price')}
  >
    <div className="field-wrapper">
      <Field
        className="field"
        errorMessage={`${R.pathOr('', ['error'], minMeta)} ${R.pathOr('', ['error'], maxMeta)}`}
        isInvalid={isInvalid}
      >
        <Input
          className="field"
          disabled={props.disabled}
          type="number"
          isErrorMessageHidden
          name="minPrice"
          placeholder={`${prefix} ${t('min')}`}
        />

        <hr className="divider" />

        <Input
          className="field"
          disabled={props.disabled}
          type="number"
          isErrorMessageHidden
          name="maxPrice"
          placeholder={`${prefix} ${t('max')}`}
        />
      </Field>
    </div>
  </CollapsableSection>
}
