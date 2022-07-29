import React from 'react';
import background from '../public/assets/hero-image.png'
import Image from 'next/image'


export default function Hero () {
    return (
        <div>
  <header>
  <div id="intro-example" className ="p-5 text-center bg-image">
    <div className="mask">
      <div className ="d-flex justify-content-center align-items-center h-100">
        <div className ="text-white hero-text">
          <h1 className = 'jumbo-title'> The world's greatest fake site</h1>
          <p className = "jumbo-p">Create the world's greatest fake site and enjoy the breeze of fresh air when you complete</p>
          <button type="button" className = "hero-btn rounded-pill btn btn-primary btn-lg">
              Do Something Awesome
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
</div>
       
    )
}