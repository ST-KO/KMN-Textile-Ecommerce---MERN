import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Layout';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import Delete from './pages/Delete/Delete';
import Edit from './pages/Edit/Edit';
import Login from './pages/Login/Login';
import { useState } from 'react';

const App = () => {
  
  // const serverURL = 'http://localhost:4000/'
  const serverURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000' 
  
  const [token, setToken] = useState();

  useEffect(() => {
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"));
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login serverURL={serverURL} setToken={setToken} />} />
        {
          token && (
            <Route path="/dashboard" element={<Layout token={token} setToken={setToken} />} >
              <Route path='add' element={<Add serverURL={serverURL} />} />
              <Route path='list' element={<List serverURL={serverURL} />} />
              <Route path='list/delete/:id' element={<Delete serverURL={serverURL} />} />
              <Route path='list/edit/:id' element={<Edit serverURL={serverURL} />} />
              <Route path='orders' element={<Orders serverURL={serverURL} />} />
            </Route>
          )
        }
      </Routes>
    </>
  );
};

export default App;  