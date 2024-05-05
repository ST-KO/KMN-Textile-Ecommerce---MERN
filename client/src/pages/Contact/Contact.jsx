import React from 'react';

import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import ContactDetails from './ContactDetails/ContactDetails';
import Form from './Form/Form';
import Newsletter from '../../components/Newsletter/Newsletter';

const Contact = () => {
  
    const headerText = "Let's Talk";
    const smallText = "We Love To Hear More From You"

    return (
        <>
            <HeaderBanner headerText={headerText} smallText={smallText} />       
            <ContactDetails />
            <Form />
            <Newsletter />
        </>
    )
}

export default Contact