import React, { useContext, useState } from 'react';
import axios from 'axios';

import { StoreContext } from '../../Context/StoreContext';
import './LoginPopup.css';


const LoginPopup = ({ setShowLogin }) => {
    
    const { serverURL, setToken } = useContext(StoreContext);

    const [currentState, setCurrentState] = useState("Sign In");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
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

        let newServerURL = serverURL;
        if(currentState === 'Sign In') {
            newServerURL += "/api/user/login";
        } else {
            newServerURL += "/api/user/signup";
        }

        const response = await axios.post(newServerURL, data);

        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);

            setShowLogin(false);
        } else {
            alert(response.data.message);
        }
    } ;
  
    return (
        <section className='login-popup'>
            <form onSubmit={onSubmitHandler} className='login-popup-container'>
                
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src="image/cross_icon.png" alt="cross" />
                </div>
                
                <div className='login-popup-input'>
                    {
                        currentState === "Sign In" ?
                        <></> :
                        <input onChange={onChangeHandler} name="name" value={data.name} type="text" placeholder='Your Name' required />
                    }
                    <input onChange={onChangeHandler} name="email" value={data.email} type="email" placeholder='Your Email' required />
                    <input onChange={onChangeHandler} name='password' value={data.password} type="password" placeholder='Password' required />
                </div>
                
                <button type='submit'>
                    {
                        currentState === "Sign Up" ?
                        "Create Account" :
                        "Sign In"
                    }
                </button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use and privacy policy.</p>
                </div>
                
                {
                    currentState === "Sign In" ?
                    <p>Create a new account? 
                        <span onClick={() => setCurrentState("Sign Up")}> Click Here</span>
                    </p> :
                    <p>Already have an account? 
                        <span onClick={() => setCurrentState("Sign In")}> Click Here</span>
                    </p>
                }

            </form>
        </section>
    );
};

export default LoginPopup;