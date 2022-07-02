import React from 'react'
import '../CSS/Footer.css'
import ILogo from '../Images/IncrIndia.png'
import {FaGoogle, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
export default function () {
  return (
      <div className="footer">
          <h4> &copy; 2022 - Tour Guide : Your Toursim Partner   </h4>
          <div className="social">
                <FaGoogle className='icon'/>
                <FaFacebook  className='icon'/>
                <FaInstagram  className='icon'/>
                <FaTwitter  className='icon'/>
          </div>
          <div className="about">
              Tour Guide is Website for Travle Planing. You can explore multiple cities. By using Tour guide you can track your train as well. Here we are giving our best to your best planning for your journey.
          </div>
          <img src={ILogo} alt="Atuly" width={"150vh"} height={"100vh"}/>
      </div>
  )
}
