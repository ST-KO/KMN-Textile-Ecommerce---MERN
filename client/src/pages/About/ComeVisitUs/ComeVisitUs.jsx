import React from 'react';

import './ComeVisitUs.css';

const ComeVisitUs = () => {
  return (
    <section id='about-app' className='section-p1'>
        <h1>Come Visit Us</h1>
        <div className='video'>
            <video autoPlay muted loop src="image/about/v1.mp4"></video>
        </div>
    </section>
  );
};

export default ComeVisitUs;