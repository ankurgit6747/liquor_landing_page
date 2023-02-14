import React from 'react';
import BrandLogo from './BrandLogo';
import "./popularBrand.css";

const index = () => {
  return (
    <div className='winsSaleMain'>
      <div className='wineSaleHead'>Popular brands</div>
      <div className='popularSalePara'>Discover all relevant statistics on the wine industry/market and wine consumption in the United States with SVB's State of the Wine Industry Report 2023.</div>
      <div className='wineBottleSection'>
       <BrandLogo />
       <div className='verticleLine'></div>
        <BrandLogo />
        <div className='verticleLine'></div>
        <BrandLogo />
        <div className='verticleLine'></div>
        <BrandLogo />
      </div>

    </div>
  )
}

export default index