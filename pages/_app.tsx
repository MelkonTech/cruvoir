import 'cross-fetch'

// Do not change the order of import of styles!
import 'public/static/reset.css'
import 'public/static/variables.css'
import 'public/static/fonts.css'
import 'public/static/global.css'
import * as R from 'ramda'
import {addTranslationsFromPO, getCookie, isServer, prismicClient} from 'components/common/helpers'
import {ApolloClient, InMemoryCache, IntrospectionFragmentMatcher} from 'apollo-boost'
import {PortalManager, PortalProvider} from 'components/common/Portal'
import {ApolloProvider} from '@apollo/react-hooks'
import {AuthModalContextProvider} from 'components/common/AuthModalContext'
import {CartContextProvider} from 'components/common/CartContext'
import {createElement} from 'react'
import {createHttpLink} from 'apollo-link-http'
import {CurrencyContextProvider} from 'components/common/CurrencyContext'
import Error from 'next/error'
import {FeaturedMenuContextProvider} from 'components/common/FeaturedMenuContext'
import fragmentsTypes from 'fragments-types.json'
import getConfig from 'next/config'
import {getDataFromTree} from '@apollo/react-ssr'
import Head from 'next/head'
import i18n from 'i18n'
import {Loading} from 'components/common/Loading'
import NextApp from 'next/app'
import {PageAnimation} from 'components/common/PageAnimation'
import {PageTransition} from 'next-page-transitions'
import Prismic from 'prismic-javascript'
import {RecentContextProvider} from 'components/common/RecentContext'
import {setContext} from 'apollo-link-context'
import {UserContextProvider} from 'components/common/UserContext'
import {WishListContextProvider} from 'components/common/WishListContext'
import withApollo from 'next-with-apollo'
const {publicRuntimeConfig} = getConfig()

if(!isServer())
  document.querySelectorAll('[data-react-portal]').forEach(n => n.remove())

try {
  if(
    publicRuntimeConfig.NEXT_PUBLIC_GA_TRACKING_CODE &&
    typeof window !== 'undefined' &&
    window['ga']
  ) {
    const ga = window['ga']
    require('autotrack/autotrack.js')
    ga('create', publicRuntimeConfig.NEXT_PUBLIC_GA_TRACKING_CODE, 'auto')
    ga('send', 'pageview')
  }
} catch(error) {
  console.error('GA failed')
  console.error(error)
}

class App extends NextApp<{apollo: ApolloClient<InMemoryCache>, portalManager: PortalManager}> {
  static async getInitialProps(params) {
    let pageProps = {}
    let pageMetatagsResponse

    try {
      pageMetatagsResponse = (await prismicClient(params.req).query(
        [
          Prismic.Predicates.at('document.type', 'pagemetatags'),

          Prismic.Predicates.any('my.pagemetatags.url', [
            `${publicRuntimeConfig.NEXT_PUBLIC_APP_URL}${params.ctx.asPath}`,
            `${publicRuntimeConfig.NEXT_PUBLIC_APP_URL}${params.ctx.asPath}/`,
            `${publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL}${params.ctx.asPath}`,
            `${publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL}${params.ctx.asPath}/`,
          ]),
        ],

        {},
      )).results[0]
    } catch(error) {
      console.error('Error while fetching meta tags')
      console.error(publicRuntimeConfig)
      console.error(process.env)
      console.error(error)
    }

    const featuredMenuPrismicResponse = {
      men  : await prismicClient(null).query([Prismic.Predicates.at('document.type', 'mens_featured_menu')], {}),
      women: await prismicClient(null).query([Prismic.Predicates.at('document.type', 'womens_featured_menu')], {}),
    }

    if(isServer() && !R.includes(
      params.ctx.req.headers.host.split(':')[0],
      [publicRuntimeConfig.NEXT_PUBLIC_APP_BLOG_HOST, publicRuntimeConfig.NEXT_PUBLIC_APP_HOST],
    ))
      return {pageProps: {error: 'Not found', statusCode: 404}}

    try {
      pageProps = params.Component.getInitialProps ? await params.Component.getInitialProps(params.ctx) : {}
    } catch(e) {
      // Is server side
      if(Boolean(params.ctx.res))
        params.ctx.res.statusCode = 500

      pageProps = {error: 'Server error', statusCode: 500}
    }

    // Fetch products translations from external tool. English is the default language — stored on Shopify side
    if(isServer() && params.ctx.req.language && params.ctx.req.language !== 'en')
      addTranslationsFromPO({
        i18n: params.ctx.req.i18n,
        lang: params.ctx.req.language,

        translations: await (
          await fetch(`${
            publicRuntimeConfig.NEXT_PUBLIC_APP_URL.replace('https', 'http')
          }/api/translations/${params.ctx.req.language}/products`)
        ).json(),
      })

    let currencyRatesCookie = JSON.parse(getCookie({ctx: params.ctx, name: 'currencyRates'}));
    return {pageProps: {
        ...pageProps,
        asPath                    : params.ctx.asPath,
        checkoutId                : getCookie({ctx: params.ctx, name: 'checkoutId'}),
        currency                  : getCookie({ctx: params.ctx, name: 'currency'}) || 'USD',
        currencyRates             : currencyRatesCookie && Object.keys(currencyRatesCookie).length === 0 ? null : currencyRatesCookie,
        currencyRatesLastUpdatedAt: getCookie({ctx: params.ctx, name: 'currencyRatesLastUpdatedAt'}),
        featuredMenuPrismicResponse,
        host                      : isServer() ? params.ctx.req.headers.host : location.host,

        isBlogDomain: (
          isServer() ? params.ctx.req.headers.host : location.host
        ) === publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL.replace(/https?:\/\//, ''),

        metatags : pageMetatagsResponse?.data.metatags,
        pageTitle: pageMetatagsResponse?.data.title,
        pathname : params.ctx.pathname,
        query    : params.ctx.query,
        userToken: getCookie({ctx: params.ctx, name: 'token'}),
      }}
  }

  render() {
    if(this.props.pageProps.statusCode === 404)
      return <Error statusCode={404} />

    return <ApolloProvider client={this.props.apollo}>
      <Head>
        <title>{this.props.pageProps.pageTitle || 'Cruvoir'}</title>
        {/* eslint-disable max-len */}
        <link href="/static/favicons/dark/16.png" media="(prefers-color-scheme: dark)" rel="icon" sizes="16x16" type="image/png" />
        <link href="/static/favicons/dark/32.png" media="(prefers-color-scheme: dark)" rel="icon" sizes="32x32" type="image/png" />
        <link href="/static/favicons/dark/60.png" media="(prefers-color-scheme: dark)" rel="icon" sizes="60x60" type="image/png" />
        <link href="/static/favicons/light/16.png" media="(prefers-color-scheme: light)" rel="icon" sizes="16x16" type="image/png" />
        <link href="/static/favicons/light/32.png" media="(prefers-color-scheme: light)" rel="icon" sizes="32x32" type="image/png" />
        <link href="/static/favicons/light/60.png" media="(prefers-color-scheme: light)" rel="icon" sizes="60x60" type="image/png" />
        {/* eslint-enable max-len */}

        <meta
          content="width = device-width, minimum-scale = 1, initial-scale = 1, user-scalable = no"
          key="viewport"
          name="viewport"
        />

        {R.map(
          metatag => <meta content={metatag.content} key={metatag.name} name={metatag.name} />,
          this.props.pageProps.metatags || [],
        )}

        <script type="text/javascript" src="/static/intercom.js" />
        <script type="text/javascript" src={`https://static.cdn.prismic.io/prismic.min.js?new=true&repo=${publicRuntimeConfig.NEXT_PUBLIC_PRISMIC_REPO}`} />

        <script dangerouslySetInnerHTML={{__html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${publicRuntimeConfig.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
          fbq('track', 'PageView');`}}
        />

        <script async src="https://www.google-analytics.com/analytics.js" />
      </Head>

      <CurrencyContextProvider
        initialCurrency={this.props.pageProps.currency}
        initialRates={this.props.pageProps.currencyRates}
        initialRatesLastUpdatedAt={this.props.pageProps.currencyRatesLastUpdatedAt}
      >
        <PortalProvider manager={this.props.portalManager}>
          <CartContextProvider initialValue={{checkoutId: this.props.pageProps.checkoutId}}>
            <AuthModalContextProvider>
              <UserContextProvider initialValue={{token: this.props.pageProps.userToken}}>
                <RecentContextProvider>
                  <FeaturedMenuContextProvider
                    menPrismicResponse={this.props.pageProps.featuredMenuPrismicResponse.men}
                    womenPrismicResponse={this.props.pageProps.featuredMenuPrismicResponse.women}
                  >
                    <WishListContextProvider>
                      {this.props.pageProps.hasPageTransition
                        ? <PageTransition
                          classNames="state"
                          loadingComponent={<Loading isShown={true} />}
                          loadingTimeout={0}
                          monkeyPatchScrolling={true}
                          skipInitialTransition={true}
                          tag={PageAnimation}
                          timeout={1000}
                        >
                          {createElement(this.props.Component, this.props.pageProps)}
                        </PageTransition>

                        : createElement(this.props.Component, this.props.pageProps)
                      }
                    </WishListContextProvider>
                  </FeaturedMenuContextProvider>
                </RecentContextProvider>
              </UserContextProvider>
            </AuthModalContextProvider>
          </CartContextProvider>
        </PortalProvider>
      </CurrencyContextProvider>

      <div id="portal-root" />
    </ApolloProvider>
  }
}

export default withApollo(params => new ApolloClient({
  cache: new InMemoryCache({
    fragmentMatcher: new IntrospectionFragmentMatcher({
      introspectionQueryResultData: fragmentsTypes,
    }),
  }).restore(params.initialState || {}),

  link: setContext((_, linkParams) => ({
    ...linkParams.isInternalAPI && {headers: {'X-Hasura-Role': 'public'}},
  })).concat(createHttpLink({
    credentials: 'same-origin',
    fetch      : fetch,

    headers: {

      // Accept and Content-Type headers are required by Storefront API
      accept                             : 'application/json',
      'content-type'                     : 'application/json',
      'x-shopify-storefront-access-token': publicRuntimeConfig.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN,
    },

    uri: uriParams => {
      if(uriParams.getContext().isInternalAPI)
        return publicRuntimeConfig.NEXT_PUBLIC_INTERNAL_API_URL
      else
        return publicRuntimeConfig.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_URL
    },
  })),
}), {getDataFromTree})(i18n.appWithTranslation(App))
