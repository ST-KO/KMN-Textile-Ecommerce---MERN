import React from 'react';
import { useContext } from 'react';
import Products from '../../../components/Products/Products';
import { StoreContext } from '../../../Context/StoreContext';

const FeaturedProducts = () => {
  
  const { productList } = useContext(StoreContext);

    const products = productList.filter(item => item.category === "Features");
  
  return (
    <section id='product1' className='section-p1'>
        <h2>Featured Products</h2>
        <p>Traditional Loom 'Chate Lone G' Collections. New Modern Design</p>
    
        <Products products={products} />
    </section>
  );
};

export default FeaturedProducts;