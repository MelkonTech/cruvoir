import {ApolloClient} from 'apollo-client'
import {ApolloProvider} from '@apollo/react-hooks'
import {ForgotPassword} from '../index'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {MockLink} from 'apollo-link-mock'
import {mount} from 'enzyme'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link : new MockLink([]),
})

describe('Auth Forgot Password', () => {
  it('renders well', async () => {
    const wrapper = mount(<ApolloProvider client={client}>
      <ForgotPassword />
    </ApolloProvider>)

    expect(wrapper.find('h2.title').text()).toEqual('forgotYourPassword')
  })
})
