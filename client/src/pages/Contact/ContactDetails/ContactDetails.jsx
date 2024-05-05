import React from 'react';
import { FaRegMap } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GoClock } from "react-icons/go";

import './ContactDetails.css';

const ContactDetails = () => {
  return (
    <section id='contact-details' className='section-p1'>
        <div className='details'>
            <span>GET IN TOUCH</span>
            <h2>Visit One of Our Stores</h2>
            <h3>Flagship Store</h3>
            <div>
                <li>
                    <FaRegMap className='icon' />
                    <p>107 Anawrahta Road, Kyauktada Township, 
                        <br /><br />Yangon, Myanmar
                    </p>
                </li>
                <li>
                    <MdOutlinePhoneInTalk className='icon' />
                    <p>09 793 622 108</p>
                </li>
                <li>
                    <GoClock className='icon' />
                    <p>Monday to Sunday: 9.00am to 9.00pm</p>
                </li>
            </div>
        </div>

        <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15279.80410405047!2d96.14402586318758!3d16.779111988342414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec821e07a833%3A0xdde741e3cd511209!2sJunction%20City!5e0!3m2!1sen!2sau!4v1714216262098!5m2!1sen!2sau" 
            frameborder="0"
            width="600"
            height="450"
            allowFullScreen=""
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            >
            </iframe>
        </div>
    </section>
  );
};

export default ContactDetails;