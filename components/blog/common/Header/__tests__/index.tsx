import {Header} from '../index'
import {mount} from 'enzyme'

const testData = {
  title: 'some text',
}

describe('Blog Header', () => {
  it('renders well', async () => {
    const wrapper = mount(<Header>{testData.title}</Header>)
    expect(wrapper.find('.title').text()).toEqual(testData.title)
  })
})
