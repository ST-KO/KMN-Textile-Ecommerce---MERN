import React, { useContext, useState } from 'react';
import { StoreContext } from '../../../../Context/StoreContext';
import { Link } from 'react-router-dom'; 
import { FaStar } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import product_list  from '../../../../assets/data';

import './Products.css';

const Products = () => {
    
    // const {productList} = useContext(StoreContext);
    // console.log(product_list)
    const [itemCount, setItemCount] = useState(0);

    const itemIncrease = () => {
        setItemCount(prevCount => prevCount += 1);
    };
    
    const itemDecrease = () => {
        setItemCount(prevCount => prevCount -= 1);
    };

    const ShowProducts = () => {
        return (
            product_list.map((item, index) => {
                return(
                    <div key={index} className='pro'>
                        <div className='product-img-container'>
                            <img className='product-img' src={item.image} alt="featured product" />
                            {
                                !itemCount ?
                                <img 
                                    onClick={itemIncrease}
                                    src="/public/image/add_icon_white.png" 
                                    alt="add icon"
                                    className='add' 
                                /> :
                                <div className='product-item-counter'>
                                    <img 
                                        onClick={itemDecrease} 
                                        src="/public/image/remove_icon_red.png" 
                                        alt="remove icon" 
                                    />
                                    <p>{itemCount}</p>
                                    <img 
                                        onClick={itemIncrease}
                                        src="/public/image/add_icon_green.png" 
                                        alt="add icon" 
                                    />
                                </div>
                            }
                        </div>
                        <div className='description'>
                            <span>Shwe Loom Late Pyar</span>
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