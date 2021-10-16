
// https://www.sketch.com/s/dd9e72f3-b0e2-4543-bbea-266a65c79ca4/a/GPw9PE

//https://garoaskincare.com/about
//https://isabelmoranta.com/
//https://yarogolyev.com/about
//https://www.awwwards.com/awwwards/collections/about-page/

/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Helmet } from "react-helmet"

import '@styles/global.css';
import '@styles/navigation.css';
import '@styles/cards.css';

import { Hero, Services, Analytics, Optimalization, Rekomendacje } from '@sections/homepage';
import Footer from '@sections/footer';

export default function Home() {

  return (
    <div>

      <Helmet>
          <meta charSet="utf-8" />
          <title>Selleads</title>
      </Helmet>

      <Hero />
      {/* <Services />*/}
      <Analytics />
      <Rekomendacje /> 
      {/* <Optimalization /> */}

      <Footer />

    </div>
  )
}
