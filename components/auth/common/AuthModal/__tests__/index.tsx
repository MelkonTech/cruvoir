import {AuthModal} from '../index'
import {mount} from 'enzyme'

describe('Auth Modal', () => {
  it('renders well', async () => {
    const wrapper = mount(<AuthModal close={jest.fn}>Modal</AuthModal>)
    expect(wrapper.find('div.window').at(0).text()).toEqual('Modal')
  })

  it('closes modal on background clicked', async () => {
    const close = jest.fn()
    const wrapper = mount(<AuthModal close={close}>Modal</AuthModal>)
    wrapper.find('div.background').simulate('click')
    expect(close).toBeCalled()
  })
})
