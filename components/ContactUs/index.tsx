import {Layout} from 'components/common/Layout'
import styles from './index.css'

export function ContactUs() {
  return <Layout className={styles.contactUs}>
    <div className="wrapper">
      <div className="section">
        <h3 className="title">Anytime You can send us an email to</h3>
        <p className="text"><a className="link" href="mailto:service@cruvoir.com">service@cruvoir.com</a></p>
        <p className="text">We’ll respond soon</p>
      </div>

      <div className="section">
        <h3 className="title">Alternatively, feel free to call us</h3>
        <p className="text"><a className="link" href="tel:+1(323)413-2840">+1 (323) 413-2840</a></p>
        <p className="text">/ 09 am – 09 pm (UTC) /</p>
      </div>

      <img aria-hidden className="image" src={require('./assets/symbol.png')} />
    </div>
  </Layout>
}
