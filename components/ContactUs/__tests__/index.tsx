import {ContactUs} from '../index'
import {mount} from 'enzyme'
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('ContactUs', () => {
  it('renders well', async () => {
    useRouter.mockImplementation(() => ({asPath: '/'}))
    const wrapper = mount(<ContactUs />)
    expect(wrapper.find('h3').at(0).text()).toEqual('Anytime You can send us an email to')
  })
})
