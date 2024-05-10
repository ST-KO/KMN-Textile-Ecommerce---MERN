import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import LoginPopup from './components/LoginPopup/LoginPopup';
import VerifiedPayment from './pages/VerifiedPayment/VerifiedPayment';
import MyOrders from './pages/MyOrders/MyOrders';


const App = () => {
  
  // const [showLogin, setShowLogin] = useState(false);
  
  return (
    <BrowserRouter>
      {/* {showLogin ? <LoginPopup /> : <></>} */}
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />}  />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<VerifiedPayment />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App