import React, { useState } from "react";
import Slider from "react-slick";

function ProductSlider() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    width:600,
  };
  return (
<div className="container">
    <div className="slider-container section-design">
      <h2> Resizable Collapsible </h2>
      <button className="button" onClick={() => setWidth(width + 100)}>
        {" "}
        increase{" "}
      </button>
      <button className="button" onClick={() => setWidth(width - 100)}>
        {" "}
        decrease{" "}
      </button>
      <button className="button" onClick={() => setDisplay(!display)}>
        {" "}
        toggle{" "}
      </button>
      <div
        style={{
          width: width + "px",
          display: display ? "block" : "none"
        }}
      >
        <Slider {...settings}>
            <div className="row">
                
            </div>
          <div className="col-xl-4">
            <h3>1</h3>
          </div>
          <div className="col-xl-4">
            <h3>2</h3>
          </div>
          <div className="col-xl-4">
            <h3>3</h3>
          </div>
          <div className="col-xl-4">
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
        
    </div>
</div>
  );
}

export default ProductSlider;
