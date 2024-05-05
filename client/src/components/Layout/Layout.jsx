import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';

const Layout = () => {
  
  const [showLogin, setShowLogin] = useState(false);
  
  return (
    <>
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
        <Header setShowLogin={setShowLogin} />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  );
};

export default Layout;