import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Layout';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';

const App = () => {
  
  const serverURL = 'http://localhost:4000/'
  // const serverURL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000/'
  
  return (
    <>
      <ToastContainer />
      <Navbar />
      <hr />
  
      <div className='app-content'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add serverURL={serverURL} />} />
          <Route path='/list' element={<List serverURL={serverURL} />} />
          <Route path='/orders' element={<Orders serverURL={serverURL} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;  