import React, { useContext, useState } from 'react';
import { StoreContext } from '../../../../Context/StoreContext';
import { Link } from 'react-router-dom'; 
import { FaStar } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import product_list  from '../../../../assets/data';

import './Products.css';

const Products = () => {
    
    const { serverURL, productList, cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    const ShowProducts = () => {
        return (
            productList.map((item, index) => {
                return(
                    <div key={index} className='pro'>
                        <div className='product-img-container'>
                            <img className='product-img' src={`${serverURL}/images/${item.image}`} alt="featured product" />
                            {
                                !cartItems[item._id] ?
                                <img 
                                    onClick={() => addToCart(item._id)}
                                    src="/image/add_icon_white.png" 
                                    alt="add icon"
                                    className='add' 
                                /> :
                                <div className='product-item-counter'>
                                    <img 
                                        onClick={() => removeFromCart(item._id)} 
                                        src="/image/remove_icon_red.png" 
                                        alt="remove icon" 
                                    />
                                    <p>{cartItems[item._id]}</p>
                                    <img 
                                        onClick={() => addToCart(item._id)}
                                        src="/image/add_icon_green.png" 
                                        alt="add icon" 
                                    />
                                </div>
                            }
                        </div>
                        <div className='description'>
                            <span>{item.brand}</span>
                            <h5>{item.name}</h5>
                            <div className='star'>
                                <FaStar className='icon'/>
                                <FaStar className='icon'/>
                                <FaStar className='icon'/>
                                <FaStar className='icon'/>
                                <FaStar className='icon'/>
                            </div>
                            <h4>{item.price} MMK</h4>
                        </div>
                    </div>
                );
            })
        );
    }
  
    return (
        <div className='pro-container'>
            <ShowProducts />
        </div>
    );
};

export default Products;