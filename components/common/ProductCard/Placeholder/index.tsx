import cardStyles from '../index.css'
import cn from 'classnames'
import styles from './index.css'

export function Placeholder() {
  return <div className={cn(cardStyles.card, styles.placeholder)}>
    <div className="picture placeholder-animation" />

    <div className="section">
      <div className="vendor placeholder-animation">Vendor placeholder</div>
      <div className="title placeholder-animation">Placeholder for product title</div>
      <div className="price placeholder-animation">$000</div>
    </div>

    <div className="wish-button placeholder-animation" />
  </div>
}
