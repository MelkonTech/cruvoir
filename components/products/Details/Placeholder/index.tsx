import {Button} from 'components/common/Button'
import cn from 'classnames'
import detailsStyles from '../index.css'
import formStyles from '../Form/index.css'
import styles from './index.css'

export function Placeholder() {
  return <div className={cn(detailsStyles.details, styles.placeholder)}>
    <div className="breadcrumbs placeholder-animation">Breadcrumbs placeholder</div>

    <div className="section">
      <div className="gallery">
        <div className="image placeholder-animation" />
      </div>

      <div className={cn('content', formStyles.form)}>
        <div className="section">
          <div className="vendor placeholder-animation">Vendor name</div>
          <div className="title placeholder-animation">Placeholder for product title</div>
          <div className="price placeholder-animation">$000</div>
          <hr className="divider" />

          <div className="share placeholder-animation">
            <div className="button" />
            <div className="button" />
            <div className="button" />
          </div>

          <hr className="divider" />

          <div className="description placeholder-animation">
            <p>This is placeholder for product description.</p>
            <p>It will provide additional information about product to customers.</p>
          </div>

          <div className="wish placeholder-animation" />
        </div>

        <div className="actions placeholder-animation">
          <Button appearance="outline" className="field" width="flex">{' '}</Button>
          <Button className="button" width="flex">{' '}</Button>
        </div>
      </div>
    </div>
  </div>
}
