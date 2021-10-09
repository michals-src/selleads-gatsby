import React from 'react'
import styled from 'styled-components';

import undraw_lightbulb_moment from '@images/undraw_lightbulb_moment_evxr.svg';
import undraw_Process_re from '@images/undraw_Process_re_gws7.svg';
import undraw_Working_oh83 from '@images/undraw_Working_oh83.svg';

import Navbar from '@sections/navbar'

const SVGWrapper = styled.div`
    width: 100%;
    height: 100%;

    & > img {
        width: 100%;
    }
`

const PathOne = styled.div`
    position: relative;
    width: 2px;
    height: 125px;
    background: #000;
    margin-left: auto;

    .reverse & {
        margin-right: auto;
        margin-left: 0;
    }

    &::before{
        content: '';
        width: 12px;
        height: 12px;
        border: 2px solid #000;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        top: -12px;
        transform: translateY(6px) translateX(-45%);  
    }

    &::after{
        content: "";
        position: absolute;
        bottom:-12px;
        right: -24px;
        z-index: 1;
        width: 24px;
        height: 24px;
        border-left: 2px solid #000;
        border-bottom: 2px solid #000;
        background: #fff;
        border-radius: 0 0 0 50%;
    }
    
    .reverse & {
        margin-right: auto;
        margin-left: 0;
    }

    .reverse &::after{
        border-left: 2px solid #fff;
        border-right: 2px solid #000;
        border-bottom: 2px solid #000;
        left: -26px;
        right: auto;
        border-radius: 0 0 50% 0;
    }

`

const PathTwoWrapper = styled.div`
    position: relative;
    height: 125px;
`

const PathTwo = styled.div`
    width: calc( 100% - 20px );
    height: 2px;
    background: #000;
    position: absolute;
    left: 10px;
    bottom: -12px;
`

const PathThree2 = styled.div`
    position: relative;
    margin-top: 147px;
    width: 2px;
    height: 100px;
    background: #000;
    margin-right: auto;

    &::before{
        content: '';
        width: 12px;
        height: 12px;
        border: 2px solid #000;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        bottom: -10px;
        transform: translateY(6px) translateX(-45%);  
    }

    &::after{
        content: "";
        position: absolute;
        top:-12px;
        left: -24px;
        z-index: 1;
        width: 24px;
        height: 24px;
        border-top: 2px solid #000;
        border-right: 2px solid #000;
        background: #fff;
        border-radius: 0  50% 0 0;
    }

    .reverse & {
        margin-left: auto;
        margin-right: 0;
    }

    .reverse &::after{
        border-right: 2px solid #fff;
        border-left: 2px solid #000;
        right: -26px;
        left: auto;
        border-radius: 50% 0 0 0;
    }

`

const PathWrapper = styled.div`
    margin-top: -45px;


    @media (max-width: 768px){
        & {
            opacity: 0;
            height: 100px;
        }
    }
`

function Section1() {
    return (
        <>
        
        <div className="py-14 bg-gradient-to-b from-gray-200 to-gray-white ">
        
        <Navbar />

        <div className="container mx-auto px-4 md:px-14">
            <div className="my-32 flex flex-row flex-nowrap items-center">
                <div className="w-4/12">
                    <img src={undraw_Process_re} />
                </div>
                <div className="w-8/12 flex flex-col justify-center pl-10 md:pl-16 lg:pl-32">
                    <h1 className="text-6xl font-bold flex px-16">Oferta Amazon.</h1>

                    <div className="flex flex-col mt-10">
                        <div className=" flex flex-row flex-nowrap px-16 py-9 border-b border-gray-300">
                            <h3 className="text-lg font-bold mr-8">1</h3>
                            <h1 className="text-2xl">Sprzedajesz i myślisz, aby otworzyć dodatkowy kanał sprzedaży?</h1>    
                        </div>
                        <div className=" flex flex-row flex-nowrap px-16 py-9 border-b border-gray-300">
                            <h3 className="text-lg font-bold mr-8">2</h3>
                            <h1 className="text-2xl">Masz pomysł na genialny produkt, a nie wiesz jak zacząć?</h1>    
                        </div>
                        <div className=" flex flex-row flex-nowrap px-16 py-9">
                            <h3 className="text-lg font-bold mr-8">3</h3>
                            <h1 className="text-2xl">A może już działasz na Amazonie?</h1>    
                        </div>
                    </div>
        

                </div>
            </div>
        </div>

        </div>
            
        <div className="container mx-auto px-4 md:px-14">
            <div className="flex flex-row">
                <div className="w-4/12 flex flex-row flex-nowrap p-14 bg-gray-100">
                    <h3 className="text-4xl font-bold mr-8">1</h3>
                    <h1 className="text-xl">Konwersja na Amazonie jest prawie 10x wyższa niż w zwykłym sklepie internetowym.</h1>    
                </div>
                <div className="w-4/12 flex flex-row flex-nowrap p-14 bg-gray-100 border-l-2 border-r-2 border-white">
                    <h3 className="text-4xl font-bold mr-8">2</h3>
                    <h1 className="text-xl">Co sekundę sprzedaje się 306 produktów.</h1>    
                </div>
                <div className="w-4/12 flex flex-row flex-nowrap p-14 bg-gray-100">
                    <h3 className="text-4xl font-bold mr-8">3</h3>
                    <h1 className="text-xl">89% kupujących wybiera Amazon ponad inne platformy sprzedażowe.</h1>    
                </div>
           </div>
        </div>
    
            
        <div className="container mx-auto px-4 md:px-14">
            <div className="flex flex-col">
                <div className="max-w-4xl my-24">
                    <h6 className="text-xl text-green-700 mb-6">Płyń z wiatrem w żaglach.</h6>  
                    <h1 className="text-6xl font-bold leading-tight">Pomagamy sprzedawcom wypłynąć na głębokie wody.</h1>    
                </div>
                <div className="w-full flex flex-row flex-wrap align-center pr-32 -mx-6">
                    <div className="w-6/12 flex flex-row flex-nowrap items-center py-5 px-6">
                        <span className="mr-10 text-green-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <h3 className="text-2xl">Wystawiamy oferty</h3>    
                    </div>
                    <div className="w-6/12 flex flex-row flex-nowrap items-center py-5 px-6">
                        <span className="mr-10 text-green-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <h3 className="text-2xl">Przeprowadzamy optymalizację listingu</h3>    
                    </div>
                    <div className="w-6/12 flex flex-row flex-nowrap items-center py-5 px-6">
                        <span className="mr-10 text-green-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                            </svg>
                        </span>
                        <h3 className="text-2xl">Zakładamy konto i wykonujemy jego weryfikację</h3>    
                    </div>
                    <div className="w-6/12 flex flex-row flex-nowrap items-center py-5 px-6">
                        <span className="mr-10 text-green-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <h3 className="text-2xl">Tworzymy, prowadzimy i optymalizujemy kampanię PPC</h3>    
                    </div>
                </div>
            </div>
        </div>


        <div className="container mx-auto px-4 md:px-14">
            <div className="my-32 flex flex-wrap flex-row items-center">
                <div className="w-6/12 pr-16">
                    <p className="text-lg mb-14">
                        Ponad 100 milionów ludzi na <span className="text-sm py-1 px-2 bg-gray-200">świecie</span> posiada konto Prime, jest ich więcej niż osób bez Prime. Statystycznie jeden użytkownik ze statusem Prime wydaje ponad 1000$ rocznie.
                    </p>
                    <div className="my-20">
                        <h6 className="text-md text-green-800">Rdźeń skuteczności</h6>
                        <h3 className="text-3xl font-bold my-3">
                            Amazon, doskonałe miejsce.
                        </h3>
                        <h6 className="text-xl">Buduj swoją markę produktową w odpowiedniem miejscu.</h6>
                    </div>
                    <div className="my-20">
                        <h6 className="text-md text-green-800">Rdzeń wydajności</h6>
                        <h3 className="text-3xl font-bold my-3">
                            W modelu FBA cała logistyka jest prowadzona z komputera.
                        </h3>
                        <h6 className="text-xl">Tobie pozostaje się cieszyć z wyników.</h6>
                    </div>
                </div>
                <div className="w-6/12">
                    <div className="overflow-hidden">
                        <img src={undraw_Working_oh83} />
                    </div>
                </div>
            </div>
        </div>


            {/* <div className="container px-4 md:px-14 mx-auto mt3 mb6">
                <div className="pt2 mt1">
                    <div className="g-x fx icenter">
                        <div className="medium-6 small-8 text-center">
                            <h2 className="text-5xl font-bold">
                                Sprzedajesz i myślisz, aby otworzyć dodatkowy kanał sprzedaży?
                            </h2>
                        </div>
                        <div className="medium-4 small-3 offset-medium-2 offset-small-1">
                            <SVGWrapper>
                                <img src={undraw_Process_re} />
                            </SVGWrapper>
                        </div>
                    </div>
                </div>

                <PathWrapper>
                    <div className="g-x">
                        <div className="medium-3 text-center">
                            <PathOne></PathOne>
                        </div>
                        <div className="medium-6 text-center">
                            <PathTwoWrapper>
                                <PathTwo></PathTwo>
                            </PathTwoWrapper>
                        </div>
                        <div className="medium-3 text-center">
                            <PathThree2></PathThree2>
                        </div>
                    </div>
                 </PathWrapper>

                <div>
                    <div className="g-x fx icenter">
                        <div className="medium-4 small-3">
                            <SVGWrapper>
                                <img src={undraw_lightbulb_moment} />
                            </SVGWrapper>
                        </div>
                        <div className="offset-medium-2 offset-small-1 medium-6 small-8 text-center">
                            <h4>Masz pomysł na genialny produkt, a nie wiesz jak zacząć?</h4>
                        </div>
                    </div>
                </div>

                <PathWrapper className="reverse">
                    <div className="g-x">
                        <div className="medium-3 text-center">
                            <PathThree2></PathThree2>
                        </div>
                        <div className="medium-6 text-center">
                            <PathTwoWrapper>
                                <PathTwo></PathTwo>
                            </PathTwoWrapper>
                        </div>
                        <div className="medium-3 text-center">
                            <PathOne></PathOne>
                        </div>
                    </div>
                 </PathWrapper>

                <div>
                    <div className="g-x fx icenter">
                        <div className=" medium-6 small-8 text-center">
                            <h4>A może już działasz na Amazonie?</h4>
                        </div>
                        <div className="medium-4 small-3 offset-medium-2 offset-small-1">
                            <SVGWrapper>
                                <img src={undraw_Working_oh83} />
                            </SVGWrapper>
                        </div>
                    </div>
                </div>


            </div>
         */}
        </>
    )
}

export default Section1