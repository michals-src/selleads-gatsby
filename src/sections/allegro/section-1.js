import React from 'react'
import styled from 'styled-components';

import pexels_image_1 from '../../assets/images/pexels-vlada-karpovich-4050364.jpg';

const SpaceItem = styled.div`
    height: 100%;
`

function Section1() {
    return (
        <>
            <div className="_container mt2 mb6">

                <div className="g-x">
                    <div className="medium-6 pr2">
                        <SpaceItem className="fx cspace-between py1 pr1">
                            <h5 className="text-right">Dotrzyj do milionow potencjalnych klientów!</h5>
                            <div>
                                <h6 className="_mb5">Copywriting i kreowanie najlepszych ofert w Twojej kategorii.</h6>
                                <p>
                                Zastanawiałeś się kiedyś, czym różnią się tysiące innych ofert od tej jednej, która zostawia z tyłu większość konkurentów?
                                Pokażemy Ci jak pisać oferty, które zainspirują Twoich klientów, a każdemu kto trafi na Twój produkt, serce zacznie bić szybciej.
                                </p>
                            </div>
                        </SpaceItem>
                    </div>
                    <div className="medium-6">
                        <img width="100%" height="800px" src={pexels_image_1} />
                    </div>
                </div>
                <div className="g-x">
                    <div className="medium-6 my2">
                        <h6 className="_mb5">Allegro Ads</h6>
                        <p>
                            Zaopiekujemy się Twoją kampanią reklamową, tak aby nie przepalała budżetu, a jednocześnie docierała do jak największej liczby osób, którzy mogą być zainteresowani Twoim produktem.
                        </p>
                    </div>
                    <div className="medium-6 my2"></div>
                    <div className="medium-6 offset-medium-6">
                        <h6 className="_mb5">Kompleksowa obsługa platformy</h6>
                        <p>
                            Chcesz sprzedawać swoje produkty na Allegro, ale nie masz na to czasu? Zatrudnienie pracownika wiąże się z dużymi kosztami? Zleć to nam! Zajmiemy się obsługą Twojego konta i cyklicznym zwiększaniem sprzedaży, a Tobie pozostanie tylko realizowanie zamówień, które zaczną spływać faaalaaami.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section1