import React from 'react';
import { useContext } from 'react';

import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import FeaturedProducts from '../../components/Products/Products';
import Newsletter from '../../components/Newsletter/Newsletter';
import Products from '../../components/Products/Products';
import { StoreContext } from '../../Context/StoreContext';

import './Shop.css';

const Shop = () => {
  
  const headerText = "Super Value Deals";
  const smallText = "Save More with Coupons & Up to 50% Off!"

  const { productList } = useContext(StoreContext);
  
  return (
    <>
      <HeaderBanner headerText={headerText} smallText={smallText} />
      <section id='product1'>
        {/* <FeaturedProducts /> */}
        <Products products={productList} />
      </section>
      <Newsletter />
    </>
  );
};

export default Shop;