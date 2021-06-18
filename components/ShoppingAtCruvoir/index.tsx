import {StaticPageCollapsableSection as CollapsableSection} from 'components/common/StaticPageCollapsableSection'
import {Link} from 'components/common/Link'
import {PureHtml} from 'components/common/PureHtml'
import {StaticPageLayout} from 'components/common/StaticPageLayout'

export function ShoppingAtCruvoir() {
  /* eslint-disable max-len */
  return <StaticPageLayout>
    <div className="content">
      <CollapsableSection className="section" isCollapsed title="Pricing and Currency">
        <PureHtml>
          <p>The price and currency of an item will vary depending on the country it is being shipped to. In order to ensure the most accurate pricing, taxes and delivery costs are displayed while browsing our site.</p>
          <p>Select your country at the top of any CRUVOIR webpage and the prices and currency will adjust accordingly.</p>
        </PureHtml>
      </CollapsableSection>

      <CollapsableSection className="section" isCollapsed title="Payment Method">
        <PureHtml>
          <p>We accept payment via <strong>Visa</strong>, <strong>MasterCard</strong> and <strong>Paypal</strong>. <strong>All other credit cards, including American Express can be used at checkout via Paypal</strong>. Please note only one (1) form of payment method may be used on a single order.</p>
          <p>You can also contact to place your order over the phone with one of our staff. Please note that while checkout online allows you to place your order via PayPal, phone orders may only be placed using Visa or MasterCard.</p>
          <h3>Payment Error Troubleshooting</h3>
          <p>If you are attempting to checkout and receive the following error message <strong>‘transaction cannot be processed’</strong> please contact your bank in order for them to authorize the transaction.</p>
        </PureHtml>
      </CollapsableSection>

      <CollapsableSection className="section" isCollapsed title="Charging Your Card">
        <PureHtml>
          <p>Once your order has been placed, the necessary funds are held under form of pre-authorization. <strong>This is not an actual charge.</strong> The pre-authorization ensures that sufficient funds will be available to carry out the transaction.</p>
          <p>Once your order has been shipped, your card is charged according to the amount and currency of your order. If your order is unfortunately cancelled, CRUVOIR will release the pre-authorization immediately. <strong>Please note that it may take your bank additional time to process the funds back to your account.</strong></p>
        </PureHtml>
      </CollapsableSection>

      <CollapsableSection className="section" isCollapsed title="Personal Information">
        <PureHtml>
          <p>All information shared with CRUVOIR when placing an order is confidential. We use secure systems in order to insure that details pertaining to your accounts remain private. For more information on our secure network please visit our Terms & Conditions section.</p>
        </PureHtml>
      </CollapsableSection>

      <CollapsableSection className="section" isCollapsed title="Order Confirmation">
        <PureHtml>
          <p>Once your order has been placed an order confirmation will be sent to the email address provided at checkout. The order confirmation acts as an invoice and includes your order number and all relevant details. <i>Please note that for exclusive releases, we reserve the right to limit quantities per order and/or customer.</i></p>
          <p>If you notice any errors on your order confirmation please <Link as="/contact-us" href="/contact-us">Contact us</Link> so we can modify your order. You can also review your order details by accessing your <Link as="/profile/orders" href="/profile/orders">Order History</Link> via your CRUVOIR account.</p>
        </PureHtml>
      </CollapsableSection>

      <CollapsableSection className="section" isCollapsed title="Order Processing">
        <PureHtml>
          <p>Once your order is placed a standard processing time of up to <strong>2 business days</strong> is required before the order is shipped out.</p>
          <p><strong>Orders placed after 11:00 AM (PST) may be processed the next business day and orders placed over the weekend and on holidays will be processed the next business day starting at 10:00 AM (PST.)</strong></p>
          <p><i>Please note that during peak sale periods processing times may vary.</i></p>
        </PureHtml>
      </CollapsableSection>

      <CollapsableSection className="section" isCollapsed title="Modifying or Cancelling Your Order">
        <PureHtml>
          <p>You can modify or cancel your order as long as it has not been packed and/or shipped. We will do our best to accommodate any changes or cancellations before the order enters our shipping queues.</p>
        </PureHtml>
      </CollapsableSection>

      <CollapsableSection className="section" isCollapsed title="Order Status">
        <PureHtml>
          <p>To Verify Your Order Status:</p>

          <ul>
            <li>Login into your CRUVOIR account</li>
            <li>Click on the <Link as="/profile/orders" href="/profile/orders">Order History</Link> tab on the left-hand side</li>
            <li>Under Status, the order status will be marked as either <strong>Received</strong>, <strong>In Process</strong> or <strong>Shipped</strong></li>
          </ul>

          <p><strong>Note that If you place an order as a guest, you need to create an account in order to track your orders proactively. You will also receive email updates on your order status.</strong></p>
          <p>To better understand the status of your order, please review the definitions below:</p>

          <p>
            <strong>Received</strong>: Your order has been successfully placed and is ready to be processed<br />
            <strong>In Process</strong>: Your order has been approved and is ready to be packed<br />
            <strong>Shipped</strong>: Your order has been dispatched and a tracking number has been associated to your package.
          </p>
        </PureHtml>
      </CollapsableSection>

      <CollapsableSection className="section" isCollapsed title="Our Return Policy">
        <PureHtml>
          <p>In order to return an item, you must meet the following conditions:</p>

          <ul>
            <li>The return must be requested within 11 days of the delivery date</li>
            <li>The item must be in its original, unused, unaltered and unwashed condition</li>
            <li>The item must be returned with the original tags and packaging</li>
          </ul>

          <p>Intimate apparel and swimwear (including but not limited to lingerie, hosiery, boxers, briefs, swimsuits and bikini bottoms) must be returned with the original hygienic protective strip still intact.</p>
          <p>Footwear must be returned with the dust bag and original shoe box as these are considered part of the product. Please place the shoe box inside a shipping box in order to prevent damage during shipping.</p>
          <p><strong>Please note that Final Sale items are not eligible for a return.</strong></p>
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
          <p>Please note that original <strong>shipping fees are not refundable.</strong></p>
        </PureHtml>
      </CollapsableSection>
    </div>
  </StaticPageLayout>
}
