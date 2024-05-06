import React from 'react';
import { assets } from '../../assets/assets'

import './Navbar.css';

const Navbar = () => {
  return (
    <section className='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        <img className='profile' src={assets.profile_image} alt="" />
    </section>
  );
};

export default Navbar;