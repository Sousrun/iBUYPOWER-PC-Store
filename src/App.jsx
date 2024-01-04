// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import About from './component/About';
import Contact from './component/Contact';
import Homepage  from './component/Homepage';
import Login from './component/Login';
import Signup from './component/Signup';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart.jsx';
import { ShopContextProvider } from './context/shop-context';

function App() {
  
  return (
    <>
      <ShopContextProvider>

      <BrowserRouter>
      
      <Routes basename="/tothepoint_login">
      <Route path="/" element={<Homepage/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
      
      
      </BrowserRouter>

      </ShopContextProvider>
      
    </>
  )
}

export default App
