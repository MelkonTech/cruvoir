import {List} from '../index'
import {mount} from 'enzyme'

const testData = {
  selectedMonth: 8,
  selectedYear : 2020,
  year         : 2020,
}

describe('Blog List Sidebar Archive List', () => {
  it('renders well', async () => {
    const wrapper = mount(<List {...testData} />)
    expect(wrapper.find('header').text()).toEqual(`${testData.year}`)
  })

  it('folds on header clicked', () => {
    const wrapper = mount(<List {...testData} />)
    expect(wrapper.find('div').at(0).hasClass('is-folded')).toBeTruthy()
    wrapper.find('header').simulate('click')
    expect(wrapper.find('div').at(0).hasClass('is-folded')).toBeFalsy()
  })
})
