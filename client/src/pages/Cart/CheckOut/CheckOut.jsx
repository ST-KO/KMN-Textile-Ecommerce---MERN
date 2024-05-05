import React from 'react';

import './CheckOut.css';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  
    const navigate = useNavigate();
  
    return (
        <section id='cart-add' className='section-p1'>
            <div id='coupon'>
                <h3>Apply Coupon</h3>
                <div>
                    <input type="text" placeholder='Enter Your Coupon' />
                    <button className='normal'>Apply</button>
                </div>
            </div>

            <div id='subtotal'>
                <h3>Cart Total</h3>
                <table>
                    <tr>
                        <td>Cart Subtotal</td>
                        <td>80,000 MMK</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>80,000 MMK</td>
                    </tr>
                </table>
                <button onClick={() => navigate('/order')} className='normal'>PROCEED TO CHECKOUT</button>
            </div>
        </section>
    );
};

export default CheckOut;