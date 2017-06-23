import React from 'react'
import { mount } from 'enzyme'
import Filter from '../js/components/filter'

describe('Filter', () => {
  let props
  let mountedFilter
  const filter = () => {
    !mountedFilter ?
      mountedFilter = mount(
        <Filter {...props} />
      ) : mountedFilter
    
    return mountedFilter
  }
  
  it('it always renders a <label>', () => {
    const label = filter().find('label')
    expect(label.length).toBeGreaterThan(0)
  })

  it('always renders one <span>', () => {
    expect(filter().find('span').length).toBe(1)
  }) 

  it('always renders one <select>', () => {
    expect(filter().find('select').length).toBe(1)
  }) 
})