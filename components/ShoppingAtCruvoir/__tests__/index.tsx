import {mount} from 'enzyme'
import {ShoppingAtCruvoir} from '../index'
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Shopping At Cruvoir', () => {
  it('renders well', async () => {
    useRouter.mockImplementation(() => ({asPath: '/'}))
    const wrapper = mount(<ShoppingAtCruvoir />)
    expect(wrapper.find('h1').at(0).text()).toEqual('infoCenter')
  })
})
