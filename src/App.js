import { useEffect, useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import './assets/Style/random-animation-slider.css'
import 'swiper/css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './assets/Style/Theme.css'
import './assets/Style/customSwiper.css'
import Header from './components/Header'
// import HeroSlider from './Components/HeroSlider';
import HeroSliderBs from './components/HeroSlider-bs';
import ProductCateogrySlider from './components/ProductCateogrySlider';
import ProductSlider from './components/ProductSlider';
import ShowProducts from './assets/Pages/ShowProducts';
// import FilterableGallery from './Components/FilterableGallery';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <Header/>
    {/* <HeroSlider/> */}
    <HeroSliderBs/>
    <ProductCateogrySlider/>
  <ProductSlider/>
  <ShowProducts/>
  <Footer/>
    </>
  )
}

export default App
