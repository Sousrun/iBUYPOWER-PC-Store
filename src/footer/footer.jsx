// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../footer/footer.css'
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
        <footer>
<div className="footer-bar">
 <div className="bar-bottom">

    <div className="bar-bottom">
         <ul className="le-ft">
         <b>Address:</b>
         <p><li> 10001, 5th Avenue,</li></p>
         <li>12202 street, Phnom Penh.</li>
         <b><li>Email:</li></b>
         <li>iBUYPOWER@gmail.com</li>
         </ul>
     </div>
     <div className="center1">
         <h1></h1>
         <ul>
             <b><li>Quick Links</li></b>
             <Link to="/"><li> Home </li></Link>
             <Link to="/shop"><li>Shop</li></Link> 
             <Link to="/about"><li> About Us</li></Link>
             <Link to="/contact"><li>Contact</li></Link>  
         </ul>
     </div>
     

     <div className="cen-ter">
         <ul>
            <b><li>Follow Us</li></b>
             <li> <FaFacebook/> Facebook</li>
             <li><FaFacebookMessenger/> Messenger</li>
             <li><FaInstagram/> Instagram</li>
             <li><FaPhoneAlt/> Phone</li>
              <li><FaTelegram /> Telegram</li>
             <li><FaTiktok/> Tiktok</li> 
         </ul>
     </div>
     <div className="rig-ht">
         <h2>Our Service</h2>
         <p>Contact Us: 888-462-3899</p>
         <p>Get gaming news and iBUYPOWER promotions and offers!</p>
         <p>Happy your time!</p>
     </div>

</div>
</div>
</footer>


   </>
  )
}

export default Footer