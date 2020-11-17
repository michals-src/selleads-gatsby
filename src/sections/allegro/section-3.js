import React from 'react'
import styled from 'styled-components';

import pexels_fauxels_3182811 from '@images/pexels-fauxels-3182811.png';

const TitleUnderline = styled.span`
    display: table;
    position: relative;
    margin-bottom: 8px;
    z-index: 1;

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

const MediaText__Wrapper = styled.div`
    display: flex;
    align-items: center;
`
const MediaText__Content = styled.div`
    position: relative;
    z-index: 1;
    background-color: #e8edf1;
    flex: 0 0 auto;
    width: 60%;
    position: relative;
    color: #fff;
    color: #000;
    border-radius: 15px;

    &::before{
        content: "";
        width: 15%;
        height: 100%;
        background: inherit;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        transform: translateX(100%);
    }

    .reverse > &::before{
        content: "";
        width: 15%;
        height: 100%;
        background: inherit;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
        transform: translateX(100%);
    }
`

const MediaText__Object = styled.div`
    position: relative;
    z-index: 2;
    width: 40%;
    flex: 0 0 auto;
    margin-right: auto;
    margin-left: -25px;

    & > img {
        width: 100%;
    }

    .reverse > &,
    & > picture{
        margin-left: auto;
        margin-right: -25px;
    }
`

const PexelsFauxelsImage = styled.picture`
    width: 400px;
    display: block;

    & > img{
        width: 100%;
    }
`

function Section3() {
    return (
        <>
            <div className="_container">
                <MediaText__Wrapper className="reverse">

                <MediaText__Object>
                    <PexelsFauxelsImage>
                        <img src={pexels_fauxels_3182811} title="Wskazówki za które musisz zapłacić?" />
                    </PexelsFauxelsImage>
                </MediaText__Object>
                <MediaText__Content>
                    <div className="py8 px6">
                        <div className="g-x">
                        
                            <h6>
                                Wskazówki za które musisz zapłacić? 
                                <TitleUnderline>Na pewno nie u nas!</TitleUnderline>
                            </h6>

                            <p className="_my6">
                                Jeśli pracując zauważymy jakąkolwiek szansę dla Twojej firmy, możesz być pewny/a że skonsultujemy ją z Tobą, sugerując nasze rozwiązania – KOMPLETNIE ZA DARMO. Jeśli zdecydowałeś/aś się z nami współpracować, naszym celem jest wzrost Twojej firmy (nie tylko na płaszczyźnie, za którą płacisz).
                            </p>

                        </div>
                    </div>
                </MediaText__Content>

                </MediaText__Wrapper>
            </div>
        </>
    )
}

export default Section3