import i18n from 'i18n'
import {List} from '../index'
import {mount} from 'enzyme'
jest.mock('next/config')

const testPosts = [{
  content: [{spans: [], text: 'Content', type: 'heading1'}],
  date   : '2001-01-01T01:01:01',
  excerpt: [{spans: [], text: 'Excerpt', type: 'heading1'}],
  slug   : 'string',
  tags   : ['hello'],
  title  : [{spans: [], text: 'The second post', type: 'heading1'}],
  uid    : 'string',
}]

const TranslatedList = i18n.appWithTranslation(List)

describe('List of the blog posts', () => {
  const mountedList = mount(<TranslatedList
    month={1}
    posts={testPosts}
    page={1}
    pathname="/"
    featuredTags={['Hello']}
    query={{}}
    totalPages={5}
    year={2019}
  />)

  it('has breadcrumbs date selector', async () => {
    expect(mountedList.find('.breadcrumbs > .item').at(1).text()).toEqual('January 2019 / ')
  })

  it('has tag selector', async () => {
    expect(
      mountedList.find('.sidebar > .wrapper > .scroll > .section').at(1).find('.link').at(0).text(),
    ).toEqual('Hello')
  })
})
