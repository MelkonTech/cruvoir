import fixtures from './fixtures.json'
import {mount} from 'enzyme'
import {ProductCard} from '../index'

describe('Product card', () => {
  it('in the SizeField box prepends ".is-disabled" to the sold out variants', async () => {
    expect(

      // @ts-ignore
      mount(<ProductCard product={fixtures} />).find('.input').at(2).hasClass('is-disabled'),
    ).toBeTruthy()
  })
})
