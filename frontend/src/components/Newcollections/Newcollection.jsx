import React, { useEffect, useState } from 'react'
import './Newcollections.css'
import Items from '../items/Items'
const Newcollection = () => {
  const [newCollection,setNewcollection] = useState([])

  useEffect(()=>{
fetch('https://backend-server-2.onrender.com/newcollection')
.then((res)=>res.json())
.then((dats)=>setNewcollection(dats))
  },[])
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
    <hr/>
<div className='collections'>
{newCollection.map((item,i)=>{
        return <Items key ={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
})}
</div>
    </div>
  )
}

export default Newcollection
