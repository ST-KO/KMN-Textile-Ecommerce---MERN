import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';
import { BsArrowLeft } from 'react-icons/bs';

const Delete = ({ serverURL }) => {
    
    const navigate = useNavigate();
    const {id} = useParams();

    const [data, setData] = useState({
        brand: "",
        name: "",
        description: "",
        price: "",
        category: "Chate",
        image: ""
    });


    const fetchList = async () => {
        const response = await axios.get(`${serverURL}api/product/list/${id}`);
    
        if(response.data.success){
            setData(response.data.data);
           
        } else {
            toast.error("Error");
        }
    };

    const onSubmitHandler = async () => {
        const response = await axios.delete(`${serverURL}api/product/remove/${id}`);
      
        navigate('/dashboard/list');
    
        if(response.data.success){
            
            setData({
                brand: "",
                name: "",
                description: "",
                price: "",
                category: "Chate",
                image: ""
            });
            toast.success(response.data.message);
         
        } else {
          toast.error("Error");
        }
    };

    useEffect(() => {
        fetchList();
        
    }, []);

    return (
        <section className='add'>
            <form className='flex-col'>
                <Link to="/dashboard/list" className='login_back_icons'>
                        <BsArrowLeft/>
                        <h4>Back to Product List</h4>
                </Link>
                <h2>Are You Sure You Want To Delete This?</h2>
                <div className="add-img-upload flex-col">
                    <p>Uploaded Image</p>
                    <label htmlFor="image">
                        <img src={data?.image ? `${serverURL}images/${data?.image}` : assets.upload_area} alt="image" />
                    </label>
                </div>
                <div className='add-product-name flex-col'>
                    <p>Product Name</p>
                    <input value={data?.name} type="text" name='name' placeholder='Type here' readOnly/>
                </div>
                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea value={data?.description} name="description" rows="6" placeholder='Write content here' readOnly></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product Category</p>
                        <input value={data?.category} type="text" readOnly />
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product Price</p>
                        <input value={data?.price} type="number" name='price' placeholder='$20' readOnly/>
                    </div>
                </div>
                <button  onClick={onSubmitHandler} type='button' className='add-btn'>DELETE</button>
            </form>
        </section>


    );
};

export default Delete;