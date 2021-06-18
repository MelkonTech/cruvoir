import {CartItem} from 'components/common/types'
import {Item} from '../index'
import {mount} from 'enzyme'

const cartItem: CartItem = {
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

describe('Cart Modal Item', () => {
  it('renders well', async () => {
    const wrapper = mount(<Item
      cartItem={cartItem}
      maxQuantity={10}
      removeProduct={jest.fn}
      updateProduct={jest.fn}
    />)

    expect(wrapper.find('.vendor').text()).toBe(cartItem.variant.product.vendor)
  })
})
