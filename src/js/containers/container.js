import React,  { Component } from 'react'
import Card from './../components/card'
import CardWrap from './../components/cardWrap'
import Search from './../components/search'
import { dataHandler } from './../utils/dataHandler' 
import { getData } from './../utils/getData'
import { validate } from './../utils/validate'
import { compare } from './../utils/compare'
import { compareString } from './../utils/compareString'
import { checkOrder } from './../utils/checkOrder'
import { formatTime } from './../utils/formatTime'
import { languageOptions } from './../utils/languageOptions'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }

  typeUser = (event) => {
    this.setState({ user: event.target.value})
  }

  submitUser = (event) => {
    event.preventDefault()
    validate(this.state.user, this.state.lastUser) ? 
      dataHandler(this) : this.errorHandler()
  }

  errorHandler() {
    this.setState({
      error: true,
      errorMessage: 'insert a valid or new userName'
    })
  }

  order = (param, descrescent = true) => {
		const data = this.state.stars
    if (checkOrder(this, param, descrescent)) {
      
      let newData = param === 'name' ? 
        data.sort(compareString(param, descrescent)) :
        data.sort(compare(param, descrescent)) 
        
      this.setState({
        order: `${param}-${descrescent}`,
        stars: newData,
      })
    }
  }

  filterBy = (event) => {
    let val = event.target.value
    let unfiltered = this.state.unfilteredStars

    if (val == 'SHOW ALL') {
      return  this.setState({
        filterBy: 'SHOW ALL',
        order: 'id',
        stars: unfiltered
      })
    }

    let filtered = unfiltered.filter((item) => {
      return item['language'] === val;
    })

    this.setState({
      filterBy: val,
      order: 'id',
      stars: filtered
    })
  }

  render() {
		let { state } = this

		return <div className={state.ready ? 'active' : ''}>
      <Search 
        userChange = { this.typeUser }
        userSubmit = { this.submitUser }
        val = { state.user }
      >
        { state.error && 
          <div className="error">
            <span>{state.errorMessage}</span>
          </div>
        }
      </Search>

      { state.ready && 
      	<CardWrap  
          order = { this.order } 
          filter = { this.filterBy }
          filterBy = { state.filterBy }
          options = { state.filters && state.filters.map((item, index) => {
            return item != undefined ? 
              <option key={index}>
                {item}
              </option> : null
          }) }
        >
					{ state.stars.map((item, index) => {
			    	return <li key = { index } >
			    	 <Card 
			    	 	avatar_url = {item.owner.avatar_url}
			    	 	created_at = {formatTime(item.created_at)}
			    	 	description = {item.description}
			    	 	language = {item.language}
			    	 	login = {item.owner.login}
			    	 	name = {item.name}
			    	 	open_issues_count = {item.open_issues_count}
			    	 	pushed_at = {formatTime(item.pushed_at)}
			    	 	stargazers_count = {item.stargazers_count}
			    	 />
			    	</li>
			  	}) }
				</CardWrap> 
			}
    </div>
	}
}