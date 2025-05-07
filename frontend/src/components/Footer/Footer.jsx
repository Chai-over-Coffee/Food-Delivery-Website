import React from 'react'
import "./Footer.css";
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h1>Food From Ayush</h1>
            <p>"Craving something delicious? Food From Ayush brings fresh, hot, and flavorful meals straight to your doorstep. From comfort food to gourmet delights, we deliver taste, quality, and convenience in every bite. Order now and experience the joy of hassle-free dining, anytime, anywhere!"</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt='' />
                <img src={assets.twitter_icon} alt='' />
                <img src={assets.linkedin_icon} alt='' />
            </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-12345-67890</li>
            <li>contact@foodfromayush.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © FoodFromAyush.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
