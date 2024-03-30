import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/offers/offers'
import Newcollection from '../components/Newcollections/Newcollection'
import NewsLetter from '../components/Newsletters/NewsLetter'
const Shop = () => {
  return (
    <div>
    <Hero/>
    <Popular/>
    <Offers />
    <Newcollection/>
    <NewsLetter />
    </div>
  )
}

export default Shop
