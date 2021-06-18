import {HomeLayout} from '../index'
import {mount} from 'enzyme'

describe('Home Layout', () => {
  it('renders well', async () => {
    const wrapper = mount(<HomeLayout>children</HomeLayout>)
    expect(wrapper.find('.content').text()).toEqual('children')
  })
})
