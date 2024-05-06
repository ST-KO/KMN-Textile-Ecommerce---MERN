import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';

import './Sidebar.css';

const Sidebar = () => {
  return (
    <section className='sidebar'>
        <div className='sidebar-options'>
            <NavLink to='/add' className='sidebar-option'>
                <img src={assets.add_icon} alt="add icon" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className='sidebar-option'>
                <img src={assets.order_icon} alt="list icon" />
                <p>Item List</p>
            </NavLink>
            <NavLink to='/orders' className='sidebar-option'>
                <img src={assets.order_icon} alt="order icon" />
                <p>Orders</p>
            </NavLink>
        </div>
    </section>
  );
};

export default Sidebar;