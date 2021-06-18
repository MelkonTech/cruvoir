import {Breadcrumbs} from '../index'
import {mount} from 'enzyme'

const testData = {
  className: 'test-class',

  items: [
    {title: 'Hello'},
    {title: 'world'},
  ],
}

describe('Breadcrumbs', () => {
  it('renders well', async () => {
    const wrapper = mount(<Breadcrumbs {...testData} />)
    expect(wrapper.find(`.${testData.className}`).length).toBe(testData.items.length)
  })
})
