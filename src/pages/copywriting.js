/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Helmet } from "react-helmet";
import styled from 'styled-components';

import {Link} from "gatsby";

import '@styles/globals.css';
import '@styles/navigation.css';
import '@styles/cards.css';

import Navbar from '@sections/navbar'
import Footer from '@sections/footer'

import { Section1 } from '@sections/email';

const HeadText = styled.h4`
  width: auto;
  margin: 0 auto;
  display: table;
  position: relative;
  text-align: center;
  margin-bottom: 1rem;
`

const BlockWrapper1 = styled.div`
  padding: 25px;
  background: #fff;
  box-shadow: 0 15px 25px rgba(0,0,0,.1);
  border-radius: 10px;
`

const BlockIcon = styled.div`
  font-size: 5em;
  text-align: center;
`

export default function Home() {

  return (
    <div>

      <Helmet>
          <meta charSet="utf-8" />
          <title>Selleads - Oferta copywriting</title>
      </Helmet>
      
      <Navbar />

        <div className="container mt3 mb1">
          <div className="mt3 mb4:medium mb3">
          <div className="text-center">
                <HeadText>Twoje produkty lubią o sobie mówić.</HeadText>
                <p className="lead">Ale może mogą to zrobić lepiej niż dotychczas?</p>
              </div>
          </div>

          <div className="g-x">
            <div className="large-9 medium-12 _p8:medium _p4">
              <div className="g-x fx icenter">

                <div className="large-6 medium-9 mb2">
                      <div className="_mb5">
                        <p className="lead"> Opisy, nagłówki, kluczowe korzyści dla klienta.</p>
                      </div>
                      <p>
                        Oferty produktowe opowiadają historie. Jedne są pociągające, inne nudne jak flaki z olejem. Ludzie z reguły wolą kupować niż czuć, że ktoś im coś sprzedaje. Wspólnie stworzymy oferty, które będą powodowały szybsze bicie serca u każdego kto ją przeczyta.
                      </p>
                </div>

                <div className="large-6 medium-3 mb2">
                    <BlockIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-layout-text-sidebar-reverse" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M2 1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm12-1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                          <path fill-rule="evenodd" d="M5 15V1H4v14h1zm8-11.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
                        </svg>
                      </BlockIcon>
                </div>

                <div className="large-6 medium-9">
                <div className="_mb5">
                  <p className="lead">Inwestujemy w marketing, pozycjonowanie czy płatne współprace.</p>
                </div>
<p> To dobrze, bo w obecnych czasach bez inwestowania w reklamę trudno pokazać się światu. Ale czy zadbaliśmy, aby nasza oferta była naprawdę atrakcyjna? Ile warte są kliknięcia, które nie powodują zamknięcia transakcji?</p>
                </div>
                <div className="large-6 medium-3">
                  <BlockIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
</svg>
                  </BlockIcon>
                </div>
              </div>{/*g-x*/}
            </div>
            <div className="large-3 medium-12 mt1">
            <BlockWrapper1>
              <p className="mb1">Średnia konwersja dobrze zoptymalizowanego sklepu internetowego to około 2-3%. Czyli na 1000 odwiedzających Twoją witrynę, około 30 osób powinno dokonać zakupu. A co jeśli zmianą sposobu prezentowania oferty dałoby się to podwoić?</p>
              <div className="button primary text-center"><Link to="/contact">Sprawdźmy, jak możemy udoskonalić Twoje oferty.</Link></div>
              </BlockWrapper1>
            </div>
          </div>{/*g-x*/}

        </div>

      <Footer />
   
    </div>
  )
}
