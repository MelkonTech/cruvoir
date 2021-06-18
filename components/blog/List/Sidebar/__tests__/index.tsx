import {mount} from 'enzyme'
import {Sidebar} from '../index'

const testData = {
  close        : jest.fn(),
  featuredTags : ['tag1', 'tag2'],
  selectedMonth: 12,
  selectedTag  : 'tag1',
  selectedYear : 2020,
}

describe('Blog List Sidebar', () => {
  it('renders well', async () => {
    const wrapper = mount(<Sidebar {...testData} />)
    expect(wrapper.find('ArchiveList')).toBeTruthy()
    expect(wrapper.find('TagsList')).toBeTruthy()
    wrapper.find('button').simulate('click')
    expect(testData.close).toBeCalled()
  })
})
