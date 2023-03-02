import React from 'react';
import "./mostPopular.css";

const PopularWine = ({imgUrl}) => {
  return (
    <div className='popularWineMainDiv'>
      <div className='wineBottleLeft'>
        <div className='nameWine'>Springbank</div>
        <div className='oldWine'>Spring bank 15 years</div>
        <div className='countryWine'>Contrary to popular belief, </div>
        <div className='wineAge'>
          <div className='age'>+17</div>
          <img src="https://file.rendit.io/n/tbiyr1ST0F7Ebgh6H8bp.png" alt="svg" />
        </div>
        <div className='readMore'>Read more</div>
      </div>
      <div className='wineBottle'></div>
    </div>
  )
}

export default PopularWine