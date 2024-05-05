import React from 'react';
import { Link } from 'react-router-dom';

import './Banner.css';

const Banner = () => {
  return (
    <section id='banner' className='section-m1'>
        <h4>Tailoring Services</h4>
        <h2>Up to <span>50% Off</span> - All Products Bought From Us</h2>
        <Link to='/shop' className='link'>Explore Products</Link>
    </section>
  );
};

export default Banner;