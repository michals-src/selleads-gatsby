/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Helmet } from "react-helmet"

import '@styles/globals.css';
import '@styles/navigation.css';
import '@styles/cards.css';

import Navbar from '@sections/navbar'
import Footer from '@sections/footer';

import { Section1, Section2, Section3 } from '@sections/amazon';


export default function Home() {

  return (
    <div>

      <Helmet>
          <meta charSet="utf-8" />
          <title>Selleads - Oferta Amazon</title>
      </Helmet>

      {/* <Navbar /> */}

      <Section1 />
      {/* <Section2 />
      <Section3 /> */}

      <Footer />
   
    </div>
  )
}
