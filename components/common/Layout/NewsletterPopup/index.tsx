import * as Yup from 'yup'
import {useCallback, useEffect, useMemo} from 'react'
import cn from 'classnames'
import {Form} from './Form'
import {Formik} from 'formik'
import getConfig from 'next/config'
import {Link} from 'components/common/Link'
import {Portal} from 'components/common/Portal'
import styles from './index.css'
import {UnderlineWrapper} from 'components/common/UnderlineWrapper'
import {usePopup} from 'components/common/hooks'
import {useTranslation} from 'i18n'

const {publicRuntimeConfig} = getConfig()

export function NewsletterPopup() {
  const {t} = useTranslation()
  const popup = usePopup()

  const close = useCallback(() => {
    localStorage.setItem('newsletter-popup', 'disabled')
    popup.close()
  }, [popup])

  useEffect(() => {
    if (!localStorage.getItem('newsletter-popup'))
      setTimeout(popup.show, 10000)
  }, [popup.show])

  const initialValues = useMemo(() => ({email: ''}), [])

  const subscribeToNewsletter = useCallback(async values => {
    const response = await (await fetch(`${publicRuntimeConfig.NEXT_PUBLIC_APP_URL}/api/newsletter/subscribe`, {
      body: JSON.stringify({email: values.email, name: values.name}),
      headers: {accept: 'application/json'},
      method: 'POST',
    })).json()

    if (response.success)
      setTimeout(close, 500)
  }, [close])

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
  })

  return <Portal selector="#portal-root">
    <div className={cn(styles.newsletterPopup, {'is-shown': popup.isShown})}>
      <div className="section">
        <h2 className="title">{t('welcomeTo', {projectName: 'Cruvoir'})}</h2>
        <h2 className="title">{t('welcomeToTeaser')}</h2>
        <h3 className="title">{t('informedActivities')}</h3>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={subscribeToNewsletter}
        >
          <Form className="form" close={close}/>
        </Formik>
      </div>

      <p className="note">
        By entering your email, you agree to our
        {' '}

        <UnderlineWrapper className="link" isPermanent>
          <Link as="/privacy-policy" href="/privacy-policy">{t('privacyPolicy')}</Link>
        </UnderlineWrapper>
        .
      </p>

      <p className="note">
        <UnderlineWrapper className="link" isPermanent>
          <a href="https://cruvoir.com">{t('shopNow').split(' ')[0]}</a>
        </UnderlineWrapper>
        {' '}{t('shopNow').split(' ')[1]}

        {' '}|{' '}

        {t('initialOutlet').split(' ')[0]}{' '}
        <UnderlineWrapper className="link" isPermanent>
          <a className="link" href="https://blog.cruvoir.com">{t('initialOutlet').split(' ')[1]}</a>
        </UnderlineWrapper>

        {' '}|{' '}

        {t('socialNetwork').split(' ')[0]}{' '}
        <UnderlineWrapper className="link" isPermanent>
          <a className="link" href="https://instagram.com/cruvoir/">{t('socialNetwork').split(' ')[1]}</a>
        </UnderlineWrapper>
        </p>

      <p className="note">
        <UnderlineWrapper className="link" isPermanent>
          <a className="link" href="https://discord.gg/M7qdhnZHMR"> {t('discordServer').split(' ')[0]}</a>
        </UnderlineWrapper>
        {' '}{t('discordServer').split(' ')[1]}

        {' '}|{' '}

        {t('scheduleMeeting').split(' ')[0]}{' '}
        {t('scheduleMeeting').split(' ')[1]}{' '}
        <UnderlineWrapper className="link" isPermanent>
          <a className="link" href="https://calendly.com/c---31">{t('scheduleMeeting').split(' ')[2]}</a>
        </UnderlineWrapper>
      </p>
    </div>
  </Portal>
}
