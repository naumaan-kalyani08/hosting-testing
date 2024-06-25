import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { GiTomato } from "react-icons/gi";
import { MdCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { RiRedPacketFill } from "react-icons/ri";
function Header() {
  return (
    <header>
      <div class="header-wrapper top">
        <div class="container">
          <div class="header-top  row">
            <div class="header-left col-xl-4">
              <div className="company-details">
                <a href="mailto:example@example.com" className="pe-3"> <span className="px-1"><IoMail /> </span>WintechIndia@mail.com</a>
                <a href="tel:+1234567890" >
                  <span className="px-1"><MdCall /> </span>Call Us</a>
              </div>
              {/* <span> Delivery on next day from 10:00 AM to 08:00PM </span> */}
            </div>
            <div class="header-center col-xl-4">
              <ul class="nav-menus">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                </li>
              </ul>
            </div>
            <div class="header-right col-xl-4">
              <div className="company-details-wrapper">
                <div className="social-media-icons">
                  <ul className="social-media-icons-list">
                    <li>
                      <a href="#">
                        <FaSquareXTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <RiInstagramFill />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaFacebookSquare />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-scroll-wrapper">
        <div className="header-scroll">
          <div className="container ">
            <div className="row align-items-center">
              <div className="col-xl-1"></div>
              <div className="col-xl-4">
                <ul className="header-scroller-icons">
                  <li>
                    <a href="#">
                      <span>
                        <FaShoppingBasket />
                        <span className="ps-1 header-icon-title">Shop</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <GiTomato />
                        <span className="ps-1 header-icon-title">Vegetables</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <RiRedPacketFill /> <span className="ps-1 header-icon-title">Detergents</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2">
                <h6 className="text-center mb-0"> Wintech lOGO</h6>
              </div>

              <div className="col-xl-4">
                <ul className="header-scroller-icons">
                  <li>
                    <a href="#">
                      <span>
                        <FaShoppingBasket />
                        <span className="ps-1 header-icon-title">Shop</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <GiTomato />{" "}
                        <span className="ps-1 header-icon-title">
                          Vegetables
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <RiRedPacketFill />{" "}
                        <span className="ps-1 header-icon-title">
                          Detergents
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
