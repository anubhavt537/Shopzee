import React from 'react'
import hand_icon from "./Assets/hand_icon.png";
import arrow_icon from "./Assets/arrow.png";
import hero_icon from "./Assets/hero_image.png";
import  './Hero.css'
export default function Hero() {
  return (
    <div className='hero'>
<div className="hero-left">
<h2>New Arrivals only</h2>
<div>
<div className="hero-hand-icon">
  <p>new</p>
  <img src={hand_icon} alt="" srcset="" />
</div>
<p>collection</p>
<p>For Everyone</p>
<div className="hero-latest-btn">
  <div>Latest Collection</div>
  <img src={arrow_icon} alt="" srcset="" />
  <div>

  </div>
</div>
</div>
</div>

<div className="hero-right">
<img src={hero_icon} alt="" srcset="" />

</div>
    </div>
  )
}
