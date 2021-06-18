import {Form} from '../index'
import {Formik} from 'formik'
import {mount} from 'enzyme'

describe('Auth Reset Password Form', () => {
  it('renders well', () => {
    const submit = jest.fn()

    const wrapper = mount(<Formik initialValues={{}} onSubmit={submit} >
      <Form errorMessages={[]} />
    </Formik>)

    expect(wrapper).toBeTruthy()
  })
})
