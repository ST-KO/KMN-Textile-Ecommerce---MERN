import React from 'react';
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import FeaturedProducts from '../Home/FeaturedProducts/Products/Products';
import Newsletter from '../../components/Newsletter/Newsletter';

import './Shop.css';

const Shop = () => {
  
  const headerText = "Super Value Deals";
  const smallText = "Save More with Coupons & Up to 50% Off!"
  
  return (
    <>
      <HeaderBanner headerText={headerText} smallText={smallText} />
      <section id='product1'>
        <FeaturedProducts />
      </section>
      <Newsletter />
    </>
  );
};

export default Shop;