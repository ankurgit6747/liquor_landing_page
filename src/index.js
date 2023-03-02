import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header";
import Banner from "./components/Banner";
import WineSale from "./components/WineSales";
import MostPopular from "./components/MostPopular"
import PopularBrand from "./components/PopularBrand";
import WhySpiritory from "./components/WhySpiritory";
import BannerImage from "./assets/banner.png"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Header />
   <Banner />
   <WineSale />
   <MostPopular />
   <PopularBrand />

    <MostPopular />
   <div style={{ maxWidth:"1738px", margin:"auto", marginBottom:"2rem" }}>
     <img src={BannerImage} alt="bannerImage" />
   </div>
   <WhySpiritory />
  </>
);

