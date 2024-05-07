import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";

import { StoreContext } from '../../Context/StoreContext';
import './Header.css';

const Header = ({ setShowLogin }) => {
  
    const { pathname } = useLocation();

    const { token, setToken } = useContext(StoreContext);

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
            {
                !token ? 
                <button onClick={() => setShowLogin(true)}>Sign In</button> :
                <div className='navbar-profile'>
                    <CgProfile className='navbar-profile-icon' />
                    <ul className='nav-profile-dropdown'>
                        <li>
                            <SlHandbag className='dropdown-icon' />
                            <p>Orders</p>
                        </li>
                        <hr />
                        <li>
                            <LuLogOut className='dropdown-icon' /> 
                            <p>Logout</p>
                        </li>
                    </ul>
                </div>
            }      
            
        </nav>
    </header>
  );
};

export default Header;