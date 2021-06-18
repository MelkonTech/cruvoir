import {CartItem} from 'components/common/types'
import {mount} from 'enzyme'
import {Row} from '../index'

const testData: CartItem = {
  id      : 'id',
  quantity: 2,
  title   : 'test title',

  variant: {
    availableForSale: true,
    id              : 'id2',



    priceV2: {
      amount      : 100,
      currencyCode: 'EUR',
    },

    product: {
      handle: 'handle',
      id    : 'id3',

      images: {
        edges: [],
      },

      title : 'title',
      vendor: 'vendor',
    },

    selectedOptions: [{name: 'name', value: 'value'}],
  },
}

describe('Cart Row', () => {
  it('renders well', async () => {
    const wrapper = mount(<table><tbody><Row data={testData} /></tbody></table>)
    expect(wrapper.find('.empty-message').at(0).text()).toEqual('noImage')
    expect(wrapper.find('.vendor').text()).toEqual(testData.variant.product.vendor)
  })
})
