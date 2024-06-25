import React from "react";
import SwiperTest from "./SwiperTest";

function ProductCateogrySlider() {
  return (
    <div className="container">
      <div className="section-design px-4">
        <h2 className=" section-title ">About Us</h2>
        <p className="text-justify">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          dignissimos perferendis labore vero odio illum cupiditate repellat
          nulla, error aliquam voluptates magni ea impedit animi consequatur?
          Dolor reiciendis aliquam nulla vitae, dolorem aspernatur officiis
          ullam mollitia voluptatum molestias laudantium accusantium placeat
          laboriosam cumque hic magnam quia aut? Quos corrupti, tenetur corporis
          laudantium quidem aliquam velit consequatur cumque doloribus, magnam
          voluptas laborum voluptatum ducimus perspiciatis ipsum eum cum
          doloremque alias. Facilis dolore quas quibusdam maiores fugiat tempora
          et earum, dolorem praesentium exercitationem consequatur tenetur qui?
          Facilis soluta similique perferendis dolores natus, ipsam, est dolorum
          aliquid sunt repellendus tenetur non velit totam.
        </p>
      </div>

      <div className="product-slider-wrapper section-design">
        <h2 className=" section-title">Categories</h2>
        <SwiperTest />
      </div>
      
    </div>
  );
}

export default ProductCateogrySlider;
