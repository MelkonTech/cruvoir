import {act} from 'react-dom/test-utils'
import {ApolloClient} from 'apollo-client'
import {ApolloProvider} from '@apollo/react-hooks'
import {Details} from '../index'
import fixtures from './fixtures.json'
import i18n from 'i18n'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {MockLink} from 'apollo-link-mock'
import {mount} from 'enzyme'
import Product from 'components/products/Details/graphql/product.graphql'
const testData = {handle: 'amazing-product', title: 'Amazing product', vendor: 'Cool vendor'}
jest.mock('next/config')

const client = new ApolloClient({
  cache: new InMemoryCache(),

  link: new MockLink([{
    request: {query: Product, variables: {handle: testData.handle}},
    result : {data: fixtures},
  }]),
})

const testContent = 'A content'
const testTags = ['Hello', 'Again']

const testPost = {
  content: [{spans: [], text: testContent, type: 'paragraph'}],
  date   : '2001-01-01T01:01:01',
  tags   : testTags,
  title  : [{spans: [], text: 'The second post', type: 'heading1'}],
  uid    : 'string',
}

const TranslatedDetails = i18n.appWithTranslation(Details)

const getWrapper = async () => {
  const wrapper = mount(<ApolloProvider client={client}>
    <TranslatedDetails post={testPost} router={{pathname: '/'}}/>
  </ApolloProvider>)

  await act(async () => {
    // Wait for a query;
    await new Promise(resolve => setTimeout(resolve))

    await wrapper.update()
  })

  return wrapper
}

describe('Details of a blog post', () => {
  it('renders article\'s HTML', async () => {
    expect((await getWrapper()).html().indexOf(testContent) !== -1).toBeTruthy()
  })

  it('renders list of article\'s tags', async () => {
    expect((await getWrapper()).find('.tags a.tag').at(1).text()).toEqual(testTags[1])
  })
})
