import React from 'react';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
  return (
    <>
        <Navbar />
        <hr />
        <Sidebar />
    </>
  );
};

export default Layout;