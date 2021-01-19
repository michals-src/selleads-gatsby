/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Helmet } from "react-helmet"

import '@styles/globals.css';
import '@styles/navigation.css';
import '@styles/cards.css';

import Navbar from '@sections/navbar'
import Footer from '@sections/footer'

import abountImage from '@images/about.png';


export default function Home() {

  return (
    <div>

      <Helmet>
          <meta charSet="utf-8" />
          <title>Selleads - O nas</title>
      </Helmet>

      <Navbar />

            <div className="container mt4">
                <div className="g-x fx icenter">
                    <div className="medium-5 small-12">
                        <p className="xlead mb1" style={{fontWeight: 800}}>Poznaj nas</p>
                        <p>Jesteśmy, aby pomóc w rozwoju Twojego biznesu w sieci. Nic nadzwyczajnego, kilku młodych chłopaków, którzy przez parę lat doświadczeń, rozwijania własnych linii produktowych i dziesiątek godzin spędzonych na nauce systemów E-commerce chcą pomagać rozwijać się innym. Łatwo, naturalnie i z ludzkim podejściem do innych :)
                        </p>
                    </div>
                    <div className="medium-6 small-12 offset-medium-1">
                        <img src={abountImage} style={{ width: '100%' }}/>
                    </div>
                </div>
            </div>

      <Footer />
   
    </div>
  )
}
