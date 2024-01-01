// eslint-disable-next-line no-unused-vars
import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import logo from '../assets/allpicture/Logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
   <>
    <div className="footer">
        <div className="address">
            <h3>Address:</h3>
            <p>10001, 5th Avenue, 12202 Street, Phnom Penh.</p>
            <h3>Email</h3>
            <p>iBUYPOWER@gmail.com</p>
        </div>
        <div className='route'>
            <h3>Quick Links</h3>
            <div>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className="media">
            <h3>Follow Us</h3>
            <ul>
                <li><FaFacebook/> Facebook</li>
                <li><FaFacebookMessenger/> Messenger</li>
                <li><FaInstagram/> Instagram</li>
                <li><FaPhoneAlt/> Phone</li>
                <li><FaTelegram /> Telegram</li>
                <li><FaTiktok/> Tiktok</li> 
            </ul>
        </div>
        <div className="right-section">
            <h2>Contact Us: 888-462-3899</h2>
            <p>Get gaming news and iBUYPOWER promotions and offers! Happy times!</p>
        </div>
    </div>
   </>
  )
}

export default Footer