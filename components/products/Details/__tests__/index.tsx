import {act} from 'react-dom/test-utils'
import {ApolloClient} from 'apollo-client'
import {ApolloProvider} from '@apollo/react-hooks'
import {Details} from '../index'
import fixtures from './fixtures.json'
import i18n from 'i18n'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {MockLink} from 'apollo-link-mock'
import {mount} from 'enzyme'
import Product from '../graphql/product.graphql'
const testData = {handle: 'amazing-product', title: 'Amazing product', vendor: 'Cool vendor'}
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const client = new ApolloClient({
  cache: new InMemoryCache(),

  link: new MockLink([{
    request: {query: Product, variables: {handle: testData.handle}},
    result : {data: fixtures},
  }]),
})

const TranslatedDetails = i18n.appWithTranslation(Details)

describe('Product details', () => {
  it('shows vendor and title', async () => {
    useRouter.mockImplementation(() => ({query: {id: 1}}))

    const wrapper = mount(<ApolloProvider client={client}>
      <TranslatedDetails router={{pathname: '/'}} query={{handle: testData.handle}} />
    </ApolloProvider>)

    await act(async () => {
      // Wait for a query;
      await new Promise(resolve => setTimeout(resolve))

      await wrapper.update()
    })

    expect(wrapper.find('.vendor').text()).toEqual(testData.vendor)
    expect(wrapper.find('h1').text()).toEqual(testData.title)
  })
})
