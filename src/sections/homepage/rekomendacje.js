import React from "react"
import styled from 'styled-components'

import Container from '../../components/Container'

import map_image from '../../assets/images/undraw_connected_world_wuay.svg';

const Wrapper = styled.div`
    background-color: #eef9f5;
    color: #517366;
    padding-top: 40px;
    padding-bottom: 100px;
    margin-top: -50px;
`

const Element = styled.div`
    background-color: #fff;
    color: #000;
    border-radius: 5px;
    padding: 45px;
    border: 1px solid rgb(14 144 94 / 22%);
`

const Marks = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1050px;
    margin: 20px auto 40px auto;
    flex-wrap: wrap;
`

const Mark = styled.div`
    display: inline-block;
    padding: 15px;
    margin-left: auto;
    margin-right: auto;
    color: #a4b5af;
`

const elements = () => {
  return [
        {
        "content" : "Mieliśmy straszny problem z wyróżnieniem nowego produktu. Kreatywne podejście do tematu chłopaków z Selleads sprawiło, że teraz naszego zestawu nie da się pomylić z żadnym z innym. A to wszystko za sprawą niewielkiego dodatku.",
        "size": "large-4 medium-12"
        },
        {
        "content" : "Świetnie przygotowane opisy sprawiły, że nasza oferta zaczęła sprzedawać się znacznie lepiej niż wcześniej. Zanotowaliśmy kilkuprocentowy wzrost konwersji. Przyjacielski kontakt i trafne wskazówki wpłynęły na to, że zdecydowaliśmy się na dłuższą współpracę - i działamy tak od 7 miesięcy :)",
        "size": "large-4 medium-12"
        },
        {
        "content" : "Do tej pory oferowaliśmy produkty tylko w Polsce, ale chcieliśmy spróbować naszych sił za granicą. Padło na Amazon w Niemczech, który okazał się strzałem w dziesiątkę. Powierzyliśmy ekipie z Selleads opiekę nad platformą, a zaoszczędzony czas możemy poświęcić na dalsze skalowanie naszej firmy.",
        "size": "large-4 medium-12"
        },
    ]
}

const Tabs = () => {
  return (
    elements().map((tab) => {

      return (
        
        <div className={`${tab.size ? tab.size : `medium-3`} _p3`}>
            <Element>
                <p>{tab.content}</p>
            </Element>
        </div>

      );

    })
  );
}

export default function Rekomendacje() {
  return (
    <>
    
    <Wrapper>
        <div className="container py0 px2">

            <div className="mt3 mb1 _p3">
                <h5>Rekomendacje</h5>
            </div>

            <div>
                <div className="g-x">
                
                <Tabs />

                </div>
            </div>

        </div>
      </Wrapper>
      <div className="container py0">
            <p className="mt2 lead text-center" style={{
                color: "#a4b5af"
            }}>Zaufali nam</p>
            <Marks>

                <Mark>
                    <h6>SlowDeco</h6>
                </Mark>
                <Mark>
                    <h6>Flumi</h6>
                </Mark>
                <Mark>
                    <h6>Solier</h6>
                </Mark>
                <Mark>
                    <h6>KatanaClan</h6>
                </Mark>
                <Mark>
                    <h6>Adamell</h6>
                </Mark>
                <Mark>
                    <h6>Charmings</h6>
                </Mark>

            </Marks>
        </div>
    </>
  )
}
