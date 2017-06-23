import React from 'react'
import Card from './card'
import CardOrder from './cardOrder'
import Filter from './filter'

const CardWrap = (props) => {
	return <section className="cardWrap">
    <Filter {...props} />
		<CardOrder {...props} />
		<ul className="cardList">
			{ props.children }
		</ul>
  </section>
}

export default CardWrap