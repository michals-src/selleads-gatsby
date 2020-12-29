import React from 'react'
import styled from 'styled-components';

import undraw_lightbulb_moment from '@images/undraw_lightbulb_moment_evxr.svg';
import undraw_Process_re from '@images/undraw_Process_re_gws7.svg';


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
            <div className="container mt3 mb6">
                <div className="pt2 mt1">
                    <div className="g-x fx icenter">
                        <div className="medium-6 small-8 text-center">
                            <h4>Sprzedajesz i myślisz, aby otworzyć dodatkowy kanał sprzedaży ?</h4>
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
                            <h4>Masz pomysł na genialny produkt, a nie wiesz jak zacząć ?</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1