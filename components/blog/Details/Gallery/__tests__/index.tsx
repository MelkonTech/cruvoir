import fixtures from './fixtures.json'
import {Gallery} from '../index'
import {mount} from 'enzyme'

describe('Blog post gallery', () => {
  it('renders first thumbnail properly', async () => {
    const wrapper = mount(<Gallery
      images={fixtures}
      // eslint-disable-next-line react/jsx-no-bind
      showPreviewPopup={() => {}}
    />)

    expect(wrapper.find('img').at(0).prop('src')).toEqual(fixtures[0].thumbnail)
  })
})
