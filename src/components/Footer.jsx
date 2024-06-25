import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
function Footer() {
  return (
    <div>
        <footer className="footer  text-light custom-footer">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h5>About Us</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut risus id justo euismod interdum.</p>
        <div className="">
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
      <div className="col-md-3">
        <h5>Quick Links</h5>
        <ul className="list-unstyled no-decoration">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5>Contact Us</h5>
        <p>123 Main Street, City, Country</p>
        <p>Email: info@example.com</p>
        <p>Phone: +1 123 456 7890</p>
      </div>
    </div>
    <hr/>
    <div className="text-center">
      <p className='pb-2'>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer