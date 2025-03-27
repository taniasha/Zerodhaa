import React from 'react';
import Hero from './Hero';
import Pricing from './Pricing';
import Education from './Education';
import Awards from './Awards';
import Stats from './Stats';

import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function HomePage() {
  return (
    <>
      <Hero/>
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
    </>
  )
}
