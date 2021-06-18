import {ListItem} from '../index'
import {mount} from 'enzyme'

const testData = {
  as  : '/',
  href: '/',
}

describe('Blog List Sidebar List Item', () => {
  it('renders well', async () => {
    const wrapper = mount(<ListItem {...testData}>link</ListItem>)
    expect(wrapper.find('a').text()).toEqual('link')
  })
})
