import React, { useContext, useState } from 'react';
import axios from 'axios';
import { RxCross1 } from "react-icons/rx";
import { toast } from 'react-toastify';

import './DeletePopup.css';
import { assets } from '../../assets/assets';

const DeletePopup = ({ setShowDeletePopup, serverURL, fetchAllOrders, orders, orderId }) => {

    const order = orders.filter(order => order._id === orderId);
    console.log(order)

    const deleteButtonHandler = async () => {
    const response = await axios.delete(`${serverURL}api/order/delete`, {data: {orderId}});
    
    if(response.data.success){
      toast.success(response.data.message);
      await fetchAllOrders();
      setShowDeletePopup(false)
    } else {
      toast.error(response.data.message);
    }
  };
  
    return (
        <section className='delete-popup'>
            <div className='delete-popup-container'>
                <div className='delete-popup-title'>
                    <h2>Are you sure you want to delete this order?</h2>
                    <span className="icon" onClick={() => setShowDeletePopup(false)}><RxCross1 /></span>
                </div>
                <p>Order Status: {order[0].status}</p>
                <p>Order Id: {orderId}</p>
                <p>Customer Id: {order[0].userId}</p>
                <p>Customer Name: {order[0].address.firstName} {order[0].address.lastName}</p>
                <p>Email: {order[0].address.email}</p>
                <button onClick={() => deleteButtonHandler()}>DELETE</button>
            </div>
        </section>
    );
};

export default DeletePopup;