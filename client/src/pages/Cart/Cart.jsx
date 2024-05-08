import React, { useContext } from 'react';

import ProductList from './ProductList/ProductList';
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import CheckOut from './CheckOut/CheckOut';
import Newsletter from '../../components/Newsletter/Newsletter';
import { StoreContext } from '../../Context/StoreContext';

const Cart = () => {
  
    const headerText = "Check Out";
    const smallText = "Thank You For Shopping With Us"

    const { getTotalAmount } = useContext(StoreContext);

    return (
        <>
            <HeaderBanner headerText={headerText} smallText={smallText} />
            <ProductList />
            <CheckOut getTotalAmount={getTotalAmount()} />
            <Newsletter />
        </>
    );
};

export default Cart;