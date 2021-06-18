import {ArchiveList} from '../index'
import {mount} from 'enzyme'

const testData = {
  selectedMonth: 8,
  selectedYear : 2020,
}

describe('Blog List Sidebar Archive', () => {
  it('renders well', async () => {
    const wrapper = mount(<ArchiveList {...testData} />)
    expect(wrapper.find('.title').at(0).text()).toEqual('archive')
  })
})
