// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Slide.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import predator from '../img/5c0cfd105decd46c5151dbff45d618b6.png';
import asus from '../img/Asus_logo.webp';
import HyperX from '../img/HyperX_Logo-smaller.png';
import Intel from '../img/logo-Intel.png';
import logo from '../img/logo.jpg';
import msi from '../img/msi1.jpg';
import msilogo from '../img/msi-logo-1.png';
import OIlogo from '../img/OI.jpg';
import AMD from '../img/AMD.png';
import Razer from '../img/razer.jpg';
import Logitech from '../img/R.jpg'

const Slide = () => {
    
        const setting = {
          dots: true,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: 'linear',
        };
    
        return (
          <div className="mainContainer">
            <Slider {...setting}>
                <div className="container">
                  <img src="https://www.amd.com/content/dam/code/images/header/amd-header-logo.svg" alt="AMD Logo" />
              </div>
              <div className="container">
                <img src= {predator} alt="Predator Logo" />
              </div>
              <div className="container">
                <img src={asus} alt="Asus Logo" />
              </div>
              <div className="container">
                <img src={HyperX} alt="HyperX Logo" />
              </div>
              <div className="container">
                <img src={Intel} alt="Intel" />
              </div>
              <div className="container">
                <img src={logo} alt="AMD Logo" />
              </div>
              <div className="container">
                <img src={msi} alt="msi" />
              </div>
              <div className="container">
                <img src={msilogo} alt="msilogo" />
              </div>
              <div className="container">
                <img src={OIlogo} alt="OIlogo" />
              </div>
              <div className="container">
                <img src={Logitech} alt="Logitech" />
              </div>
              <div className="container">
                <img src={AMD} alt="Alienware" />
              </div>
              <div className="container">
                <img src={Razer} alt="Razer" />
              </div>
            </Slider>
           
          </div>
        );
      
}

export default Slide;