/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Helmet } from "react-helmet"

import '../styles/globals.css';
import '../styles/navigation.css';
import '../styles/cards.css';

import { Hero, Services, Analytics, Optimalization } from '@sections/homepage';
import Footer from '@sections/footer';

export default function Home() {

  const p = Array(9).fill('');
  const h = Array(5).fill(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

  return (
    <div>

      <Helmet>
          <meta charSet="utf-8" />
          <title>Selleads</title>
      </Helmet>

      <Hero />
      <Services />
      <Analytics />
      <Optimalization />

      <Footer />

    </div>
  )
}
