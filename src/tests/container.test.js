import React from 'react'
import { mount } from 'enzyme'
import Container from '../js/containers/container'
import Card from '../js/components/card'
import CardWrap from '../js/components/cardWrap'
import Search from '../js/components/search'

describe('Container,', () => {
  let states
  let mountedContainer
  const container = () => {
    !mountedContainer ?
      mountedContainer = mount(
        <Container {...states} />
      ) : mountedContainer
    
    return mountedContainer
  }

  beforeEach(() => {
    states = {
      error: false,
      errorMessage: '',
      filters: false,
      filterBy: 'SHOW ALL',
      lastUser: '',
      order: 'id',
      stars: '',
      unfilteredStars: '',
      user: '',
      ready: false
    }
    mountedContainer = undefined
  })
  
  it('it always renders a <div>', () => {
    const div = container().find('div')
    expect(div.length).toBeGreaterThan(0)
  })

  describe('the rendered <div>', () => {
    it('contains everything else that gets rendered', () => {
      const div = container().find('div')
      const wrappingDiv = div.first()
      expect(wrappingDiv.children()).toEqual(container().children())
    })
  })

  it('it always renders `Search`', () => {
    expect(container().find(Search).length).toBeGreaterThan(0)
  })

  describe("when `ready` is false", () => {
    beforeEach(() => {
      states.ready = false
    })
    it("does not render a `CardWrap`", () => {
      expect(container().find(CardWrap).length).toBe(0)
    })
  })

  describe("when `error` is false", () => {
    beforeEach(() => {
      states.error = false
    })
    it("does not render a `error span`", () => {
    	const error = container().find('div.error')
      expect(error.length).toBe(0)
    })
  })
})