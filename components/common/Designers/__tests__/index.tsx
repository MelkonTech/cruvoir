import {Designers} from '../index'
import {mount} from 'enzyme'

describe('List of Designers', () => {
  it('renders first link properly', async () => {
    const wrapper = mount(<Designers />)

    expect(wrapper.find('a').at(0).text()).toEqual('#3.1 PHILLIP LIM')
  })
})
