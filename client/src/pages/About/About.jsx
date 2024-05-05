import React from 'react';

import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import ComeVisitUs from './ComeVisitUs/ComeVisitUs';
import StrengthCard from '../Home/StrengthCard/StrengthCard';
import Newsletter from '../../components/Newsletter/Newsletter';

const About = () => {
  
    const headerText = "Know Us";
    const smallText = "We Are More Than Retailer"

    return (
        <>
            <HeaderBanner headerText={headerText} smallText={smallText} />
            <WhoWeAre />
            <ComeVisitUs />
            <StrengthCard />
            <Newsletter />
        </>
    );
};

export default About;