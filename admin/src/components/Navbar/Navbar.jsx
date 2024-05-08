import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Navbar.css';

const Navbar = ({ token, setToken }) => {
  
  const navigate = useNavigate();

  const signOutHandler = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  
  return (
    <section className='navbar'>
        <div className='logo-container'>
          <a className="logo" href="#">Khit Myat Noe</a>
          <p>Admin Panel</p>
        </div>
        <button onClick={signOutHandler}>
          {
            token ? "Sign Out" : "Sign In"
          }
        </button>
    </section>
  );
};

export default Navbar;