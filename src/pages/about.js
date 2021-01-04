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

            <div className="container">
                <div className="g-x fx icenter">
                    <div className="medium-5 small-12">
                        <p className="xlead mb1">Poznaj nas</p>
                        <p>Jesteśmy, aby pomóc w rozwoju twojego biznesu w sieci. 
                          Specjalizujemy się w serwisach aukcyjnych Amazon oraz Allegro zdobywając świat. 
                          W oparciu o nasze doświadczeniu pomożemy tobie od A do Z rozwinąć twoją markę. 
                          Jesteśmy młodym zespołem, który na bieżąco śledzi trendy i potrzeby użytkowników, aby pomóc Ci w wybiciu Twojej marki.
                        </p>
                    </div>
                    <div className="medium-6 small-12 offset-medium-1">
                        <img src={abountImage} />
                    </div>
                </div>
            </div>

      <Footer />
   
    </div>
  )
}
