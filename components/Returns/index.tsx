import {StaticPageCollapsableSection as CollapsableSection} from 'components/common/StaticPageCollapsableSection'
import {PureHtml} from 'components/common/PureHtml'
import {StaticPageLayout} from 'components/common/StaticPageLayout'

export function Returns() {
  /* eslint-disable max-len */
  return <StaticPageLayout>
    <div className="content">
      <CollapsableSection className="section" isCollapsed title="Our return policy">
        <PureHtml>
          <p>In order to return an item, you must meet the following conditions:</p>

          <ul>
            <li>The return must be requested within 7 days of the delivery date</li>
            <li>The item must be in its original, unused, unaltered and unwashed condition</li>
            <li>The item must be returned with the original tags and packaging</li>
            <li>Intimate apparel and swimwear (including but not limited to lingerie, hosiery, boxers, briefs, swimsuits and bikini bottoms) must be returned with the original hygienic protective strip still intact.</li>
            <li>Footwear must be returned with the dust bag and original shoe box as these are considered part of the product. Please place the shoe box inside a shipping box in order to prevent damage during shipping.</li>
            <li><strong>Please note that Final Sale items are not eligible for a return.</strong></li>
          </ul>

          <p><i>CRUVOIR reserves the right to reject returns which do not comply with our return policy. Returns that do not respect our policy may be sent back to the original shipping address at our discretion.</i></p>
        </PureHtml>
      </CollapsableSection>

      <CollapsableSection className="section" isCollapsed title="How to Initiate a Return">
        <PureHtml>
          <p>As CRUVOIR adopts sustainable and eco-friendly practices, your package will not be shipped with any paper invoices or return slips. Instead, we ask that you request your return electronically by accessing our Contact form.</p>
          <p><strong>Please note that it is important to ship international packages using standard shipping and your country’s local shipping carrier. For added safety, please insure all packages with a tracking number.</strong></p>
        </PureHtml>
      </CollapsableSection>

      <CollapsableSection className="section" isCollapsed title="Refunds">
        <PureHtml>
          <p>A refund will be issued back to your original payment method within 5 business days of receiving your return. Once your refund has been processed, a refund confirmation will be sent to the email address provided at checking out. Your financial institution may require additional time to process the refund to your account.</p>
          <p>Please note that original <strong>shipping fees are not refundable</strong>.</p>
        </PureHtml>
      </CollapsableSection>
    </div>
  </StaticPageLayout>
}
