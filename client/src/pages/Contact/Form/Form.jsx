import React from 'react';

import './Form.css';

const Form = () => {
  return (
    <section id='form-details'>
        <form action="">
            <span>LEAVE A MESSAGE</span>
            <h2>WE LOVE TO HEAR FROM YOU</h2>
            <input type="text" placeholder='Your Name' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Subject' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
            <button className='normal'>Submit</button>
        </form>
    </section>
  );
};

export default Form;