// import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link,NavLink } from "react-router-dom";
import '../style/home.css'
// eslint-disable-next-line no-unused-vars
import {React,useRef} from 'react';
import homeimage from '../assets/allpicture/home_img.webp'


//import image1 from '../assets/image-home-sreen/image1.jpg';
//import image2 from '../assets/image-home-sreen/image2.jpg';
//import image3 from '../assets/image-home-sreen/image3.jpg';
//import image4 from '../assets/image-home-sreen/image4.jpg';
//import image5 from '../assets/image-home-sreen/image5.jpg';
//import image6 from '../assets/image-home-sreen/image6.jpg';
//import image7 from '../assets/image-home-sreen/image7.jpg';
//import image8 from '../assets/image-home-sreen/image8.jpg';
//import image9 from '../assets/image-home-sreen/image9.jpg';
//import image10 from '../assets/image-home-sreen/image10.avif';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";



 const Homepage = () => {

  return (
   <>
    <Navbar/>
    <div className="slide-image"></div>
    <section className="Home-image">
        
        <img src={homeimage} className="homeimage"/>
        <div className="home">
            <div className="content">
                <h3><b>BUILT DIFFERENT</b></h3>
                <h4>BUILT FOR CREATORS</h4>
                <h5>Work Smarter and Better With iBUYPOWER</h5>      
            </div>
        <div className="slide-image">
        </div>
        </div>   
    </section>
    <Footer/>
   </>
  )
}
export default Homepage;