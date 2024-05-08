import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Layout = ({ token, setToken }) => {
  return (
    <>
        <Navbar token={token} setToken={setToken} />
        <hr />
        <div className='app-content'>
            <Sidebar />
            <Outlet />
        </div>
    </>
  );
};

export default Layout;