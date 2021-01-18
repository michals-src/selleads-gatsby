import React from 'react'
import styled from 'styled-components';
import undraw_email_capture from '@images/undraw_email_capture_x8kv.svg';

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

const SVGWrapper = styled.div`
    width: 100%;
    height: 100%;

    & > img {
        width: 100%;
    }
`

function Section4() {
    return (
        <>
            <div className="container my6">
                <div className="g-x my5 fx icenter">
                    <div className="medium-6 small-12">
                        <SVGWrapper>
                            <img src={undraw_email_capture} />
                        </SVGWrapper>
                    </div>
                    <div className="offset-medium-1 medium-5 small-12">
                        <h6>
                            <TitleUnderline className="_mb4">Email marketing.</TitleUnderline>
                        </h6>
                        <p className="_my6">
                            Emaile szyte na miarę Twoich klientów niczym włoski garnitur? Wyobraź sobie, że każdy mail wysłany przez Twoją firmę nie jest usuwany, lecz otwierany i czytany od A do Z, a Twoi klienci pragną dzielić się z Tobą swoimi pomysłami i przemyśleniami, polecając Twoje produkty znajomym. I tak w nieskończoność. A wszystko automatycznie. 
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4