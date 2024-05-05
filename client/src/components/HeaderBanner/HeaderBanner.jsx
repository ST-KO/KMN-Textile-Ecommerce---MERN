import React from 'react';

import './HeaderBanner.css';

const HeaderBanner = ({ headerText, smallText }) => {
  return (
    <section id="page-header">
        <h2>{headerText}</h2>
        <p>{smallText}</p>
    </section>
  );
};

export default HeaderBanner;