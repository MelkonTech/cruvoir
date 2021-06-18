import * as R from 'ramda'
import {Button} from 'components/common/Button'
import cn from 'classnames'
import {Field} from 'formik'
import {Option} from 'components/common/types'
import styles from './index.css'
import {useClickOutside} from 'components/common/hooks'
import {useFormikContext} from 'formik'
import {usePopup} from 'components/common/hooks'
import {useRef} from 'react'
import {useTranslation} from 'i18n'

export function SizeField(props: {
  className?: string
  option: Option
  unavailableOptions: string[]
}) {
  const {t} = useTranslation()
  const {values} = useFormikContext<Record<'Size' | 'Color', string>>()
  const popup = usePopup(false)
  const popupRef = useRef(null)
  const intactId = 'size-menu'
  useClickOutside({callback: popup.close, intactId: intactId, reference: popupRef})

  return <div className={cn(styles.sizeField, props.className)}>
    <div className={cn('popup', {'is-shown': popup.isShown})} ref={popupRef}>
      {R.map(value => <label
        className={cn('option', {'is-disabled': R.includes(value, props.unavailableOptions)})}
        key={value}
        onClick={popup.close}
        title={value}
      >
        <Field
          className="input"
          name={props.option.name}
          type="radio"
          value={value}
        />

        <div className="value">
          {R.includes(value, props.unavailableOptions) ? t('sizeSoldOut', {size: value}) : value}
        </div>
      </label>, props.option.values)}
    </div>

    <Button
      appearance="outline"
      className="button"
      intactId={intactId}
      onClick={popup.toggle}
      width="flex"
    >
      {t('sizeSize', {size: values.Size})}
    </Button>
  </div>
}
