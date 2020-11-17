import React from 'react'
import styled from 'styled-components';

import teamImage from '../../assets/images/icons8-team-yTwXpLO5HAA-unsplash.jpg';

const Column = styled.div`
    background: #e9ceb0 url(${teamImage}) center no-repeat;
    height: 65vh;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 10px 25px #a5753c59;
`

const ColumnTitle = styled.h5`
    max-width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: #fff;
`

const HeadLine = styled.div`
    max-width: 600px;
    margin: 0 auto;
`
const Number = styled.div`
    background: #d6eaea;
    padding: 20px;
    border-radius: 50%;
    font-weight: 700;
    font-size: 20px;
    color: #60a4ab;
    width: 65px;
    height: 65px;
    text-align: center;
`

const NumericContent = styled.div`
    width: calc(100% - 70px);
`



function Section3() {
    return (
        <>
            <div className="container mt4 mb5">
                <div className="g-x _mb8">
                    <div className="medium-8 px1">
                        <div className="_p6">
                            <h6 className="_mb5 pr8">
                                W USA odpowiada za 45% sprzedaży dokonanych w Internecie !
                            </h6>
                            <p>Ponad 100 milionów ludzi na ŚWIECIE posiada konto Prime, jest ich więcej niż osób bez Prime. Statystycznie jeden użytkownik ze statusem Prime wydaje ponad 1000$ rocznie. Amazon otworzył rynki w 6 europejskich krajach: Niemczech, Wielkiej Brytanii, Francji, Włoszech, Hiszpanii oraz Holandii. Dzięki takiej infrastrukturze sprzedając na platformie jesteśmy w stanie dotrzeć, aż do 28 krajów leżących w Europie.</p>
                        </div>
                    </div>
                </div>

                <Column className="fx iflex-end py2">
                    <ColumnTitle>Amazon to największa na świecie platforma sprzedażowa. </ColumnTitle>
                </Column>

                <div className="my8">
                    <div className="mb3">
                        <HeadLine className="text-center">
                            <h5>
                                Jeżeli jeszcze nie słyszałeś/aś o Amazonie oto kilka faktów, które powinny pomóc w podjęciu decyzji
                            </h5>
                        </HeadLine>
                    </div>
                    <div className="g-x">
                        
                        <div className="medium-6 _p6 fx icenter">
                            <Number>1</Number>
                            <NumericContent className="_px8">
                                <p>Konwersja na Amazonie jest prawie 10x wyższa niż w zwykłym sklepie internetowym</p>
                            </NumericContent>
                        </div>
                        
                        <div className="medium-6 _p6 fx icenter">
                            <Number>2</Number>
                            <NumericContent className="_px8">
                                <p>Co sekundę sprzedaje się 306 produktów</p>
                            </NumericContent>
                        </div>
                        
                        <div className="medium-6 _p6 fx icenter">
                            <Number>3</Number>
                            <NumericContent className="_px8">
                                <p>89% kupujących wybiera Amazon ponad inne platformy sprzedażowe</p>
                            </NumericContent>
                        </div>
                        
                        <div className="medium-6 _p6 fx icenter">
                            <Number>4</Number>
                            <NumericContent className="_px8">
                                <p>Amazon to doskonałe miejsce do budowania swojej marki produktowej</p>
                            </NumericContent>
                        </div>
                        
                        <div className="medium-6 _p6 fx icenter">
                            <Number>5</Number>
                            <NumericContent className="_px8">
                                <p>W modelu FBA cała logistyka jest prowadzona z komputera, a Tobie pozostaje się cieszyć z wyników</p>
                            </NumericContent>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Section3