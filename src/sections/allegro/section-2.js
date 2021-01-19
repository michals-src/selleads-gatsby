import React from 'react'
import styled from 'styled-components';
import {Link} from 'gatsby';

import undraw_stand_out_1oag from '../../assets/images/undraw_stand_out_1oag.svg';
import stones_background from '@images/stones-background.png';
import undraw_Data_points from '@images/undraw_Data_points_re_vkpq.svg';

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

const StonesBackground = styled.div`
    background: url(${stones_background}) center center no-repeat;
    background-size: auto 100%;
`

const TitleUnderline = styled.span`
    display: table;
    position: relative;
    margin-bottom: 8px;

    &:after {
        content: "";
        width: inherit;
        height: 12px;
        background-color: #ffe0008a;
        position: absolute;
        bottom: -2px;
        left: -5px;
        right: -5px;
        z-index: -1;
    }
`;

const UndrawDataPointsSvg = styled.div`
    width: 100%;
    height: 100%;

    & > img {
        width: 100%;
    }
`

function Section2() {
    return (
        <>
        <StonesBackground>
            <div className="container mt6">
                <div className="my2">
                    <ImageWrapper>
                        <img src={undraw_stand_out_1oag} />
                    </ImageWrapper>
                </div>
                <div>
                    <Width500Wrapper>
                        <LeadLarge>Pokażmy Twój produkt ludziom, <div>którzy go szukają.</div></LeadLarge>
                        <Link to="/contact"><button className="button warning _mt4">Milion wystarczy?</button></Link>
                    </Width500Wrapper>
                </div>
            </div>
        </StonesBackground>
        <div className="container">
            <div className="g-x my5">
                <div className="medium-5 small-12">
                    <h6>
                        <TitleUnderline className="_mb4">My działamy, a Ty monitorujesz</TitleUnderline>
                        rozwój swojej firmy.
                    </h6>
                    <p className="_my6">
                        Cotygodniowe raporty przedstawione w sposób zrozumiały dla każdego. CTR? CPC? Przestań zaprzątać sobie głowę specjalistycznymi wskaźnikami. Jasno przedstawimy Ci znaczenia każdego z nich, oraz to co oznacza dla Ciebie – a Ty zajmij się prowadzeniem swojej firmy.
                    </p>
                </div>
                <div className="offset-medium-1 medium-6 small-12 mt0:medium mt1">
                    <UndrawDataPointsSvg>
                        <img src={undraw_Data_points} />
                    </UndrawDataPointsSvg>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section2