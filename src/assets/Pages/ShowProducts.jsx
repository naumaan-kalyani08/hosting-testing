import React from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
function ShowProducts() {
  return (
    <div className="container ">
      <div className="section-design pb-0">
        <div className="product-isotope-controls">
          <h2 className="section-title">Popular Products</h2>
          <div className="products-categories-wrapper">
            <ul className="product-categories-list">
              <li>
                <a href="#">Fruits</a>
              </li>
              <li>
                <a href="#">Washing Product</a>
              </li>
              <li>
                <a href="#">Vegetables</a>
              </li>
            </ul>
          </div>
          <div className="products row">
            {/* product-1 */}
            <div className="col-xl-3 product-wrapper ">
              <div className="product-image">
                <img
                  src="src\assets\photos\Product-category-images\delicious-apples-studio.png"
                  alt=""
                />
              </div>
              <div className="product-details">
                <h3 className="product-title">Fresh Apples</h3>
                <p className="product-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, sequi.
                </p>
                <a href="#" className="product-section-link">
                  {" "}
                  other Sea Food Items
                </a>
                <div className="product-price">
                  <span>
                    <strike className="mrp-price">$40.00</strike>
                    <p className="discounted-price">$30.00</p>
                  </span>
                  <span className="cart-icon">
                    <MdShoppingCartCheckout />
                  </span>
                </div>
              </div>
            </div>

            {/* product-2 */}
            <div className="col-xl-3 product-wrapper">
              <div className="product-image">
                <img
                  src="src\assets\photos\Product-category-images\kiwi.jpg"
                  alt=""
                />
              </div>
              <div className="product-details">
                <h3 className="product-title">Fresh Kiwi</h3>
                <p className="product-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, sequi.
                </p>
                <a href="#" className="product-section-link">
                  {" "}
                  other Sea Food Items
                </a>
                <div className="product-price">
                  <span>
                    <strike className="mrp-price">$40.00</strike>
                    <p className="discounted-price">$30.00</p>
                  </span>
                  <span className="cart-icon">
                    <MdShoppingCartCheckout />
                  </span>
                </div>
              </div>
            </div>

            {/* product-3 */}
            <div className="col-xl-3 product-wrapper">
              <div className="product-image">
                <img
                  src="src\assets\photos\Product-category-images\avacoda.jpg"
                  alt=""
                />
              </div>
              <div className="product-details">
                <h3 className="product-title">Avacoda</h3>
                <p className="product-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, sequi.
                </p>
                <a href="#" className="product-section-link">
                  {" "}
                  other Sea Food Items
                </a>
                <div className="product-price">
                  <span>
                    <strike className="mrp-price">$40.00</strike>
                    <p className="discounted-price">$30.00</p>
                  </span>
                  <span className="cart-icon">
                    <MdShoppingCartCheckout />
                  </span>
                </div>
              </div>
            </div>

            {/* product-4 */}
            <div className="col-xl-3 product-wrapper">
              <div className="product-image">
                <img
                  src="src\assets\photos\Product-category-images\orange.jpg"
                  alt=""
                />
              </div>
              <div className="product-details">
                <h3 className="product-title">Juicy Oranges</h3>
                <p className="product-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, sequi.
                </p>
                <a href="#" className="product-section-link">
                  {" "}
                  other Sea Food Items
                </a>
                <div className="product-price">
                  <span>
                    <strike className="mrp-price">$40.00</strike>
                    <p className="discounted-price">$30.00</p>
                  </span>
                  <span className="cart-icon">
                    <MdShoppingCartCheckout />
                  </span>
                </div>
              </div>
            </div>

            {/* product-5 */}
            <div className="col-xl-3 product-wrapper">
              <div className="product-image">
                <img
                  src="src\assets\photos\Product-category-images\oil.jpg"
                  alt=""
                />
              </div>
              <div className="product-details">
                <h3 className="product-title">Fortune Oil</h3>
                <p className="product-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, sequi.
                </p>
                <a href="#" className="product-section-link">
                  {" "}
                  other Sea Food Items
                </a>
                <div className="product-price">
                  <span>
                    <strike className="mrp-price">$40.00</strike>
                    <p className="discounted-price">$30.00</p>
                  </span>
                  <span className="cart-icon">
                    <MdShoppingCartCheckout />
                  </span>
                </div>
              </div>
            </div>

            {/* product-6 */}
            <div className="col-xl-3 product-wrapper">
              <div className="product-image">
                <img
                  src="src\assets\photos\Product-category-images\tirupati.png"
                  alt=""
                />
              </div>
              <div className="product-details">
                <h3 className="product-title">Tirupati Oil</h3>
                <p className="product-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, sequi.
                </p>
                <a href="#" className="product-section-link">
                  {" "}
                  other Sea Food Items
                </a>
                <div className="product-price">
                  <span>
                    <strike className="mrp-price">$40.00</strike>
                    <p className="discounted-price">$30.00</p>
                  </span>
                  <span className="cart-icon">
                    <MdShoppingCartCheckout />
                  </span>
                </div>
              </div>
            </div>

            {/* product-7 */}
            <div className="col-xl-3 product-wrapper">
              <div className="product-image">
                <img
                  src="src\assets\photos\Product-category-images\olive-oil.jpeg"
                  alt=""
                />
              </div>
              <div className="product-details">
                <h3 className="product-title">Olive Oil</h3>
                <p className="product-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, sequi.
                </p>
                <a href="#" className="product-section-link">
                  {" "}
                  other Sea Food Items
                </a>
                <div className="product-price">
                  <span>
                    <strike className="mrp-price">$40.00</strike>
                    <p className="discounted-price">$30.00</p>
                  </span>
                  <span className="cart-icon">
                    <MdShoppingCartCheckout />
                  </span>
                </div>
              </div>
            </div>

            {/* product-8 */}
            <div className="col-xl-3 product-wrapper">
              <div className="product-image">
                <img
                  src="src\assets\photos\Product-category-images\safola.jpeg"
                  alt=""
                />
              </div>
              <div className="product-details">
                <h3 className="product-title">Safola Oil</h3>
                <p className="product-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, sequi.
                </p>
                <a href="#" className="product-section-link">
                  {" "}
                  other Sea Food Items
                </a>
                <div className="product-price">
                  <span>
                    <strike className="mrp-price">$40.00</strike>
                    <p className="discounted-price">$30.00</p>
                  </span>
                  <span className="cart-icon">
                    <MdShoppingCartCheckout />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-design">
        <div className="cta-details">
          <span className="cta-text">
            Have Some vitamins Fruits at your DoorSteps
          </span>
          <button className="cta-button">Shop Now</button>
        </div>
      </div>

      <div className="sale-section row">
        <div className="sale-left col-xl-8">
          <div className="section-design">
            <div className="products d-flex overflow-x-scroll">
              {/* product-1 */}
              <div className="col-xl-4 product-wrapper ">
                <div className="product-image">
                  <img
                    src="src\assets\photos\Product-category-images\delicious-apples-studio.png"
                    alt=""
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">Fresh Apples</h3>
                  <p className="product-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque, sequi.
                  </p>
                  <a href="#" className="product-section-link">
                    {" "}
                    other Sea Food Items
                  </a>
                  <div className="product-price">
                    <span>
                      <strike className="mrp-price">$40.00</strike>
                      <p className="discounted-price">$30.00</p>
                    </span>
                    <span className="cart-icon">
                      <MdShoppingCartCheckout />
                    </span>
                  </div>
                </div>
              </div>

              {/* product-2 */}
              <div className="col-xl-4 product-wrapper">
                <div className="product-image">
                  <img
                    src="src\assets\photos\Product-category-images\kiwi.jpg"
                    alt=""
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">Fresh Kiwi</h3>
                  <p className="product-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque, sequi.
                  </p>
                  <a href="#" className="product-section-link">
                    {" "}
                    other Sea Food Items
                  </a>
                  <div className="product-price">
                    <span>
                      <strike className="mrp-price">$40.00</strike>
                      <p className="discounted-price">$30.00</p>
                    </span>
                    <span className="cart-icon">
                      <MdShoppingCartCheckout />
                    </span>
                  </div>
                </div>
              </div>

              {/* product-3 */}
              <div className="col-xl-4 product-wrapper">
                <div className="product-image">
                  <img
                    src="src\assets\photos\Product-category-images\avacoda.jpg"
                    alt=""
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">Avacoda</h3>
                  <p className="product-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque, sequi.
                  </p>
                  <a href="#" className="product-section-link">
                    {" "}
                    other Sea Food Items
                  </a>
                  <div className="product-price">
                    <span>
                      <strike className="mrp-price">$40.00</strike>
                      <p className="discounted-price">$30.00</p>
                    </span>
                    <span className="cart-icon">
                      <MdShoppingCartCheckout />
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 product-wrapper">
                <div className="product-image">
                  <img
                    src="src\assets\photos\Product-category-images\avacoda.jpg"
                    alt=""
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">Avacoda</h3>
                  <p className="product-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque, sequi.
                  </p>
                  <a href="#" className="product-section-link">
                    {" "}
                    other Sea Food Items
                  </a>
                  <div className="product-price">
                    <span>
                      <strike className="mrp-price">$40.00</strike>
                      <p className="discounted-price">$30.00</p>
                    </span>
                    <span className="cart-icon">
                      <MdShoppingCartCheckout />
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 product-wrapper">
                <div className="product-image">
                  <img
                    src="src\assets\photos\Product-category-images\avacoda.jpg"
                    alt=""
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">Avacoda</h3>
                  <p className="product-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque, sequi.
                  </p>
                  <a href="#" className="product-section-link">
                    {" "}
                    other Sea Food Items
                  </a>
                  <div className="product-price">
                    <span>
                      <strike className="mrp-price">$40.00</strike>
                      <p className="discounted-price">$30.00</p>
                    </span>
                    <span className="cart-icon">
                      <MdShoppingCartCheckout />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sale-right col-xl-4">
          <div className="aside-cta-design border-5 mt-4">
            {/* <div className="section-design"> */}
            hello world
            {/* </div> */}
          </div>
        </div>
        <div className="benefits-wrapper row">
          {/* offer 1 */}
          <div className="col-xl-3">
            <span>
              <span>
                <CiDeliveryTruck />
              </span>
              <span>
                <p>Free Delivery Across Area</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur, maiores?
                </p>
              </span>
            </span>
          </div>
          {/* offer 2 */}
          <div className="col-xl-3">
            <span>
              <span>
                <CiDeliveryTruck />
              </span>
              <span>
                <p>Free Delivery Across Area</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur, maiores?
                </p>
              </span>
            </span>
          </div>

          {/* offer 3 */}
          <div className="col-xl-3">
            <span>
              <span>
                <CiDeliveryTruck />
              </span>
              <span>
                <p>Free Delivery Across Area</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur, maiores?
                </p>
              </span>
            </span>
          </div>

            {/* product 4 */}
          <div className="col-xl-3">
            <span>
              <span>
                <CiDeliveryTruck />
              </span>
              <span>
                <p>Free Delivery Across Area</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur, maiores?
                </p>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* <img src="src\assets\photos\Slider-images\berries-bg.jpeg" alt="" srcset="" /> */}
    </div>
  );
}

export default ShowProducts;
