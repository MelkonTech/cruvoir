import {act} from 'react-dom/test-utils'
import {ApolloClient} from 'apollo-client'
import {ApolloProvider} from '@apollo/react-hooks'
import fixtures from './fixtures.json'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {List} from '../index'
import {MockLink} from 'apollo-link-mock'
import {mount} from 'enzyme'
import Products from '../graphql/products.graphql'
const testData = {handle: 'amazing-product', title: 'Amazing product', vendor: 'Cool vendor'}
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const client = new ApolloClient({
  cache         : new InMemoryCache(),
  defaultOptions: {query: {errorPolicy: 'all', fetchPolicy: 'no-cache'}},

  // Be careful with line-breaks inside MockLink request
  link: new MockLink(
    // eslint-disable-next-line max-len
    [{request: {query: Products, variables: {first: 24, query: 'tag:"men"', reverse: true, sortKey: 'CREATED_AT'}}, result: {data: fixtures}}],
  ),
})

describe('List of the products', () => {
  it('shows title', async () => {
    useRouter.mockImplementation(() => ({query: {id: 1}}))

    const wrapper = mount(<ApolloProvider client={client}>
      <List
        asPath="/men/shop/collection/all/category/all/subcategory/all"

        query={{
          category   : 'all',
          collection : 'all',
          gender     : 'men',
          subcategory: 'all',
        }}
      />
    </ApolloProvider>)

    await act(async () => {
      // Wait for a query
      await new Promise(resolve => setTimeout(resolve))

      await wrapper.update()
    })

    expect(
      wrapper.find('.content').find('.list').find('.card').at(0).find('.title').at(0).text(),
    ).toEqual(testData.title)
  })
})
