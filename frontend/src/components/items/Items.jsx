import React from 'react'
import "./Items.css"
import { Link } from 'react-router-dom'

function Items(props) {
  return (
    <div className='item'>
   <Link to={`/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} /> </Link>
   <p>{props.name}</p>
   <div className='items-prices'>
    <div className='items-price-new'>
        ${props.new_price}
    </div>
    <div className='item-price-old'>
        ${props.old_price}
    </div>
   </div>
    </div>
  )
}

export default Items
