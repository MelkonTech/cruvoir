import {useMemo, useState} from 'react'
import cn from 'classnames'
import {getGender} from 'components/common/helpers'
import {Link} from 'components/common/Link'
import styles from './index.css'
import {Tabs} from 'components/common/Tabs'
import {useRouter} from 'next/router'
import {useTranslation} from 'i18n'
import {vendors} from 'settings/vendors'

const getSections = items => {
  return Object.values(
    items.reduce((acc, item) => {
      let firstLetter = item.title[0].toLocaleUpperCase()

      if(/[^A-Z]/.test(firstLetter))
        firstLetter = '#'

      if(!acc[firstLetter])
        acc[firstLetter] = {data: [item], title: firstLetter}

      else
        acc[firstLetter].data.push(item)

      return acc
    }, {}),
  )
}

export function Designers(props: {
  className?: string
  isBlogDomain?: boolean
}) {
  const {t} = useTranslation()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(getGender(router, props.isBlogDomain))

  const tabs = useMemo(() => [
    {
      caption: t('womenDesigners'),
      id     : 'women',
    },

    {
      caption: t('menDesigners'),
      id     : 'men',
    },
  ], [t])

  return <Tabs
    activeTab={activeTab}
    className={cn(styles.designers, props.className)}
    setActiveTab={setActiveTab}
    tabs={tabs}
  >
    {['women', 'men'].map(gender => <div className={cn('tab', {'is-shown': activeTab === gender})} key={gender}>
      {getSections(vendors[gender]).map((section: {
        data: {collection: string, title: string}[]
        title: string
      }) => <div className="section" key={section.title}>
        {section.data.map(item => <Link
          as={`/${gender}/shop/collection/${item.collection}/category/all/subcategory/all`}
          className="link"
          href="/[gender]/shop/collection/[collection]/category/[category]/subcategory/[subcategory]"
          key={item.collection}
        >
          <span className="letter" aria-hidden>{section.title}</span>
          {item.title}
        </Link>)}
      </div>)}
    </div>)}
  </Tabs>
}
