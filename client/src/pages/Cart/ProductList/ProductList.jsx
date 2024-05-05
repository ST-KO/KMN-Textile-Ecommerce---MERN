import React from 'react';
import { RxCrossCircled } from "react-icons/rx";

import './ProductList.css';

const ProductList = () => {
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
                <tr>
                    <td><RxCrossCircled className='icon' /></td>
                    <td><img src="image/products/p1.JPG" alt="product" /></td>
                    <td>Shwe Loom Chate</td>
                    <td>40,000 MMK</td>
                    <td>1</td>
                    <td>40,000 MMK</td>
                </tr>
            </tbody>
        </table>
    </section>
  );
};

export default ProductList;