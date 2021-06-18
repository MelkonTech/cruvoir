import {Button} from '../index'
import {mount} from 'enzyme'

describe('Button', () => {
  it('renders well', async () => {
    const wrapper = mount(<Button />)
    expect(wrapper).toBeTruthy()
  })
})
