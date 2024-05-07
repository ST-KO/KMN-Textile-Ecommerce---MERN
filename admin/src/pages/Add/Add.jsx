import React from 'react';
import { assets } from '../../assets/assets';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import Form from '../../components/Form/Form';
import { useNavigate } from 'react-router-dom';

const Add = ({ serverURL }) => {
    
    const navigate = useNavigate();

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        brand: "",
        name: "",
        description: "",
        price: "",
        category: "Chate",
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("brand", data.brand);
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);

        const response = await axios.post(`${serverURL}api/product/create`, formData);
        
        if(response.data.success){
            
            setData({
                brand: "",
                name: "",
                description: "",
                price: "",
                category: "Chate",
            });
            setImage(false);

            toast.success(response.data.message);

            navigate('/list');
        } else {
            toast.error(response.data.message);
        }
    };
    return (
        // <section className='add'>
        //     <form className='flex-col' onSubmit={onSubmitHandler}>
                
        //         <div className="add-img-upload flex-col">
        //             <p>Upload Image</p>
        //             <label htmlFor="image">
        //                 <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="image upload" />
        //             </label>
        //             <input 
        //                 onChange={(e) => setImage(e.target.files[0])} 
        //                 type="file" 
        //                 id='image' hidden required 
        //             />
        //         </div>

        //         <div className='add-product-brand flex-col'>
        //             <p>Brand Name</p>
        //             <input 
        //                 onChange={onChangeHandler}
        //                 value={data.brand} 
        //                 type="text" 
        //                 name='brand' 
        //                 placeholder='Type Here'
        //             />
        //         </div>

        //         <div className='add-product-name flex-col'>
        //             <p>Product Name</p>
        //             <input 
        //                 onChange={onChangeHandler}
        //                 value={data.name}
        //                 type="text" 
        //                 name='name' 
        //                 placeholder='Type Here' 
        //                 required
        //             />
        //         </div>

        //         <div className='add-product-description flex-col'>
        //             <p>Product Description</p>
        //             <textarea 
        //                 onChange={onChangeHandler}
        //                 value={data.description}
        //                 name="description" 
        //                 rows="6" 
        //                 placeholder='Write Content Here'
        //             >    
        //             </textarea>
        //         </div>

        //         <div className="add-category-price">
        //             <div className='add-category flex-col'>
        //                 <p>Product Category</p>
        //                 <select onChange={onChangeHandler} name="category">
        //                     <option value="Chate">Chate</option>
        //                     <option value="Longyi">Longyi</option>
        //                 </select>
        //             </div>

        //             <div className='add-price flex-col'>
        //                 <p>Product Price</p>
        //                 <input 
        //                     onChange={onChangeHandler}
        //                     value={data.price}
        //                     type="number" 
        //                     name='price' 
        //                     placeholder='40000 MMk' 
        //                     required
        //                 />
        //             </div>
        //         </div>

        //         <button type='submit' className='add-btn'>ADD</button>

        //     </form>
        // </section>
        <Form 
            image={image} 
            onChangeHandler={onChangeHandler} 
            onSubmitHandler={onSubmitHandler}
            setImage={setImage}
            data={data} 
            buttonName={'ADD'}
        />
    );
};

export default Add;