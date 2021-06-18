import * as Yup from 'yup'
import {useCallback, useMemo, useState} from 'react'
import {Form} from './Form'
import {Formik} from 'formik'
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()
import {useTranslation} from 'i18n'

export function Newsletter(props: {
  className: string
}) {
  const initialValues = useMemo(() => ({email: ''}), [])
  const [isErrorShown, setIsErrorShown] = useState(false)
  const [isThankYouShown, setIsThankYouShown] = useState(false)
  const {t} = useTranslation()

  const subscribeToNewsletter = useCallback(async values => {
    try {
      setIsErrorShown(false)

      await (await fetch(`${publicRuntimeConfig.NEXT_PUBLIC_APP_URL}/api/newsletter/subscribe`, {
        body   : JSON.stringify({email: values.email, name: values.name}),
        headers: {accept: 'application/json'},
        method : 'POST',
      })).json()

      setIsThankYouShown(true)
      setTimeout(() => setIsThankYouShown(false), 3000)
    } catch(error){
      console.error(error)
      setIsErrorShown(true)
    }
  }, [])

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
  })

  return <div>
    {isThankYouShown && <p style={{fontSize: 10, letterSpacing: '.32px'}}>{t('thankYouForSubscribing')}</p>}

    {isErrorShown && <p style={{
      color        : '#bc1b1b',
      fontSize     : 10,
      letterSpacing: '.32px',
    }}>{t('errorWhileSubscribingPleaseTryAgain')}</p>}

    {!isThankYouShown && <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={subscribeToNewsletter}
    >
      <Form className={props.className} />
    </Formik>}
  </div>
}
