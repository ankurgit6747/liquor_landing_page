import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header";
import Banner from "./components/Banner";
import WineSale from "./components/WineSales";
import MostPopular from "./components/MostPopular"
import PopularBrand from "./components/PopularBrand"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Header />
   <Banner />
   <WineSale />
   <MostPopular />
   <PopularBrand />
  </>
);

