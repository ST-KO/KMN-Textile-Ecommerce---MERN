import React from 'react';

import './List.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';

const List = ({ serverURL }) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${serverURL}api/product/list`);

    if(response.data.success){
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeList = async (foodId) => {
    const response = await axios.post(`${serverURL}api/product/remove`, {id: foodId});
  
    await fetchList();

    if(response.data.success){
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  
  return (
    <section className='list add flex-col'>
      <p>All Product List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Brand</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {
          list.map((item, index) => {
            return(
              <div key={index} className='list-table-format'>
                <img src={`${serverURL}images/${item?.image}`} alt="product" />
                <p>{item?.brand}</p>
                <p>{item?.name}</p>
                <p>{item?.category}</p>
                <p>{item?.price} MMK</p>
                <div className='cursor-container'>
                  <Link to={`edit/${item._id}`} className='cursor'>
                    <AiOutlineEdit />
                  </Link>
                  <Link to={`delete/${item._id}`} className='cursor'>
                    <MdOutlineDelete />
                  </Link>
                </div>
              </div>
            );
          })
        }

      </div>
    </section >
  );
};

export default List;