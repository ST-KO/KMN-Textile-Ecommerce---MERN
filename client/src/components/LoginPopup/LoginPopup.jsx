import React, { useState } from 'react';

import './LoginPopup.css';

const LoginPopup = ({ setShowLogin }) => {
  
    const [currentState, setCurrentState] = useState("Sign In");
  
    return (
        <section className='login-popup'>
            <form className='login-popup-container'>
                
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src="image/cross_icon.png" alt="cross" />
                </div>
                
                <div className='login-popup-input'>
                    {
                        currentState === "Sign In" ?
                        <></> :
                        <input type="text" placeholder='Your Name' required />
                    }
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                
                <button>
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