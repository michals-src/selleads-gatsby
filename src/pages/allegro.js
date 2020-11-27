/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Helmet } from "react-helmet"

import '@styles/globals.css';
import '@styles/navigation.css';
import '@styles/cards.css';

import Navbar from './../sections/navbar'

import { Section1, Section2, Section3, Section4, Section5 } from '@sections/allegro';


export default function Home() {

  return (
    <div>

      <Helmet>
          <meta charSet="utf-8" />
          <title>Selleads - Oferta Allegro</title>
      </Helmet>
      
      <Navbar />

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
   
    </div>
  )
}
