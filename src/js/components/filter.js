import React from 'react'


const Filter = (props) => {
	return <label className="filter">
		<span>Filter by:</span>
		<select value={props.filterBy} onChange={props.filter}>
			{props.options}
		</select>
	</label>
}

export default Filter
