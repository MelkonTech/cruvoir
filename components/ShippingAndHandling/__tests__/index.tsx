import {mount} from 'enzyme'
import {ShippingAndHandling} from '../index'
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Shipping And Handling', () => {
  it('renders well', async () => {
    useRouter.mockImplementation(() => ({asPath: '/'}))
    const wrapper = mount(<ShippingAndHandling />)
    expect(wrapper.find('h1').at(0).text()).toEqual('infoCenter')
  })
})
