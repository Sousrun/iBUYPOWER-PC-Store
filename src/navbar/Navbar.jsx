// import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
//import { FaHome } from "react-icons/fa";
import logo from '../assets/allpicture/Logo.png';
import { TiShoppingCart } from "react-icons/ti";
//import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <> 
        <header>
            <div className="bar">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="search-bar">
                <form >
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit">{<IoIosSearch/>}</button>
                </form  >
          </div>
       </div>
    </header>
<section >
  <div className="nav-bar">
    <div className="sub-nav-bar">
        <div className="left">
          <ul>
          <Link to="/"><li> Home </li></Link>
          </ul>
        </div>
        <div className="center">
          <ul>
            <Link to="/shop"> <li> Shop</li></Link>
            <Link to="/about"><li> About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
          </ul>
        </div>
        <div className="right">
            <ul>
                <Link to="/cart"> <li> <TiShoppingCart size={42}/> </li></Link>
                <Link to="/login"><li>Login</li></Link>
            </ul>
   
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Navbar
