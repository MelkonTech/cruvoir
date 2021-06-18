import {mount} from 'enzyme'
import {PromoCard} from '../index'

const testData = {
  as         : '/',
  date       : '2020-06-02T17:40:13.673Z',
  description: 'description',
  href       : '/',
  imagePath  : '/',
  slug       : '/',
  tags       : [],
  title      : 'Some title',
}

describe('Blog Promo Card', () => {
  it('renders well', async () => {
    const wrapper = mount(<PromoCard {...testData} />)
    expect(wrapper.find('a.title').text()).toEqual(testData.title)
    expect(wrapper.find('.description').text()).toEqual(testData.description)
  })
})
