import React from 'react'
import { mount } from 'enzyme'
import Search from '../js/components/search'

describe('Search', () => {
  let props
  let mountedSearch
  const search = () => {
    !mountedSearch ?
      mountedSearch = mount(
        <Search {...props} />
      ) : mountedSearch
    
    return mountedSearch
  }
  
  it('it always renders a <section>', () => {
    const section = search().find('section')
    expect(section.length).toBeGreaterThan(0)
  })

  describe('the rendered <section>', () => {
	  it('contains everything else that gets rendered', () => {
	    const sections = search().find('section')
	    const wrappingSec = sections.first()
	    expect(wrappingSec.children()).toEqual(search().children())
	  })
  })

  it('always renders one <h1>', () => {
    expect(search().find('h1').length).toBe(1)
  })

  it('always renders one <form>', () => {
    expect(search().find('form').length).toBe(1)
  }) 
})