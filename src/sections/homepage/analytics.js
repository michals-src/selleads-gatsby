import React from "react"


import Container from '../../components/Container'
import Element from '../../components/Element'

import map_image from '../../assets/images/undraw_connected_world_wuay.svg';

const tabs = () => {
  return [
    {
      "title" : "Worldwide",
      "content" : "Amazon to największa na świecie platforma sprzedażowa. W USA odpowiada za 45% sprzedaży dokonanych w Internecie, to prawie, co drugi produkt zamówiony online!"
    },
    {
      "title" : "Prime",
      "content" : "Ponad 100 milionów ludzi na ŚWIECIE posiada konto Prime (jest ich więcej, niż osób bez Prime). Statystycznie jeden użytkownik ze statusem Prime wydaje ponad 1000$ rocznie."
    },
    {
      "title" : "FBA",
      "content" : "W tym modelu Amazon zajmuje się logistyką za Ciebie - dostarczając produkt NAWET w 24h. Cała sprzedaż prowadzona jest z komputera, a Tobie pozostaje się cieszyć z wyników.",

    },
    {
      "title" : "Cała Europa na wyciągnięcie ręki",
      "content" : "Amazon otworzył rynki w 6 europejskich krajach: Niemczech, Wielkiej Brytanii, Francji, Włoszech, Hiszpanii oraz Holandii (niedługo zawita do Polski). Dzięki takiej infrastrukturze, sprzedając na platformie jesteśmy w stanie dotrzeć, aż do 28 krajów leżących w Europie.",
      
    },
  ];
}

const Tabs = () => {
  return (
    tabs().map((tab) => {

      return (
        
        
        <div className={`${tab.size ? tab.size : `medium-6`} _px8`}>
          <div className="_mb-6">
            <h5>{tab.title}</h5>
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
            <div className="media_text">
              <div className="media_text__content">
                <div className="px2 pb2 pt4">
                  <div className="g-x">
                  
                    <Tabs />

                  </div>
                </div>
              </div>
              <div className="media_text__image">
                  <picture>
                    <img src={map_image} title="Bussines man" />
                  </picture>
              </div>
            </div>
        </Element>

      </div>
    
    </>
  )
}
