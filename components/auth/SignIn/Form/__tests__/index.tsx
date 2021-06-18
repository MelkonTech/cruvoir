import {Form} from '../index'
import {Formik} from 'formik'
import {mount} from 'enzyme'

describe('Auth Sign In Form', () => {
  it('renders well', () => {
    const showForgot = jest.fn()
    const submit = jest.fn()

    const wrapper = mount(<Formik initialValues={{}} onSubmit={submit} >
      <Form
        errorMessages={[]}
        showForgot={showForgot}
      />
    </Formik>)

    expect(wrapper).toBeTruthy()
  })

  it('shows forgot on forgotYourPassword button click', async () => {
    const showForgot = jest.fn()
    const submit = jest.fn()

    const wrapper = mount(<Formik initialValues={{}} onSubmit={submit} >
      <Form
        errorMessages={[]}
        showForgot={showForgot}
      />
    </Formik>)

    wrapper.find('button').at(0).simulate('click')
    expect(showForgot).toBeCalled()
  })
})
