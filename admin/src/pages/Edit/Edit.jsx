import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import Form from '../../components/Form/Form';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = ({ serverURL }) => {
  
  const { id } = useParams();
  const navigate = useNavigate();

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    brand: "",
    name: "",
    description: "",
    price: "",
    category: "Chate",
    image: ""
  });

  console.log(data)

  const fetchProduct = async() => {
    const response = await axios.get(`${serverURL}api/product/list/${id}`);

    if(response.data.success){
      setData(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  const onChangeHandler = (e) =>{
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
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.patch(`${serverURL}api/product/edit/${id}`, formData);
    
    if(response.data.success){
     
      setData({
        brand: "",
        name: "",
        description: "",
        price: "",
        category: "Chate",
        image: ""
      });
      setImage(false);
      toast.success(response.data.message);
      navigate('/list');
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchProduct();
    
  }, []);
  
  return (
    <Form 
      image={image} 
      imageURL={`${serverURL}images/${data?.image}`}
      onChangeHandler={onChangeHandler} 
      onSubmitHandler={onSubmitHandler}
      setImage={setImage}
      data={data}
      buttonName={'EDIT'} 
    />
  );
};

export default Edit;