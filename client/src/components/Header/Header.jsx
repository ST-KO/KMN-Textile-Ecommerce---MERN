import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";

import { StoreContext } from '../../Context/StoreContext';
import './Header.css';

const Header = ({ setShowLogin }) => {
    
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const { token, setToken, getTotalAmount } = useContext(StoreContext);

    const logOut = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

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
                <div className={getTotalAmount() > 0 ? 'dot' : ""}></div>
            </div>
            {
                !token ? 
                <button onClick={() => setShowLogin(true)}>Sign In</button> :
                <div className='navbar-profile'>
                    <CgProfile className='navbar-profile-icon' />
                    <ul className='nav-profile-dropdown'>
                        <li>
                            <SlHandbag className='dropdown-icon' />
                            <Link to="/myorders"><p>Orders</p></Link>
                        </li>
                        <hr />
                        <li onClick={logOut}>
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