import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";

import './VerifiedPayment.css';

import { StoreContext } from '../../Context/StoreContext';


const VerifiedPayment = () => {
    
    const [searchParams, setSearchParams] = useSearchParams();

    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");

    const { serverURL } = useContext(StoreContext);
    const navigate = useNavigate();

    // const verifyPayment = async () => {
    //     const response = await axios.post(`${serverURL}/api/order/verify`, { success, orderId });

    //     if(response.data.success){
    //         navigate("/myorders");
    //     } else {
    //         navigate("/");
    //     }
    // }

    const verify = async () => {
        if(success === "true"){
            const response = await axios.patch(`${serverURL}/api/order/verify/success`, { orderId });
            
            if(response.data.success){
                navigate("/myorders");
            }
        } else {
            const response = await axios.delete(`${serverURL}/api/order/verify/fail`, { orderId });
            
            if(response.data.success){
                navigate("/");
            }
        }
    };

    useEffect(() => {
        // verifyPayment();
        verify();
    }, []);
  
    return (
        <section className='verify'>
            <div className='spinner'></div>
        </section >
    );
};

export default VerifiedPayment;