import {FeaturedBlogPosts} from '../index'
import {mount} from 'enzyme'

const testPosts: any = [
  {
    content: [{spans: [], text: 'Content', type: 'heading1'}],
    date   : '2001-01-01T01:01:01',
    excerpt: [{spans: [], text: 'Excerpt', type: 'heading1'}],
    slug   : 'string',
    tags   : ['hello'],
    title  : [{spans: [], text: 'The first post', type: 'heading1'}],
    uid    : 'string',
  },

  {
    content: [{spans: [], text: 'Content', type: 'heading1'}],
    date   : '2001-01-01T01:01:01',
    excerpt: [{spans: [], text: 'Excerpt', type: 'heading1'}],
    slug   : 'string',
    tags   : ['hello'],
    title  : [{spans: [], text: 'The second post', type: 'heading1'}],
    uid    : 'string1',
  },
]

describe('Featured Blog Posts', () => {
  it('renders well', async () => {
    const wrapper = mount(<FeaturedBlogPosts posts={testPosts} />)
    expect(wrapper.find('.slide').length).toBe(testPosts.length)
    expect(wrapper.find('.title').at(0).text()).toBe('The first post')
  })
})
