import {mount} from 'enzyme'
import {Promo} from '../index'

describe('Home Promo', () => {
  it('renders well', async () => {
    const wrapper = mount(<Promo>children</Promo>)
    expect(wrapper.find('div').text()).toEqual('children')
  })
})
