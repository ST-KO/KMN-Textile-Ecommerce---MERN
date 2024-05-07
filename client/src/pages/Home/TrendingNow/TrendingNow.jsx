import React, { useState } from 'react';
import trending from '../../../assets/trending';
import { FaStar } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

import './TrendingNow.css';
// import '../FeaturedProducts/Products/Products.css';

const TrendingNow = () => {
    
    const [itemCount, setItemCount] = useState(0);

    const itemIncrease = () => {
        setItemCount(prevCount => prevCount += 1);
    };
    
    const itemDecrease = () => {
        setItemCount(prevCount => prevCount -= 1);
    };

    const ShowTrendingProducts = () => {
        return(
            trending.map((item, index) => {
                return (
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
                            <div className="star">
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
        <section id="product1" className='section-p1 trending-now'>
            <h2>Trending Now</h2>
            <p>YOU DESERVE TO FEEL BEAUTIFUL</p>
            <div className='pro-container'>
                <ShowTrendingProducts />
            </div>
        </section>
    );
};

export default TrendingNow;