import React, { useEffect, useState } from 'react'
import './popular.css'
import Items from '../items/Items'

const Popular = () => {
  const[popular,setPopular]=useState([]);
  useEffect(()=>{
    fetch ('https://backend-server-2.onrender.com/popularinwomen')
    .then((res)=>res.json())
    .then((data)=>setPopular(data))
    },[])
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
<hr/>
<div className='popular-item'>
    {popular.map((item,i)=>{
        return <Items key ={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
    })}
</div>
    </div>
  )
}

export default Popular
