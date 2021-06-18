import {mount} from 'enzyme'
import {Returns} from '../index'
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Returns', () => {
  it('renders well', async () => {
    useRouter.mockImplementation(() => ({asPath: '/'}))
    const wrapper = mount(<Returns />)
    expect(wrapper.find('h1').at(0).text()).toEqual('infoCenter')
  })
})
