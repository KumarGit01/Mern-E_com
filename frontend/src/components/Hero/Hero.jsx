import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from'../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New ARRAVIAlS ONLY</h2>
        
        <div className='hh1'>
            <div className="hand-hand-icon">
                <p>new</p>
                <img src={hand_icon} />
            </div>
            <p className='pp1'>collections</p>
            <p className='pp2'>for everyone</p>
        </div>
        <div className="hero-latest-button">
            <div className='ll1'>Latest collection</div>
            <img src={arrow_icon} className='ii1'></img>
        </div>
      </div>
      <div className="hero-right">
<img src={hero_image}></img>

      </div>
    </div>
  )
}

export default Hero
