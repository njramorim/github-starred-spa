import React from 'react'
import { mount } from 'enzyme'
import CardWrap from '../js/components/cardWrap'
import CardOrder from '../js/components/cardOrder'

describe('CardWrap', () => {
  let props
  let mountedSearch
  const cardWrap = () => {
    !mountedSearch ?
      mountedSearch = mount(
        <CardWrap {...props} />
      ) : mountedSearch
    
    return mountedSearch
  }
  
  it('it always renders a <section>', () => {
    const section = cardWrap().find('section')
    expect(section.length).toBeGreaterThan(0)
  })

  describe('the rendered <section>', () => {
	  it('contains everything else that gets rendered', () => {
	    const sections = cardWrap().find('section')
	    const wrappingSec = sections.first()
	    expect(wrappingSec.children()).toEqual(cardWrap().children())
	  })
  })

  it('always renders one cardList', () => {
    expect(cardWrap().find('.cardList').length).toBe(1)
  })

  it('always renders one <CardOder>', () => {
    expect(cardWrap().find('CardOrder').length).toBe(1)
  })
})