import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { StoreContext } from '../../Context/StoreContext';

import './PlaceOrder.css';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
    
    const navigate = useNavigate();

    const { getTotalAmount, token, productList, cartItems, serverURL } = useContext(StoreContext);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        postCode: "",
        country: "",
        phone: ""
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const placeOrder = async (e) => {
        e.preventDefault();

        let orderItems = [];

        productList.map(item => {
            if(cartItems[item._id] > 0){
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo);
            }
        });
        

        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalAmount()
        }

        let response = await axios.post(`${serverURL}/api/order/place`, orderData, {headers: {token}});
    
        if(response.data.success){
            const { session_url } = response.data;
            window.location.replace(session_url);
        } else {
            alert(response.data.message);
        }
    };
    
    useEffect(() => {
        if(!token || getTotalAmount() === 0){
            navigate('/cart');
        }
    }, [token]);

    return (
        <section className='place-order-section'>
            <form onSubmit={placeOrder} className='place-order'>

                <div className='place-order-left'>
                    <h2 className='title'>Delivery Information</h2>
                    <div className='multi-fields'>
                        <input required onChange={onChangeHandler} name="firstName" value={data.firstName} type="text" placeholder='First Name' />
                        <input required onChange={onChangeHandler} name="lastName" value={data.lastName} type="text" placeholder='Last Name' />
                    </div>
                    <input required onChange={onChangeHandler} name="email" value={data.email} type="email" placeholder='Email Address' />
                    <input required onChange={onChangeHandler} name="street" value={data.street} type="text" placeholder='Street' />
                    <div className='multi-fields'>
                        <input required onChange={onChangeHandler} name="city" value={data.city} type="text" placeholder='City' />
                        <input required onChange={onChangeHandler} name="state" value={data.state} type="text" placeholder='State' />
                    </div>
                    <div className='multi-fields'>
                        <input required onChange={onChangeHandler} name="postCode" value={data.postCode} type="text" placeholder='Post Code' />
                        <input required onChange={onChangeHandler} name="country" value={data.country} type="text" placeholder='Country' />
                    </div>
                    <input required onChange={onChangeHandler} name="phone" value={data.phone} type="text" placeholder='Phone' />
                </div>

                <div className='place-order-right'>
                    <div className='cart-total'>
                        <h2>Cart Total</h2>
                        <div>
                            <div className='cart-total-details'>
                                <p>Subtotal</p>
                                <p>${getTotalAmount()}</p>
                            </div>
                            <hr />
                            <div className='cart-total-details'>
                                <p>Delivery Fee</p>
                                <p>Free</p>
                            </div> 
                            <hr />
                            <div className='cart-total-details'>
                                <b>Total</b>
                                <b>${getTotalAmount()}</b>
                            </div>
                        </div>
                        <button type='submit'>PROCCED TO PAYMENT</button> 
                    </div>
                </div>
            </form>
            <hr />
        </section>
    )
}

export default PlaceOrder