import React from 'react';
import { useNavigate } from 'react-router-dom';

import './CheckOut.css';

const CheckOut = ({getTotalAmount}) => {
  
    const navigate = useNavigate();
  
    return (
        <section id='cart-add' className='section-p1'>
            <div id='coupon'>
                <h3>Apply Coupon</h3>
                <div>
                    <input name="coupon" type="text" placeholder='Enter Your Coupon' />
                    <button className='normal'>Apply</button>
                </div>
            </div>

            <div id='subtotal'>
                <h3>Cart Total</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>${getTotalAmount}</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>$0</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>${getTotalAmount}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={() => navigate('/order')} className='normal'>PROCEED TO CHECKOUT</button>
            </div>
        </section>
    );
};

export default CheckOut;