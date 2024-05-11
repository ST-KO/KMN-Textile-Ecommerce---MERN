import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {assets} from '../../assets/assets';

import './Orders.css';


const Orders = ({ serverURL }) => {
  
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(`${serverURL}api/order/list`);

    if(response.data.success){
      setOrders(response.data.data);
    } else {
      toast.error(response.data.error);
    }
  };

  const statusUpdateHandler = async (e, orderId) => {
    const response = await axios.patch(`${serverURL}api/order/status`, 
    {
      orderId,
      status: e.target.value
    });

    if(response.data.success){
      await fetchAllOrders();
    }
  };

  const deleteButtonHandler = () => {

  };

  useEffect(() => {
    fetchAllOrders();
  }, []);
  
  return (
    <section className='order add'>
      <h3>Order Page</h3>
      <div className='order-list'>
        {
          orders.map(order => (
            <div key={order._id} className='order-items'>
              
              <img src={assets.parcel_icon} alt="parcel icon" />

              <div>
                
                <p className='order-item-product'>
                  {
                    order.items.map((item, index) => {
                      if(index === order.items.length - 1){
                        return item.name + " x " + item.quantity
                      } else {
                        return item.name + " x " + item.quantity + ", "
                      }
                    })
                  }
                </p>

                <p className='order-item-name'>
                  {order.address.firstName + " " + order.address.lastName}
                </p>

                <div className='order-item-address'>
                  <p>{order.address.street + ", "}</p>
                  <p>{order.address.city + ", " + order.address.state + ", "
                  + order.address.country + ", " + order.address.postCode}</p>
                </div>

                <p className='order-item-phone'>Phone: {order.address.phone}</p>

              </div>
              
              <p>Items: {order.items.length}</p>
              <p>${order.amount}</p>
              
              <div className='order-items-sel-but'>
                <select onChange={(e) => statusUpdateHandler(e, order._id)} value={order.status}>
                  <option value="Order Processing">Order Processing</option>
                  <option value="Out For Delivery">Out For Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>

                <button 
                  onClick={() => console.log('clicked')} 
                  disabled={order.status === 'Delivered' ? false : true}
                  className={order.status === 'Delivered' ? "" : "disabled"}
                >DELETE</button>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Orders;