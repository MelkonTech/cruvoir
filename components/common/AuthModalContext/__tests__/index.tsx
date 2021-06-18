import {AuthModalContextProvider} from '../index'
import {mount} from 'enzyme'

describe('Auth Modal Context', () => {
  it('renders well', async () => {
    const wrapper = mount(<AuthModalContextProvider initialValue="signin">Children</AuthModalContextProvider>)
    expect(wrapper.find('AuthModalContextProvider').props().initialValue).toBe('signin')
  })
})
