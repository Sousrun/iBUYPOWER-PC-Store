
import Navbar from '../../navbar/Navbar'
// eslint-disable-next-line no-unused-vars
import Footer from '../../footer/footer'
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context.jsx";
import { PRODUCTS } from "../../assets/allpicture/products.js";
import { GAMINGPC } from "../../assets/allpicture/Gamingpc.js"
import { ACCESSORIES } from "../../assets/allpicture/Peripherals.js"
import { useNavigate } from "react-router-dom";

import "./cart.css";
import {CartItem} from './cart-item';


const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
  
    const navigate = useNavigate();
  return (
   <>
   <Navbar/>

   <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <div className="cart">
        {GAMINGPC.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <div className="cart">
        {ACCESSORIES.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
   


   {/* <Footer/> */}
   </>
  )
}

export default Cart