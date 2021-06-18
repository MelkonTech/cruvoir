import {Men} from '../index'
import {mount} from 'enzyme'

const testData = {
  cmsContent: {
    is_video_autoplayable: true,

    promo: [{
      title: 'test',
      url  : {url: '/'},
    }],

    video: {url: '/'},
  },

  topPosts: [],
}

describe('Home Men', () => {
  it('renders well', async () => {
    const wrapper = mount(<Men {...testData} />)
    expect(wrapper).toBeTruthy()
  })
})
