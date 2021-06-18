import {CartItem} from 'components/common/types'
import {CartModal} from '../index'
import {mount} from 'enzyme'
jest.mock('components/common/Portal')

const cartItems: CartItem[] = [{
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
}]

describe('Cart Modal Item', () => {
  it('renders well', async () => {
    const wrapper = mount(<CartModal
      close={jest.fn}
      itemsCount={10}
      items={cartItems}
      removeProduct={jest.fn}
      subtotal={204}
      updateProduct={jest.fn}
    />)

    expect(wrapper.find('.counter').text()).toBe('10')
    expect(wrapper.find('.vendor').at(0).text()).toBe(cartItems[0].variant.product.vendor)
  })
})
