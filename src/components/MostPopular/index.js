import React from 'react';
import "./mostPopular.css";
import PopularWine from "./PopularWine.js"


const index = () => {
  return (
    <div className='winsSaleMain'>
      <div className='wineSaleHead'>Most Popular</div>
      <div className='popularSalePara'>Discover all relevant statistics on the wine industry/market and wine consumption in the United States with SVB's State of the Wine Industry Report 2023.</div>
      <div className='wineBottleSection'>
        <PopularWine />
        <PopularWine />
        <PopularWine />
        <PopularWine />
      </div>
      
    </div>
  )
}

export default index