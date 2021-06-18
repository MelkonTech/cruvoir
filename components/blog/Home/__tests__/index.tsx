import {Header} from 'components/blog/common/Header'
import {Home} from '../index'
import {mount} from 'enzyme'

const testPosts = [{
  content: [{spans: [], text: 'Content', type: 'heading1'}],
  date   : '2001-01-01T01:01:01',
  excerpt: [{spans: [], text: 'Excerpt', type: 'heading1'}],
  slug   : 'string',
  tags   : ['hello'],
  title  : [{spans: [], text: 'The second post', type: 'heading1'}],
  uid    : 'string',
}] as any

describe('Blog home', () => {
  const mountedList = mount(<Home
    pathname=""
    query={{}}
    posts={testPosts}
    topPosts={testPosts}
    totalPages={7}
  />)

  it('has top stories section', async () => {
    expect(mountedList.find(Header).at(0).text()).toEqual('topStories')
  })

  it('has more stories section', async () => {
    expect(mountedList.find('Header h2').at(1).text()).toEqual('moreStories')
    expect(mountedList.find('Header span').at(1).text()).toEqual('seeAllStories')
  })

  it('has correct posts count', async () => {
    expect(mountedList.find('div.list > PromoCard')).toHaveLength(1)
  })
})
