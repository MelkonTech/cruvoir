import * as R from 'ramda'
import {useContext, useMemo, useState} from 'react'
import cn from 'classnames'
import {ProductsSlider} from 'components/common/ProductsSlider'
import {RecentContext} from 'components/common/RecentContext'
import RecommendationsQuery from 'components/common/graphql/recommendations.graphql'
import {Tabs} from 'components/common/Tabs'
import {useQuery} from '@apollo/react-hooks'
import {useTranslation} from 'i18n'

export function Suggestions(props: {
  className: string
  productId: string
}) {
  const {t} = useTranslation()
  const recentCtx = useContext(RecentContext)
  const [activeTab, setActiveTab] = useState('suggestions')

  const {data: recommendationsData, loading: recommendationsLoading} = useQuery(
    RecommendationsQuery,

    {
      skip     : !props.productId,
      variables: {productId: props.productId},
    },
  )

  const recommendations = useMemo(
    () => R.pathOr([], ['productRecommendations'], recommendationsData),
    [recommendationsData],
  )

  const isRecentlyViewedEmpty = !recentCtx.isReady ||
    R.isEmpty(recentCtx.products) ||
    recentCtx.products.length === 1 && recentCtx.products[0].id === props.productId

  const tabs = useMemo(() => R.filter<{caption: string, id: string}>(Boolean, [
    {
      caption: t('otherSuggestions'),
      id     : 'suggestions',
    },

    !isRecentlyViewedEmpty && {
      caption: t('recentlyViewed'),
      id     : 'recently',
    },
  ]), [isRecentlyViewedEmpty, t])

  return <Tabs
    activeTab={activeTab}
    className={props.className}
    setActiveTab={setActiveTab}
    tabs={tabs}
  >
    {recentCtx.isReady && <ProductsSlider
      className={cn('tab', {'is-shown': activeTab === 'recently'})}
      products={R.reject(recentProduct => recentProduct.id === props.productId, recentCtx.products)}
    />}

    {!recommendationsLoading && <ProductsSlider
      className={cn('tab', {'is-shown': activeTab === 'suggestions'})}
      products={recommendations}
    />}
  </Tabs>
}
