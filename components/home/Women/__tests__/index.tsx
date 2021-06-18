import {mount} from 'enzyme'
import {Women} from '../index'

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

describe('Home Women', () => {
  it('renders well', async () => {
    const wrapper = mount(<Women {...testData} />)
    expect(wrapper).toBeTruthy()
  })
})
