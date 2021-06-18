import {FeaturedMenuContext} from '../index'
import {FeaturedMenuContextProvider} from '../index'
import fixtures from './fixtures.json'
import {mount} from 'enzyme'
import {useContext} from 'react'

describe('Featured menu items context', () => {
  it('renders properly', async done => {
    const TestComponent = () => {
      const featuredMenuCtx = useContext(FeaturedMenuContext)
      expect(featuredMenuCtx.women[0].title).toEqual('designers')
      expect(featuredMenuCtx.women[0].list[0].collection).toEqual('mens-11-by-boris-bidjan-saberi')
      expect(featuredMenuCtx.women[0].list[0].title).toEqual('11')
      done()
      return null
    }

    mount(<FeaturedMenuContextProvider menPrismicResponse={fixtures} womenPrismicResponse={fixtures}>
      <TestComponent />
    </FeaturedMenuContextProvider>)
  })
})
