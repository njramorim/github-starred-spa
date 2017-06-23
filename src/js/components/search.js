import React from 'react'
 
const Search = (props) => {
	return <section className="search">
		<h1>Starred repositories</h1>
		<form  
			name="search" 
			onSubmit={props.userSubmit}
		>
			<fieldset>
				<input 
					type="text"
					placeholder="type an user name"
					onChange={props.userChange}
					value = {props.val}
				/>

				<button type="submit">Search</button>

				{props.children}
			</fieldset>
		</form>
	</section>
}

export default Search 