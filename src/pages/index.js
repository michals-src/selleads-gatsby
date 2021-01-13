/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Helmet } from "react-helmet"

// import '../styles/globals.css';
import '@styles/globals.css';
import '@styles/navigation.css';
import '@styles/cards.css';

import { Hero, Services, Analytics, Optimalization } from '@sections/homepage';
import Footer from '@sections/footer';

export default function Home() {

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
