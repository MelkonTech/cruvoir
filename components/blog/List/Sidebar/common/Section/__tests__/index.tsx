import {mount} from 'enzyme'
import {Section} from '../index'

const testData = {
  title: 'title',
}

describe('Blog List Sidebar Section', () => {
  it('renders well', async () => {
    const wrapper = mount(<Section {...testData}>children</Section>)
    expect(wrapper.find('.title').at(0).text()).toEqual(testData.title)
  })
})
