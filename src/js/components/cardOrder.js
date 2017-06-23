import React from 'react'

const ORDER = [
  { id: 'name', label: 'repository name' },
  { id: 'stargazers_count', label: 'stargazers count' },
  { id: 'open_issues_count', label: 'open issues count' }
]

const CardOrder = (props) => {
	return  <nav className="cardOrder">
		<ul>
			{ ORDER.map(({ id, label }, index) => (
        <li key = { index }>
          <span>{ label }</span>
          <a title="From highest to lowest" 
            onClick={() => props.order(id)}
          >+</a>
          <a title="From lowest to highest" 
            onClick={() => props.order(id, false)}
          >-</a>
        </li>
      )) }
		</ul>
	</nav>
}

export default CardOrder
