import React from 'react'
import styled from 'styled-components';

import undraw_stand_out_1oag from '../../assets/images/undraw_stand_out_1oag.svg';

const ImageWrapper = styled.div`
    max-width: 650px;
    margin: 0 auto;

    & > img {
        width: 100%;
    }
`

const Width500Wrapper = styled.div`
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
`
const LeadLarge = styled.p`
    font-size: 1.6rem;
`


function Section2() {
    return (
        <>
            <div className="container my6">
                <div className="my2">
                    <ImageWrapper>
                        <img src={undraw_stand_out_1oag} />
                    </ImageWrapper>
                </div>
                <div>
                    <Width500Wrapper>
                        <LeadLarge>Pokażmy Twój produkt ludziom, <div>którzy go szukają</div></LeadLarge>
                        <button className="button _warning _mt4">Milion wystarczy ?</button>
                    </Width500Wrapper>
                </div>
            </div>
        </>
    )
}

export default Section2