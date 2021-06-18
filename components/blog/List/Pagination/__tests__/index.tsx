import {mount} from 'enzyme'
import {Pagination} from '../index'

const testData = {
  page      : 1,
  pathname  : '/',
  query     : {},
  totalPages: 2,
}

describe('Blog List Pagination', () => {
  it('renders well', async () => {
    const wrapper = mount(<Pagination {...testData} />)
    expect(wrapper.find('a').at(0).hasClass('is-disabled')).toBeTruthy()
    expect(wrapper.find('a').at(1).hasClass('is-disabled')).toBeFalsy()
  })
})
