import {Form} from '../index'
import {Formik} from 'formik'
import {mount} from 'enzyme'

describe('Auth Forgot Password Form', () => {
  it('renders well', () => {
    const showSignUp = jest.fn()
    const submit = jest.fn()

    const wrapper = mount(<Formik initialValues={{}} onSubmit={submit} >
      <Form
        errorMessages={[]}
        showSignUp={showSignUp}
      />
    </Formik>)

    expect(wrapper).toBeTruthy()
  })

  it('shows signup on registerNow button click', async () => {
    const showSignUp = jest.fn()
    const submit = jest.fn()

    const wrapper = mount(<Formik initialValues={{}} onSubmit={submit} >
      <Form
        errorMessages={[]}
        showSignUp={showSignUp}
      />
    </Formik>)

    wrapper.find('button').at(0).simulate('click')
    expect(showSignUp).toBeCalled()
  })
})
