// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../footer/footer.css'
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
         <b>Shop</b>
         <li>RDY Prebuilt Computers</li>
         <li>Customize Gaming PC</li>
         <li>Gaming PCs</li>
         <li>Gaming Laptops</li>
         <li>Gear Store</li>
         </ul>
     </div>

     <div className="center1">
         <h1></h1>
         <ul>
             <b><li> Company</li></b>
             <li> About Us</li>
             <li>Contact</li>
             <li> Help</li>
              <li>Customer reviews</li>
             <li>Shop</li> 
         </ul>
     </div>
     

     <div className="cen-ter">
         <ul>
            <b><li>Contact US</li></b>
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