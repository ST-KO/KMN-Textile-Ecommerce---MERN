import React from 'react';

import './WhoWeAre.css';

const WhoWeAre = () => {
  return (
    <section id="about-head" className='section-p1'>
        <img src="image/about/a6.jpg" alt="image" />
        <div className='paragraph'>
            <h2>Who We Are?</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat, minus? Non, velit? Impedit, fugit! 
                Saepe facilis nisi delectus voluptatum iusto sed consequuntur, 
                amet eveniet a sequi tempora iste nihil qui.
            </p>
            <br />
            <marquee loop="-1" scrollamount="5">
                <span>Best Traditional Textile Retailer</span>
            </marquee>
        </div>
    </section>
  );
};

export default WhoWeAre;