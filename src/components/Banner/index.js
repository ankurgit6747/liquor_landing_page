import React from 'react';
import "./banner.css";

const index = () => {
  return (
    <div className='mainBanner'>
      <div className='bannerText'>
        <div className='textDiv'>
          <div className='fastAndSecure'>Fast, Secure & Easy</div>
          <div className='simple'>Simple, Modern Wine Investing</div>
          <div className='paraDiv'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</div>
        </div>
        <div className='getStartbtn'>
          <div className='getStartedText'>Get Started</div>
        </div>
      </div>
      <div className='right'>
        <div className='top'>
          <div className='topInside'></div>
        </div>
        <div className='bottom'></div>
      </div>
    </div>
  )
}

export default index