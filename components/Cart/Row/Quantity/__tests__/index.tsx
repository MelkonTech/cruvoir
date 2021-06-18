import {mount} from 'enzyme'
import {Quantity} from '../index'

const testData = {
  maxQuantity  : 10,
  updateProduct: jest.fn(),
  value        : '42',
  variantID    : 'id',
}

describe('Cart Row Quantity', () => {
  it('renders well', async () => {
    const wrapper = mount(<Quantity {...testData} />)
    expect(wrapper.find('option').length).toBe(testData.maxQuantity)
  })

  it('calls update product on change', () => {
    const wrapper = mount(<Quantity {...testData} />)
    wrapper.find('select').simulate('change')
    expect(testData.updateProduct).toBeCalledWith({quantity: 1, variantID: testData.variantID})
  })
})
