import * as R from 'ramda'
import {Fragment, useCallback} from 'react'
import {useField, useFormikContext} from 'formik'
import checkboxStyles from 'components/common/form/Checkbox/index.css'
import cn from 'classnames'
import {CollapsableSection} from 'components/products/List/filters/common/CollapsableSection'
import {useMemo} from 'react'
import {useTranslation} from 'i18n'

export function CheckboxGroup(props: {
  className?: string
  isCollapsed?: boolean
  name: string
  title: string

  variants: {
    title: string
    value: string
  }[]
}) {
  const {setFieldValue} = useFormikContext()
  const [field] = useField(props.name)
  const {t} = useTranslation()
  const value = useMemo(() => typeof field.value === 'string' ? [field.value] : field.value, [field.value])
  const clear = useCallback(() => setFieldValue(props.name as never, []), [props, setFieldValue])

  return <CollapsableSection
    className={props.className}
    clear={clear}
    isClearButtonShown={!R.isEmpty(field.value)}
    isCollapsed={props.isCollapsed}
    numberOfSelected={value.length}
    title={props.title}
  >
    <Fragment>
      {R.map(variant => <label key={variant.value} className={cn(checkboxStyles.checkbox, 'field')}>
        <input
          checked={R.includes(variant.value, value || [])}
          className="input"
          type="checkbox"

          // eslint-disable-next-line react/jsx-no-bind
          onChange={() => {
            const nextValue = R.includes(variant.value, value)
              ? R.reject(R.equals(variant.value), value)
              : R.append(variant.value, value)

            setFieldValue(props.name as never, nextValue)
          }}
        />

        <span className="caption">{t(variant.title)}</span>
      </label>, props.variants)}
    </Fragment>
  </CollapsableSection>
}
