
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
function HeroSliderBs() {
  return (
    <div className="">
<div id="carouselExampleInterval" className="carousel slide text-center" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item main-items active " data-bs-interval="2000">
      <div className="hero-slider-structure hero-slider-1">
        <img src="src\assets\photos\Slider-images\trolly-image.png" alt="" srcset=""  data-aos="fade-right"/>

      <h1 className=" " data-aos="fade-left"> Welcome</h1>
      </div>
    </div>
    <div className="carousel-item main-items" data-bs-interval="2000">
      <h1 className="hero-slider-structure hero-slider-2">slide two</h1>
    </div>
    <div className="carousel-item main-items" data-bs-interval="2000">
      <h1 className="hero-slider-structure hero-slider-3"> Slide 3</h1>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default HeroSliderBs