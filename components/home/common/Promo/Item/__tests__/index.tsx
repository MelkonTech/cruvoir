import {Item} from '../index'
import {mount} from 'enzyme'

const testData = {
  data: {
    title: 'test',
    url  : {url: '/'},
  },

  gender   : 'men',
  lgColSpan: 1,
  lgRowSpan: 2,
  mdColSpan: 1,
  mdRowSpan: 2,
  type     : 'image',
}

describe('Home Promo Item', () => {
  it('renders well', async () => {
    const wrapper = mount(<Item {...testData} />)
    expect(wrapper.find('.title').text()).toEqual(testData.data.title)
  })
})
