import React from 'react';
import { assets } from '../../assets/assets';

import './Form.css';

// Default value for functions that are not provided from parent components
const defaultFunction = () => {};

const Form = ({ 
    imageURL,
    image, 
    onChangeHandler = defaultFunction, 
    onSubmitHandler, 
    setImage = defaultFunction, 
    data,
    buttonName,
    title
}) => {
    
    return (
        <section className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <h2>{title}</h2>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        {
                            image ?
                            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="image upload" />:
                            <img src={imageURL ? imageURL : assets.upload_area} alt="product image" /> 
                    
                        }
                    </label>
                    <input 
                        onChange={(e) => setImage(e.target.files[0])} 
                        type="file" 
                        id='image' hidden  
                    />
                </div>

                <div className='add-product-brand flex-col'>
                    <p>Brand Name</p>
                    <input 
                        onChange={onChangeHandler}
                        value={data?.brand} 
                        type="text" 
                        name='brand' 
                        placeholder='Type Here'
                    />
                </div>

                <div className='add-product-name flex-col'>
                    <p>Product Name</p>
                    <input 
                        onChange={onChangeHandler}
                        value={data?.name}
                        type="text" 
                        name='name' 
                        placeholder='Type Here' 
                        required
                    />
                </div>

                <div className='add-product-description flex-col'>
                    <p>Product Description</p>
                    <textarea 
                        onChange={onChangeHandler}
                        value={data?.description}
                        name="description" 
                        rows="6" 
                        placeholder='Write Content Here'
                    >    
                    </textarea>
                </div>

                <div className="add-category-price">
                    <div className='add-category flex-col'>
                        <p>Product Category</p>
                        <select onChange={onChangeHandler} name="category" value={data.category}>
                            <option value="Normal">Normal</option>
                            <option value="Trending">Trending</option>
                            <option value="Features">Features</option>
                        </select>
                    </div>

                    <div className='add-price flex-col'>
                        <p>Product Price</p>
                        <input 
                            onChange={onChangeHandler}
                            value={data?.price}
                            type="number" 
                            name='price' 
                            placeholder='40000 MMk' 
                            required
                        />
                    </div>
                </div>

                <button type='submit' className='add-btn'>
                    {buttonName}
                </button>

            </form>
        </section>
    );
};

export default Form;