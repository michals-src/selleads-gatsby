import React from 'react'
import styled from 'styled-components';

import pexels_image_1 from '../../assets/images/pexels-vlada-karpovich-4050364.jpg';
import unformed_circle from '@images/unformed-circle.svg';

import pathOne from '@images/pathOne.svg';
import pathTwo from '@images/pathOne.png';

const SpaceItem = styled.div`
    height: 100%;
`

const UnformedCircleSvg = styled.div`
    background: url(${unformed_circle}) bottom center no-repeat;
    background-size: contain;

    & > img {
        border-radius: 20px;
    }
`

const PatOneSvg = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    padding-top: 65px;
    padding-bottom: 55px;

    & > img{
        height: 100%;
    }
`

const PathTwoSvg = styled.img`
    position: absolute;
    top: 65%;
    left: 30px;
    padding-right: 95px;
`

const PathOne = styled.div`
    position: relative;
    width: 2px;
    height: calc(100% + 100px);
    background: #000;
    border-radius: 15px;

    &:before{
        content: '';
        width: 12px;
        height: 12px;
        border: 2px solid #000;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        transform: translateY(-6px) translateX(-45%);
    }
`

const PathTwo = styled.div`
    position: relative;
    width: 2px;
    height: 55%;
    background: #000;
    border-radius: 15px 15px 0 0;
    z-index:2;

    &:before{
        content: '';
        width: 12px;
        height: 12px;
        border: 2px solid #000;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        transform: translateY(6px) translateX(-45%);
    }
`

const PathTwoKnee = styled.div`
    position: relative;
    z-index:1;
    width: 24px;
    height: 24px;
    border: 2px solid #000;
    background: #fff;
    border-radius: 50%;
    transform: translateY(-50%);

    &:before{
        content: '';
        position: absolute;
        top:-2px;
        left:-2px;
        width:24px;
        height:12px;
        background: #fff;
    }

    &:after{
        content: '';
        position: absolute;
        top:-2px;
        right:-2px;
        width:12px;
        height:24px;
        background: #fff;
    }
`

const PathThree = styled.div`
    position: absolute;
    top: 65%;
    left: 50px;
    width: 40%;
    height: 2px;
    background: #000;
    border-radius: 15px 0 0 15px;
    z-index:2;
`

const PathThreeKnee = styled.div`
    position: absolute;
    right: -12px;
    z-index:1;
    width: 24px;
    height: 24px;
    border: 2px solid #000;
    background: #fff;
    border-radius: 50%;

    &:before{
        content: '';
        position: absolute;
        bottom:-4px;
        left:-2px;
        width:24px;
        height:14px;
        background: #fff;
    }

    &:after{
        content: '';
        position: absolute;
        top:0;
        left:-4px;
        width:14px;
        height:24px;
        background: #fff;
    }
`

const PathThreeVertical = styled.div`
    width: 2px;
    height: 50px;
    background: #000;
    position: absolute;
    right: -2px;
    top: 9px;

    &::before{
        content: '';
        width: 12px;
        height: 12px;
        border: 2px solid #000;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        transform: translateY(6px) translateX(-45%);  
    }
`

function Section1() {
    return (
        <>
            <div className="_container mt2 mb6">

                <div className="g-x">
                    <div className="medium-6 pr2">
                        <SpaceItem className="fx cspace-between py1 pr1">
                            <h5 className="text-right">Dotrzyj do milionow potencjalnych klientów!</h5>
                       
                            <div className="g-x" >
                                {/* <div className="medium-1" style={{ position: 'relative' }}>
                                    <PatOneSvg><img src={pathOne} /></PatOneSvg>
                                </div> */}
                                <div className="medium-12">
                                    <div className="g-y">
                                        {/* <div className="medium-5 mt2 pb4">
                                            <div className="g-x">
                                                <div className="medium-1">
                                                    <PathOne />
                                                </div>
                                                <div className="medium-11">
                                                    <h6 className="_mb5">Copywriting i kreowanie najlepszych ofert w Twojej kategorii.</h6>
                                                    <p>
                                                        Zastanawiałeś się kiedyś, czym różnią się tysiące innych ofert od tej jednej, która zostawia z tyłu większość konkurentów?
                                                        Pokażemy Ci jak pisać oferty, które zainspirują Twoich klientów, a każdemu kto trafi na Twój produkt, serce zacznie bić szybciej.
                                                        Culpa magna dolor deserunt ut qui id. Eu ut minim adipisicing consectetur amet aute culpa nisi consectetur nulla in pariatur veniam. Ex ipsum fugiat eiusmod cillum do aliqua sint voluptate minim labore fugiat adipisicing elit sit. Fugiat aliquip consectetur et tempor irure ea irure. Dolor sit incididunt officia consectetur ut duis.
                                                    </p>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className="medium-12 mt2 pb4">
                                            <div className="g-x">
                                                <div className="medium-1">
                                                    <PathOne />
                                                </div>
                                                <div className="medium-11">
                                                    <h6 className="_mb5">Allegro Ads.</h6>
                                                    <p>
                                                        Zaopiekujemy się Twoją kampanią reklamową, tak aby nie przepalała budżetu, a jednocześnie docierała do jak największej liczby osób, którzy mogą być zainteresowani Twoim produktem.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="medium-12 mb2">
                                            <div className="g-x" style={{position: 'relative'}}>
                                                <div className="medium-12">
                                                    <div className="g-x">
                                                        <div className="medium-1">
                                                            <PathTwo />
                                                            <PathTwoKnee />
                                                        </div>
                                                        <div className="medium-11">
                                                            <h6 className="_mb5">Kompleksowa obsługa platformy.</h6>
                                                            <p>
                                                                Chcesz sprzedawać swoje produkty na Allegro, ale nie masz na to czasu? Zatrudnienie pracownika wiąże się z dużymi kosztami? Zleć to nam! Zajmiemy się obsługą Twojego konta i cyklicznym zwiększaniem sprzedaży, a Tobie pozostanie tylko realizowanie zamówień, które zaczną spływać faaalaaami.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="medium-12 mb2">
                                            <div className="g-x" style={{position: 'relative'}}>
                                                <div className="medium-5">
                                                    <div className="g-x">
                                                        <div className="medium-1">
                                                            <PathTwo />
                                                            <PathTwoKnee />
                                                        </div>
                                                        <div className="medium-11">
                                                            <h6 className="_mb5">Allegro Ads</h6>
                                                            <p>
                                                                Zaopiekujemy się Twoją kampanią reklamową, tak aby nie przepalała budżetu, a jednocześnie docierała do jak największej liczby osób, którzy mogą być zainteresowani Twoim produktem.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="medium-7" style={{ position: 'relative' }}>
                                                    <PathThree>
                                                        <PathThreeKnee>
                                                            <PathThreeVertical/>
                                                        </PathThreeKnee>
                                                    </PathThree>
                                                </div>
                                                
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div> {/*g-x */}

                        </SpaceItem>




                    </div>
                    <UnformedCircleSvg className="medium-6 px2 py1">
                        <img width="100%" height="800px" src={pexels_image_1} />
                    </UnformedCircleSvg>
                </div>


                {/* <div className="g-y _mt4">
                    <div className="medium-6 offset-medium-6">
                        <h6 className="_mb5">Kompleksowa obsługa platformy</h6>
                        <p>
                            Chcesz sprzedawać swoje produkty na Allegro, ale nie masz na to czasu? Zatrudnienie pracownika wiąże się z dużymi kosztami? Zleć to nam! Zajmiemy się obsługą Twojego konta i cyklicznym zwiększaniem sprzedaży, a Tobie pozostanie tylko realizowanie zamówień, które zaczną spływać faaalaaami.
                        </p>
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default Section1