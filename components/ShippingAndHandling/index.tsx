import {StaticPageCollapsableSection as CollapsableSection} from 'components/common/StaticPageCollapsableSection'
import {PureHtml} from 'components/common/PureHtml'
import {StaticPageLayout} from 'components/common/StaticPageLayout'

export function ShippingAndHandling() {
  /* eslint-disable max-len */
  return <StaticPageLayout>
    <div className="content">
      <CollapsableSection className="section" isCollapsed title="Shipping Information">
        <PureHtml>
          <p>CRUVOIR ships all over the world. To put your mind at ease, we provide all packages with a tracking number.</p>
          <p>Once your order has been shipped, you will receive an email update with shipping details along with the associated tracking number. You may follow the link in the email to check the estimated arrival of your order.</p>
          <p>Please note that tracking information will only be updated online one (1) business day after your order has been shipped.</p>
        </PureHtml>
      </CollapsableSection>

      <CollapsableSection className="section" isCollapsed title="Duties and Taxes">
        <PureHtml>
          <h3>Canada</h3>
          <p>Sales taxes will be charged at the applicable federal and provincial rates of the province to which the order is being shipped. You will not be subject to any duties upon delivery.</p>
          <h3>International</h3>
          <p>To make things easier for you, we ship to over 30 countries with duties and taxes included. Duties and taxes are included, your package will be shipped DDP (Delivered Duty Paid) and there will not be any additional fees upon delivery.</p>
        </PureHtml>
      </CollapsableSection>

      <CollapsableSection className="section" isCollapsed title="Shipping Costs and Delivery Times">
        <PureHtml>
          <p><strong>Please allow us up to 2 business days to process your order.</strong></p>
          <h3>USA</h3>

          <table className="columns--2">
            <tbody>
              <tr>
                <td />
                <td>Priority</td>
              </tr>

              <tr>
                <td />
                <td>FREE&nbsp;(2-3 days)</td>
              </tr>
            </tbody>
          </table>

          <h3>Canada</h3>

          <table className="columns--3">
            <tbody>
              <tr>
                <td />
                <td>Standard</td>
                <td>Express</td>
              </tr>

              <tr>
                <td>Quebec and Ontario</td>
                <td>$12&nbsp;(3 days)</td>
                <td>$24&nbsp;(1-2 days)</td>
              </tr>

              <tr>
                <td>Other provinces</td>
                <td>$12&nbsp;(7 days)</td>
                <td>$24&nbsp;(1-2 day)</td>
              </tr>
            </tbody>
          </table>

          <h3>International</h3>

          <table className="columns--3">
            <tbody>
              <tr>
                <td>Country</td>
                <td>Shipping costs</td>
                <td>Transit Time</td>
              </tr>

              <tr>
                <td>United Kingdom</td>
                <td>Free shipping on orders over&nbsp;£300<br />£15 on other orders</td>
                <td>3 to 5 business days</td>
              </tr>

              <tr>
                <td>Japan</td>
                <td>Free shipping on orders over&nbsp;¥50000<br />¥4300 on other orders</td>
                <td>3 to 5 business days</td>
              </tr>

              <tr>
                <td>Australia</td>
                <td>Free shipping on orders over $450 AUD<br />$55 AUD&nbsp;on other orders</td>
                <td>3 to 5 business days</td>
              </tr>

              <tr>
                <td>China</td>
                <td>Free shipping on orders over&nbsp;$500&nbsp;USD<br />$40&nbsp;USD&nbsp;on other orders</td>
                <td>3 to 5 business days</td>
              </tr>

              <tr>
                <td>Hong Kong</td>
                <td>Free shipping on orders over $1500&nbsp;HKD<br />$200 HKD&nbsp;on other orders</td>
                <td>3 to 5 business days</td>
              </tr>

              <tr>
                <td>Europe Group A:<br />Austria, Belgium, Cyprus, Czech Republic, Denmark, Estonia, Finland, Germany, Greece,<br />Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, Switzerland.</td>
                <td>Free shipping on orders over&nbsp;€375<br />€35&nbsp;on other orders</td>
                <td>3 to 5 business days</td>
              </tr>

              <tr>
                <td>Europe Group B:<br />All other European countries</td>
                <td>Free shipping on orders over&nbsp;€450<br />€40&nbsp;on other orders</td>
                <td>2 to 5 business days</td>
              </tr>

              <tr>
                <td>International Group A:<br />Argentina, Bahamas, Barbados, Belize, Brazil, Cayman Islands, Chile, El Salvador, Grenada, Guyana, Iceland, Malaysia, Morocco, Netherlands Antilles, New Zealand, Philippines, Saint Lucia, Singapore, St. Kitts &amp; Nevis.</td>
                <td>Free shipping on orders over $350&nbsp;USD<br />$40 USD on other orders</td>
                <td>3 to 5 business days</td>
              </tr>

              <tr>
                <td>International Group B<br />All other countries</td>
                <td>Free shipping on orders over $450&nbsp;USD<br />$40 USD on other orders</td>
                <td>2 to 5 business days</td>
              </tr>

              <tr>
                <td>France</td>
                <td>Free shipping on orders over&nbsp;€250<br />€35&nbsp;on other orders</td>
                <td>3 to 5 business days</td>
              </tr>

              <tr>
                <td>South Korea</td>
                <td>Free shipping on orders over $300&nbsp;USD<br />$40 USD&nbsp;on other orders</td>
                <td>3 to 5 business days</td>
              </tr>

              <tr>
                <td>Taiwan</td>
                <td>Free shipping on orders over $300 USD<br />$40 USD&nbsp;on other orders</td>
                <td>3 to 5 business days</td>
              </tr>
            </tbody>
          </table>

          <p>¹ Orders must be made before 11:00 a.m. Pacific Time to qualify for next day a.m. shipping.</p>
          <p>² Some exceptions apply to select countries. Accurate transit times available at checkout.</p>
        </PureHtml>
      </CollapsableSection>
    </div>
  </StaticPageLayout>
}
