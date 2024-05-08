import React from 'react';
import { RxCrossCircled } from "react-icons/rx";

import './ProductList.css';
import { useContext } from 'react';
import { StoreContext } from '../../../Context/StoreContext';

const ProductList = () => {
  
    const { serverURL, productList } = useContext(StoreContext);
  
    return (
    <section id='cart' className='section-p1'>
        <table>
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody>
                {
                    productList.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td><RxCrossCircled className='icon' /></td>
                                <td><img src={`${serverURL}/images/${item.image}`} alt="product" /></td>
                                <td>{item.brand}</td>
                                <td>{item.price} MMK</td>
                                <td>1</td>
                                <td>{item.price} MMK</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </section>
  );
};

export default ProductList;