import React from 'react'
import Footer from '../footer/footer'
import Navbar from '../navbar/Navbar'
import '../style/About.css'
import About from '../assets/allpicture/About.webp'
import About1 from '../assets/allpicture/About1.webp'

const AboutComponent = () => {
  return (
    <>
      <Navbar/>
<section className="About-img">
<img src={About} className="About-img"/>
<div className='P1'>
  <b><h1>About</h1></b>
  <p>We strive to offer every individual customer the best possible PC</p>
  <p>experience from start to finish no matter what PC they have</p>
  <p>purchased from us.</p>
  <b><h2>Who we are</h2></b>
  <p>iBUYPOWER is a PC company that builds award winning</p>
  <p>custom PCs for gamers, enthusiasts, and professionals.</p>
  </div>
  </section>
  <section className="About-img">
<img src={About1} className="About-img1"/>
<div className='P2'>
  <b><h1>LEGACY</h1></b>
  <p>Founded in 2020, the team sought out to continue building custom</p>
  <p>high-performance PCs and providing world-class support. With several </p>
  <p>years of experience in PC building, support, and service, iBUYPOWER is</p>
  <p>comprised of industry veterans that have helped grow the </p>
  <p>professionally-built PC market.</p>
  </div>
  </section>
  <Footer/>
    </>
  )
}

export default AboutComponent;