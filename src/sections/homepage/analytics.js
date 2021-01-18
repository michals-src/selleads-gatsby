import React from "react"


import Container from '../../components/Container'
import Element from '../../components/Element'

import map_image from '../../assets/images/undraw_connected_world_wuay.svg';

const tabs = () => {
  return [
    // Amazon
    {
      "title" : "Worldwide.",
      "content" : "Amazon to największa na świecie platforma sprzedażowa. W USA odpowiada za 45% sprzedaży dokonanych w Internecie.",
      "size": "medium-3 small-12"
    },
    {
      "title" : "Prime.",
      "content" : "Ponad 100 milionów ludzi na świecie posiada konto Prime, jest ich więcej, niż osób bez Prime.",
      "size": "medium-3 small-12"
    },
    {
      "title" : "Cała Europa na wyciągnięcie ręki.",
      "content" : "Amazon otworzył rynki w 6 europejskich krajach Niemczech, Wielkiej Brytanii, Francji, Włoszech, Hiszpanii oraz Holandii. Dzięki takiej infrastrukturze, sprzedając na platformie jesteśmy w stanie dotrzeć, aż do 28 krajów leżących w Europie.",
      "size": "medium-6 small-12"
    },

    //Allegro
    {
      "title" : "Potencjał jest w Polsce.",
      "content" : "W 2020 roku liczba użytkowników wyniosła blisko 17,58 mln osób, to wzrost prawie o 960,6 tys. użytkowników w porównaniu z ubiegłym rokiem.",
      "size": "medium-10 small-12"
    },
    {
      "title" : "Widoczność obowiązkowa.",
      "content" : "Poza doskonałym kanałem sprzedaży jakim jest Allegro, daje Ci ono możliwość pokazania Twoich ofert klientom. Sama widoczność Twoich ofert podświadomie zapada w pamięć potencjalnym kupującym, a ich więź z Twoją marką się zawęża. Dobrze przygotowana oferta potrafi zamknąć sprzedaż już na tym etapie. Może wspólnie spróbujemy ją przygotować?",
      "size": "medium-6 small-12"
    },
    {
      "title" : " Smart! nabiera rozpędu.",
      "content" : "Sprzedawcy, którzy udostępnili Allegro Smart! w swoich ofertach, odnotowali wzrost liczby transakcji o 37 proc. Platforma Allegro chce w tym roku zainwestować głównie w rozwój Allegro Smart! i usprawnienie dostaw. Na ten cel ma zostać przeznaczone większość z kwoty 1 mld zł zaplanowanych na inwestycje w 2020 roku.",
      "size": "medium-6 small-12"
    },
  ];
}

const Tabs = () => {
  return (
    tabs().map((tab) => {

      return (
        
        
        <div className={`${tab.size ? tab.size : `medium-3`} _px8 mb2`}>
          <div className="_mb6">
            <h6>{tab.title}</h6>
          </div>
          <p>{tab.content}</p>
        </div>

      );

    })
  );
}

export default function Analytics() {
  return (
    <>
    
    <div className="container py0">
      
      <Element >
            <div>
              <div className="px1 pb2 pt4">
                <div className="g-x">
                
                  <Tabs />

                </div>
              </div>
            </div>
        </Element>

      </div>
    
    </>
  )
}
