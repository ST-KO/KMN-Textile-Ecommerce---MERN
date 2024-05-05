import React from 'react';

import './StrengthCard.css';

const StrengthCard = () => {
  return (
    <section id='feature' className='section-p1'>
        <div className='fe-box'>
            <img src="image/features/f1.png" alt="" />
            <h6>Free Shipping</h6>
        </div>

        <div className='fe-box'>
            <img src="image/features/f2.png" alt="" />
            <h6>Online Order</h6>
        </div>
            
        <div className='fe-box'>
            <img src="image/features/f3.png" alt="" />
            <h6>Save Money</h6>
        </div>
            
        <div className='fe-box'>
            <img src="image/features/f4.png" alt="" />
            <h6>Promotions</h6>
        </div>
            
        <div className='fe-box'>
            <img src="image/features/f5.png" alt="" />
            <h6>Happy Sell</h6>
        </div>
            
        <div className='fe-box'>
            <img src="image/features/f6.png" alt="" />
            <h6>24/7 Support</h6>
        </div>
    </section>
  );
};

export default StrengthCard;