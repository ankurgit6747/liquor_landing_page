import React from 'react'
import "./footer.css"
import logo2 from '../../assets/logo2.png'

const Footer = () => {
  return (
    // <div className='mainfooter' >
      <div className="footerDiv">
        <div className="first">
          <div className="logoDiv">
            <img src={logo2} alt="logo2" />
          </div>
          <div className="socialMediaDiv"></div>
        </div>
        <div className="second">
          <div className='secondHead'>Services</div>
          <div className='subHead1'>About us</div>
          <div className='subHead1'>How it works</div>
          <div className='subHead1'>Buyer guideline</div>
          <div className='subHead1'>Seller guideline</div>
          <div className='subHead1'>Conditions</div>
          <div className='subHead1'>Product suggestion</div>
          <div className='subHead1'>Authentication</div>
          <div className='subHead1'>Packaging guideline</div>
        </div>
        <div className="second">
          <div className='secondHead'>Scottish Whisky</div>
          <div className='subHead1'>Macallan Rich Cacao</div>
          <div className='subHead1'>Macallan Fine Cacao</div>
          <div className='subHead1'>Macallan Concept No.3</div>
          <div className='subHead1'>Bowmore No Corners</div>
          <div className='subHead1'>Ardbeg Fermutation</div>
          <div className='subHead1'>Glenfiddich Grand Cru</div>
          <div className='subHead1'>Springback Local Barley</div>
        </div>
        <div className="second">
          <div className='secondHead'>World Whisky</div>
          <div className='subHead1'>Yamazaki Limited 21</div>
          <div className='subHead1'>Hibiki Ryusui-Hyakka</div>
          <div className='subHead1'>Chichubu First Ten</div>
          <div className='subHead1'>Kanosuke First Edition</div>
          <div className='subHead1'>Hakushu 18</div>
          <div className='subHead1'>Hakushu 18</div>
          <div className='subHead1'>Hakushu 18</div>
        </div>
      </div>
    // </div>
  )
}

export default Footer