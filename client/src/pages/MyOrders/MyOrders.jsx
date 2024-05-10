import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';

import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';

const MyOrders = () => {
    
    const { serverURL, token } = useContext(StoreContext);

    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.get(`${serverURL}/api/order/userorders`, {headers: {token}});
        
        if(response.data.success){
            setData(response.data.data);
        }
    };

    const trackOrderButtonHandler = () => {
        fetchOrders();
    };

    useEffect(() => {
        if(token){
            fetchOrders();
        }
    }, [token]);
  
    return (
        <section className='my-orders'>
            <h2>My Orders</h2>
            <div className='container'>
                {
                    data.map(order => {
                        return (
                            <div key={order._id} className='my-orders-order'>
                                <img src="/image/parcel_icon.png" alt="parcel icon" />
                                <div className='my-orders-order-name'>
                                    {/* <p>
                                        {order.items.map((item, index) => 
                                        {
                                            if(index === order.items.length -1){
                                                return (item.name + " x " + item.quantity)
                                            } else {
                                                return (item.name + " x " + item.quantity) + ", "
                                            }
                                        })}
                                    </p> */}
                                    {order.items.map((item, index) => 
                                        {
                                            return (
                                                <p key={item._id}>{item.name} x {item.quantity}</p>
                                            )
                                    })}
                                </div>
                                <p>{order.amount}.00 AUD</p>
                                <p>Total Items: {order.items.length}</p>
                                <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                                <button onClick={trackOrderButtonHandler}>Update Status</button>
                            </div>
                        );
                    })
                }
            </div>
        </section >
    );
};

export default MyOrders;