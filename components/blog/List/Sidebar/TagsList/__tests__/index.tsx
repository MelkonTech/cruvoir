import {mount} from 'enzyme'
import {TagsList} from '../index'

const testData = {
  featuredTags: ['tag', 'tag1', 'tag2'],
  selectedTag : 'tag',
}

describe('Blog List Sidebar Tags List', () => {
  it('renders well', async () => {
    const wrapper = mount(<TagsList {...testData} />)
    expect(wrapper.find('a').at(0).hasClass('is-selected')).toBeTruthy()
    expect(wrapper.find('a').at(1).hasClass('is-selected')).toBeFalsy()
    expect(wrapper.find('a').at(2).hasClass('is-selected')).toBeFalsy()
  })
})
