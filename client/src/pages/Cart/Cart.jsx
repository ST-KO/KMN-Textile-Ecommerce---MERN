import React from 'react';

import ProductList from './ProductList/ProductList';
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import CheckOut from './CheckOut/CheckOut';
import Newsletter from '../../components/Newsletter/Newsletter';

const Cart = () => {
  
    const headerText = "Check Out";
    const smallText = "Thank You For Shopping With Us"

    return (
        <>
            <HeaderBanner headerText={headerText} smallText={smallText} />
            <ProductList />
            <CheckOut />
            <Newsletter />
        </>
    );
};

export default Cart;