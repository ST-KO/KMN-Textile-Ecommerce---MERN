import React from 'react';

import './SmallBanner.css';

const SmallBanner = () => {
  return (
    <section id="sm-banner" className='section-p1'>
        <div className='banner-box'>
            <h4>Crazy Deals</h4>
            <h2>Buy 2 Get 1 Free</h2>
            <h3>The best Traditional Textile is on sale at <span>Khit Myat Noe</span></h3>
            {/* <button className='white'>Learn More</button> */}
        </div>
    </section>
  );
};

export default SmallBanner;