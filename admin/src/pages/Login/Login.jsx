import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Login.css';

const Login = ({ serverURL, setToken }) => {
    
    const navigate = useNavigate();

    const [data, setData] = useState({
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

        try {
            const response = await axios.post(`${serverURL}api/admin/login`, data);

            if(response.data.success){
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                navigate('/dashboard');
            } else {
                alert("Login failed: " + response.data.message);
            }
        } catch (error) {
            console.error("Error loggin in:", error);
            alert("An error occurred. Please Try again.");
        }
    };
  
    return (
        <>
            <section className='navbar'>
                <div className='logo-container'>
                    <a className="logo" href="#">Khit Myat Noe</a>
                    <p>Admin Panel</p>
                </div>
            </section>
            
            <hr />

            <section className='login-form'>
                <div className='login-form-container'>
                    <form onSubmit={onSubmitHandler} className='form-container'>
                        <h1>Admin Login</h1>
                        <div className='form-container-input'>
                            <input 
                                type="email" 
                                placeholder='Email'
                                name='email'
                                onChange={onChangeHandler}
                                value={data.email}
                                className='input'
                                required
                            />
                            <input 
                                type="password" 
                                placeholder='Password'
                                name='password'
                                onChange={onChangeHandler}
                                value={data.password}
                                className='input'
                                required
                            />
                        </div>
                        <button type='submit' className='signin-btn'>
                            Sign In
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login;