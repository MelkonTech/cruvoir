import {act} from 'react-dom/test-utils'
import {ApolloClient} from 'apollo-client'
import {ApolloProvider} from '@apollo/react-hooks'
import {Form} from '../index'
import {Formik} from 'formik'
import {Gender} from 'components/common/types'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {MockLink} from 'apollo-link-mock'
import {mount} from 'enzyme'
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const testData = {
  checkoutId: 'id',
  className : 'class',

  countries: [{
    code     : 'us',
    name     : 'USA',
    provinces: [],
  }],

  gender          : 'men' as Gender,
  goBack          : jest.fn(),
  goNext          : jest.fn(),
  promoCodeLoading: false,
  refetch         : jest.fn(),
  shippingCost    : 100500,
  startPolling    : jest.fn(),
  step            : 1,
  stopPolling     : jest.fn(),
  total           : 2,
}

const client = new ApolloClient({
  cache         : new InMemoryCache(),
  defaultOptions: {query: {errorPolicy: 'all', fetchPolicy: 'no-cache'}},
  link          : new MockLink([]),
})

describe('Cart Sidebar Form', () => {
  it('renders well', async () => {
    useRouter.mockImplementation(() => ({query: {id: 1}}))
    const submit = jest.fn()

    const wrapper = mount(<ApolloProvider client={client}>
      <Formik initialValues={{}} onSubmit={submit}>
        <Form {...testData} />
      </Formik>
    </ApolloProvider>)

    await act(async () => {
      // Wait for a query
      await new Promise(resolve => setTimeout(resolve, 150))

      await wrapper.update()
    })

    expect(wrapper.find('Form').at(0).props().checkoutId).toBe(testData.checkoutId)
  })
})
