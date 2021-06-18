import Document, {Head, Main, NextScript} from 'next/document'
import {html, load} from 'cheerio'
import {PortalManager} from 'components/common/Portal'
import {renderToStaticMarkup} from 'react-dom/server'

export default class MyDocument extends Document<{language: string}> {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage
    const portalManager = new PortalManager()

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => <App {...props} portalManager={portalManager} />,
      })

    const initialProps = await Document.getInitialProps(ctx)
    const $ = load(initialProps.html)
    const {res: {locals}} = ctx

    portalManager.portals.forEach(
      ([children, selector]) => $(renderToStaticMarkup(children))
        .attr('data-react-portal', '')
        .appendTo(selector),
    )

    return {...initialProps, html: $('body').html(), language: locals.language}
  }

  render() {
    return <html lang={this.props.language}>
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  }
}
