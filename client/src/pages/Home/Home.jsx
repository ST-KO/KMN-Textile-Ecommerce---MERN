import React from 'react';

import Hero from './Hero/Hero';
import StrengthCard from './StrengthCard/StrengthCard';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Banner from './Banner/Banner';
import SmallBanner from './SmallBanner/SmallBanner';
import Newsletter from '../../components/Newsletter/Newsletter';
import TrendingNow from './TrendingNow/TrendingNow';

const Home = () => {
  return (
    <>
      <Hero />
      <StrengthCard />
      <FeaturedProducts />
      <Banner />
      <TrendingNow />
      <SmallBanner />
      <Newsletter />
    </>
  )
}

export default Home