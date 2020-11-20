/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

import '@styles/globals.css';
import '@styles/navigation.css';
import '@styles/cards.css';

import Navbar from './../sections/navbar'

import { Section1, Section2, Section3, Section4, Section5 } from '@sections/allegro';


export default function Home() {

  return (
    <div>

      <Navbar />

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
   
    </div>
  )
}
