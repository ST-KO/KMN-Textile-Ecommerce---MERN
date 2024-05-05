import React from 'react';
import Products from './Products/Products';

const FeaturedProducts = () => {
  return (
    <section id='product1' className='section-p1'>
        <h2>Featured Products</h2>
        <p>Traditional Loom 'Chate Lone G' Collections. New Modern Design</p>
    
        <Products />
    </section>
  );
};

export default FeaturedProducts;