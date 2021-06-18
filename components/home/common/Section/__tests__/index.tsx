import {mount} from 'enzyme'
import {Section} from '../index'

describe('Home Section', () => {
  it('renders well', async () => {
    const wrapper = mount(<Section title="title">children</Section>)
    expect(wrapper.find('.title').text()).toEqual('title')
  })
})
