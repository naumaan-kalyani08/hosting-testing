import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/Style/customSwiper.css'
// import '../assets/photos/Product-category-images/fruits.jpeg'
import Slider from "react-slick";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         <div className="d-flex align-items-center justify-content-center product-category-section">
        <span><img src="http://localhost:3000/static/media/cta.f16439919a880eff98e7.jpg" alt="fruit"/> 
        
        <p className="product-category-title"> Fresh Fruits</p> </span> 
         </div>
        </div>
        
        <div>
           <div className="d-flex align-items-center justify-content-center product-category-section">
      <span><img src="	/src/assets/photos/Product-category-images/vegetables.jpeg" alt="vegetables"/>
      <p className="product-category-title"> Healthy Vegeies</p> </span>  
        </div>
        </div>
        <div>
           <div className="d-flex align-items-center justify-content-center product-category-section">
           <span>
              <img src="	/src/assets/photos/Product-category-images/bakery-product.jpeg" alt="bread"/>
              <p className="product-category-title">Bakery Items</p>
           </span>
        </div>
        </div>
        <div>
           <div className="d-flex align-items-center justify-content-center product-category-section">
       <span><img src="	/src/assets/photos/Product-category-images/Dairy-product.jpeg" alt="dairy-product"/>
       <p className="product-category-title"> Milk</p> </span> 
        </div>
        </div>
        <div>
        
         <div className="d-flex align-items-center justify-content-center product-category-section">
<span><img src="	/src/assets/photos/Product-category-images/detergent.jpeg" alt="detergent"/>
<p className="product-category-title"> Detergents</p> </span>        
        </div>
        </div>
        <div>
           <div className="d-flex align-items-center justify-content-center product-category-section">
       <span><img src="	/src/assets/photos/Product-category-images/fish-products.jpeg" alt="fish"/>
       <p className="product-category-title"> Sea Items</p> </span> 
        </div>
        </div>
        <div>
           <div className="d-flex align-items-center justify-content-center product-category-section">
        <span><img src="	/src/assets/photos/Product-category-images/eggs.jpeg" alt="fish"/>
        <p className="product-category-title"> Product Name</p> </span>  
          </div>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
