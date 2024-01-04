// eslint-disable-next-line no-unused-vars
import React from 'react'
import './shop.css'
import Navbar from '../../navbar/Navbar'
import {Product} from './product'

import { PRODUCTS } from "../../assets/allpicture/products";
import { GAMINGPC } from "../../assets/allpicture/Gamingpc"
import { ACCESSORIES } from "../../assets/allpicture/Peripherals"
import Slide from '../../assets/slideimage/Slide';
import Footer from '../../footer/footer';

const Shop = () => {
  return (
   <>
   <Navbar/>
   <Slide/>
   <div className="shop">
      <div className="shopTitle">
        <h1>GAMING LAPTOPS</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <div className="shopTitle">
        <h1>GAMINGPC</h1>
      </div>

      <div className="products">
        {GAMINGPC.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <div className="shopTitle">
        <h1>ACCESSORIES</h1>
      </div>

      <div className="products">
        {ACCESSORIES.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
            <Footer/>
   </>
  )
}

export default Shop