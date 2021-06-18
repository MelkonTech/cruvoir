import {ChangeEvent, useCallback, useState} from 'react'
import {Form as FormikForm, useFormikContext} from 'formik'
import {Input, Select} from 'components/common/form'
import {Button} from 'components/common/Button'
import cn from 'classnames'
import styles from './index.css'
import {useTranslation} from 'i18n'
const countries = [{label: 'United States', value: 'United States'}, {label: 'France', value: 'France'}]

const listOfAllUSAStates = [
  {label: 'Pick a state', value: ''},
  {label: 'Alabama', value: 'Alabama'},
  {label: 'Alaska', value: 'Alaska'},
  {label: 'Arizona', value: 'Arizona'},
  {label: 'Arkansas', value: 'Arkansas'},
  {label: 'California', value: 'California'},
  {label: 'Colorado', value: 'Colorado'},
  {label: 'Connecticut', value: 'Connecticut'},
  {label: 'Delaware', value: 'Delaware'},
  {label: 'Florida', value: 'Florida'},
  {label: 'Georgia', value: 'Georgia'},
  {label: 'Hawaii', value: 'Hawaii'},
  {label: 'Idaho', value: 'Idaho'},
  {label: 'Illinois', value: 'Illinois'},
  {label: 'Indiana', value: 'Indiana'},
  {label: 'Iowa', value: 'Iowa'},
  {label: 'Kansas', value: 'Kansas'},
  {label: 'Kentucky', value: 'Kentucky'},
  {label: 'Louisiana', value: 'Louisiana'},
  {label: 'Maine', value: 'Maine'},
  {label: 'Maryland', value: 'Maryland'},
  {label: 'Massachusetts', value: 'Massachusetts'},
  {label: 'Michigan', value: 'Michigan'},
  {label: 'Minnesota', value: 'Minnesota'},
  {label: 'Mississippi', value: 'Mississippi'},
  {label: 'Missouri', value: 'Missouri'},
  {label: 'Montana', value: 'Montana'},
  {label: 'Nebraska', value: 'Nebraska'},
  {label: 'Nevada', value: 'Nevada'},
  {label: 'New Hampshire', value: 'New Hampshire'},
  {label: 'New Jersey', value: 'New Jersey'},
  {label: 'New Mexico', value: 'New Mexico'},
  {label: 'New York', value: 'New York'},
  {label: 'North Carolina', value: 'North Carolina'},
  {label: 'North Dakota', value: 'North Dakota'},
  {label: 'Ohio', value: 'Ohio'},
  {label: 'Oklahoma', value: 'Oklahoma'},
  {label: 'Oregon', value: 'Oregon'},
  {label: 'Pennsylvania', value: 'Pennsylvania'},
  {label: 'Rhode Island', value: 'Rhode Island'},
  {label: 'South Carolina', value: 'South Carolina'},
  {label: 'South Dakota', value: 'South Dakota'},
  {label: 'Tennessee', value: 'Tennessee'},
  {label: 'Texas', value: 'Texas'},
  {label: 'Utah', value: 'Utah'},
  {label: 'Vermont', value: 'Vermont'},
  {label: 'Virginia', value: 'Virginia'},
  {label: 'Washington', value: 'Washington'},
  {label: 'West Virginia', value: 'West Virginia'},
  {label: 'Wisconsin', value: 'Wisconsin'},
  {label: 'Wyoming', value: 'Wyoming'},
]

export function Form(props: {
  className?: string
  cancel: () => void
  isAdd?: boolean
}) {
  const {t} = useTranslation()
  const {dirty, initialValues, isValid, isSubmitting, resetForm} = useFormikContext<{country: string}>()
  const [isUSASelected, setUSASelected] = useState(initialValues.country === 'United States')

  const switchProvinceView = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => setUSASelected(event.target.value === 'United States'),
    [setUSASelected],
  )

  const cancelForm = props.cancel

  const cancel = useCallback(() => {
    resetForm()
    cancelForm()
  }, [cancelForm, resetForm])

  return <FormikForm className={cn(styles.form, props.className)}>
    <Input className="span--1" disabled={isSubmitting} type="text" name="firstName" placeholder={`${t('name')} *`} />
    <Input className="span--1" disabled={isSubmitting} type="text" name="lastName" placeholder={`${t('lastName')} *`} />

    <Select
      className="span--2"
      disabled={isSubmitting}
      onChange={switchProvinceView}
      name="country"
      options={countries}
    />

    <Input
      className="span--2"
      disabled={isSubmitting}
      type="text"
      name="address1"
      placeholder={`${t('address')} 1 *`}
    />

    <Input className="span--2"
      disabled={isSubmitting}
      type="text"
      name="address2"
      placeholder={`${t('address')} 2`}
    />

    <Input
      className="span--1"
      disabled={isSubmitting}
      type="text"
      name="city"
      placeholder={`${t('city')} *`}
    />

    {isUSASelected && <Select
      className="span--1"
      disabled={isSubmitting}
      name="province"
      options={listOfAllUSAStates}
    />}

    {!isUSASelected && <Input
      className="span--1"
      disabled={isSubmitting}
      type="text"
      name="province"
      placeholder={`${t('state')} *`}
    />}

    <Input
      className="span--1"
      disabled={isSubmitting}
      type="text"
      name="zip"
      placeholder={`${t('zip')} *`}
    />

    <Input
      className="span--1"
      disabled={isSubmitting}
      type="text"
      name="phone"
      placeholder={`${t('supportedPhoneFormats')} *`}
    />

    <div className="actions span--2">
      <Button appearance="outline" className="button" onClick={cancel} width="flex">{t('cancel')}</Button>

      <Button className="button" disabled={!isValid || !dirty} isLoading={isSubmitting} isSubmit width="flex">
        {t('saveAddress')}
      </Button>
    </div>
  </FormikForm>
}
