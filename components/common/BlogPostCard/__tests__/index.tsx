import {BlogPostCard} from '../index'
import {mount} from 'enzyme'

const testData = {
  as       : '/',
  date     : '2020-06-02T17:40:13.673Z',
  href     : '/',
  imagePath: '/',
  slug     : '/',
  title    : 'Some title',
}

describe('Blog Card', () => {
  it('renders well', async () => {
    const wrapper = mount(<BlogPostCard {...testData} />)
    expect(wrapper.find('a.title').text()).toEqual(testData.title)
  })
})
