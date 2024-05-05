import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import './Header.css';

const Header = ({ setShowLogin }) => {
  
    const { pathname } = useLocation();

    return (
    <header id="header">
        <a id="logo" href="#">Khit Myat Noe</a>
        
        <nav id="navbar">
            <Link to="/" className={pathname === '/' ? 'active navlink' : 'navlink'}>
                Home
            </Link>
            <Link to="/shop" className={pathname === '/shop' ? 'active navlink' : 'navlink'}>
                Shop
            </Link>
            <Link to="/about" className={pathname === '/about' ? 'active navlink' : 'navlink'}>
                About
            </Link>
            <Link to="/contact" className={pathname === '/contact' ? 'active navlink' : 'navlink'}>
                Contact
            </Link>
            <div className='navbar-bag-icon'>
                <Link to="/cart" className={pathname === '/cart' ? 'active navlink' : 'navlink'}>
                    <FaShoppingBag />
                </Link>
                <div className='dot'></div>
            </div>      
            <button onClick={() => setShowLogin(true)}>Sign In</button>
        </nav>
    </header>
  );
};

export default Header;