import {mount} from 'enzyme'
import {PopupCart} from '../index'
jest.mock('components/common/Portal')
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const testData = {
  close       : jest.fn(),
  counterValue: 20,
  subtotal    : 234,
  title       : 'Title',
}

describe('Cart Context Popup Cart', () => {
  it('renders well', async () => {
    const wrapper = mount(<PopupCart {...testData}>Children</PopupCart>)
    expect(wrapper.find('.counter').text()).toBe(`${testData.counterValue}`)
  })

  it('calls callback on close button click', () => {
    const wrapper = mount(<PopupCart {...testData}>Children</PopupCart>)
    wrapper.find('button').at(0).simulate('click')
    expect(testData.close).toBeCalled()
  })

  it('calls router go to the bag on button clicked', () => {
    const push = jest.fn()
    useRouter.mockImplementation(() => ({push}))
    const wrapper = mount(<PopupCart {...testData}>Children</PopupCart>)
    wrapper.find('button').at(1).simulate('click')
    expect(push).toBeCalledWith('/cart')
  })
})
