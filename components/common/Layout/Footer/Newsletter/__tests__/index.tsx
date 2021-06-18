import fetchMock, {enableFetchMocks} from 'jest-fetch-mock'
import {act} from 'react-dom/test-utils'
import {mount} from 'enzyme'
import {Newsletter} from '../index'
enableFetchMocks()

describe('Newsletter form in the footer', () => {
  it('shows thank you message', async () => {
    fetchMock.mockOnce('{"success": true}')
    const wrapper = mount(<Newsletter className="" />)
    wrapper.find('input').at(0).simulate('change', {target: {name: 'name', value: 'John Smith'}})
    wrapper.find('input').at(1).simulate('change', {target: {name: 'email', value: 'test@email.com'}})
    wrapper.find('form').simulate('submit')

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      await wrapper.update()
    })

    expect(wrapper.find('p').text()).toEqual('thankYouForSubscribing')
  })
})
