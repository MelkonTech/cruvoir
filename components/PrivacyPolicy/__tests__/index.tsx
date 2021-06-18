import {mount} from 'enzyme'
import {PrivacyPolicy} from '../index'
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Privacy Policy', () => {
  it('renders well', async () => {
    useRouter.mockImplementation(() => ({asPath: '/'}))
    const wrapper = mount(<PrivacyPolicy />)
    expect(wrapper.find('h1').at(0).text()).toEqual('infoCenter')
  })
})
