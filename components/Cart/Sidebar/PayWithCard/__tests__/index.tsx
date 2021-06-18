import {ApolloClient} from 'apollo-client'
import {ApolloProvider} from '@apollo/react-hooks'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {MockLink} from 'apollo-link-mock'
import {mount} from 'enzyme'
import {PayWithCard} from '../index'
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const voidFunction = () => null

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link : new MockLink([]),
})

describe('PayWithCard', () => {
  it('shows title', async () => {
    useRouter.mockImplementation(() => ({query: {}}))

    const wrapper = mount(<ApolloProvider client={client}>
      <PayWithCard
        checkoutId="checkoutId"
        popup={{hide: () => null, isShown: false, show: () => null}}

        shippingAddress={{
          address1     : 'address1',
          address2     : 'address2',
          city         : 'city',
          country      : 'country',
          countryCodeV2: 'countryCodeV2',
          firstName    : 'firstName',
          formatted    : ['formatted1', 'formatted2'],
          id           : 'id',
          lastName     : 'lastName',
          name         : 'name',
          phone        : 'phone',
          province     : 'province',
          provinceCode : 'provinceCode',
          zip          : 'zip',
        }}

        onSuccess={voidFunction}
        total={1}
      />
    </ApolloProvider>)

    expect(wrapper).toBeTruthy()
  })
})
