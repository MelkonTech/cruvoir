import * as Yup from 'yup'

export const addressValidationSchema = (t: (string) => string) => Yup.object().shape({
  address1 : Yup.string().required().label(`${t('address')} 1`),
  address2 : Yup.string().label(`${t('address')} 1`),
  city     : Yup.string().required().label(t('city')),
  country  : Yup.string().required().label(t('country')),
  firstName: Yup.string().required().label(t('name')),
  lastName : Yup.string().required().label(t('lastName')),
  phone    : Yup.string().required().label(t('phone')).matches(/^[0-9\+\-\(\) ]*$/, t('phoneNumberIsNotValid')),
  province : Yup.string().required().label(t('province')),
  zip      : Yup.string().required(),
})
