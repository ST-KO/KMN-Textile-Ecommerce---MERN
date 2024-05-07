import React, { useEffect, useState } from 'react';
import Form from '../../components/Form/Form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Delete = ({ serverURL }) => {
    
    const navigate = useNavigate();
    const {id} = useParams();

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        brand: "",
        name: "",
        description: "",
        price: "",
        category: "Chate",
        image: false
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };


    const fetchList = async () => {
        const response = await axios.get(`${serverURL}api/product/list/${id}`);
    
        if(response.data.success){
            setData(response.data.data);
           
        } else {
            toast.error("Error");
        }
    };

    const removeList = async () => {
        // const response = await axios.delete(`${serverURL}api/product/remove/${id}`);
        axios.delete(`${serverURL}api/product/remove/${id}`)
            .then(res => {
                if(res.data.success){
                    setData({
                        brand: "",
                        name: "",
                        description: "",
                        price: "",
                        category: "Chate",
                        image: false
                    });
                    setImage(false);
                    toast.success(response.data.message);
                    navigate('/list');
                }
            })
            .catch(err => toast.error(err));
      
        
    
        // if(response.data.success){
        //   toast.success(response.data.message);
        //   navigate('/');
        // } else {
        //   toast.error("Error");
        // }
    };

    useEffect(() => {
        fetchList();
        
    }, []);

    return (
        <Form 
            image={`${serverURL}images/${data?.image}`} 
            setImage={setImage}
            onSubmitHandler={removeList}
            onChangeHandler={onChangeHandler}
            data={data} 
            component={'delete'}
        />


    );
};

export default Delete;