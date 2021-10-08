import React , { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link, useStaticQuery, graphql } from 'gatsby';
import {AnimatePresence, motion} from 'framer-motion';

import courtainContext from "../context/CourtainContext";

import Button from '@components/Button';

import selleads from '@images/selleads.svg';

const Selleads = styled.div`
    font-size: 28px;
`

const Content_Button_Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
)

function Navbar() {

    const { setCourtainVisible } = useContext(courtainContext);

    const data = useStaticQuery(graphql`
    query MyQuery {
        file(relativePath: {eq: "selleads.png"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);

    const [navAria, setNavAria] = useState(false);
    const [snAria, setSmAria] = useState(false);

    const snAriaHandle = (snAriaState) => {

        if( typeof snAriaState === "boolean" ){
            setSmAria(snAriaState);
            return snAria;
        }

        setSmAria(!snAria);
        return snAria;
    }

    useEffect(() => {

        let bodyClass = document.body.classList;
        // const bodyClassTag = 'sc-mobile-globalnav';
        const bodyClassTag = 'a';

        return Object.values(bodyClass).indexOf(bodyClassTag) != -1
                ? bodyClass.remove( bodyClassTag )
                : bodyClass.add( bodyClassTag );

    }, [navAria]);

    useEffect(() => {
        document.body.classList.remove('sc-mobile-globalnav');
    }, []);


    const [cVis, setCVis] = useState(true);

    return (
        <>
            <nav id="sc-globalnav" data-aria={navAria}>
                <div className="sc-gn-header">
                    <div className="sc-gn-tapmenu" onClick={() => setNavAria(!navAria)}>
                        <div className="sc-gn-tapmenu-item"><span></span></div>
                        <div className="sc-gn-tapmenu-item"><span></span></div>
                    </div>
                    <div className="sc-gn-selleads">
                        <Selleads>
                            <Link href="/">
                                <img src={selleads} alt="selleads - wings for your business" />
                            </Link>
                        </Selleads>
                    </div>
                </div>
                <div className="container mx-auto">
                    <ul className="sc-gn-list">
                        <li className="sc-gn-list-item sc-gn-selleads">
                            <Selleads>
                                <Link href="/">
                                    <img src={selleads} alt="selleads - wings for your business" />
                                </Link>
                            </Selleads>
                        </li>
                        <ul className="sc-gn-list-items">
                            <li className="sc-gn-list-item" onClick={() =>  setCVis(false)}>
                                <Link href="/">Strona główna</Link>
                            </li>
                            <li className="sc-gn-list-item">
                                <Link href="/amazon">Amazon</Link>
                            </li>
                            <li className="sc-gn-list-item">
                                <Link href="/copywriting">Copywriting</Link>
                            </li>
                            {/* <li className="sc-gn-list-item sc-gn-list-item-sn" onMouseLeave={() => { snAriaHandle(false) } } data-aria={snAria}>
                                <a href="#" className="sc-gn-sn-main" onMouseEnter={() => { snAriaHandle(true) } } onClick={ () => { snAriaHandle('toggle') } }>Oferta</a>
                                <ul className="sc-gn-sn-list">
                                    <li className="sc-gn-list-item sc-gn-sn-item">
                                        <Link href="/amazon">
                                            <p className="sc-gn-sn-item-title">Amazon</p>
                                            <p className="sc-gn-sn-item-label">Podbij zagraniczne rynki</p>
                                        </Link>
                                    </li>
                                    <li className="sc-gn-list-item sc-gn-sn-item">
                                        <Link href="/allegro">                                    
                                        <p className="sc-gn-sn-item-title">Allegro</p>
                                        <p className="sc-gn-sn-item-label">Pokażmy Twój produkt ludziom, którzy go szukają.</p>
                                        </Link>
                                    </li>
                                    <li className="sc-gn-list-item sc-gn-sn-item">
                                        <Link href="/email">                                    
                                            <p className="sc-gn-sn-item-title">Email marketing</p>
                                            <p className="sc-gn-sn-item-label">Emaile szyte na miarę</p>
                                        </Link>
                                    </li>
                                    <li className="sc-gn-list-item sc-gn-sn-item"> 
                                        <Link href="/copywriting">
                                            <p className="sc-gn-sn-item-title">Copywriting</p>
                                            <p className="sc-gn-sn-item-label">Poczuj siłę słów</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}
                            <li className="sc-gn-list-item"><Link href="/about">O nas</Link></li>
                            <li className="sc-gn-list-item">
                                <Link href="/contact">
                                    <Button
                                        lIcon={<Content_Button_Icon/>}
                                        bg={['bg-gray-900', 'hover:bg-gray-700']}
                                        color={['text-white', 'hover:text-gray-100']}
                                    >
                                        Kontakt
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </ul>
                </div>
                </nav>
        
 {/* 
        <div className="navigation">
            <Container>
                <div className="g-x">
                    <div className="medium-4">
                        <div className="logoType">
                            <h5>Selleads</h5>
                        </div>
                    </div>

                    <div className="navbar-tap">
                        <div className="navbar-tap-item"></div>
                        <div className="navbar-tap-item"></div>
                    </div>

                    <div className="medium-8 snall-12">

                        <div className="navbar">
                            <nav>
                                <ul className="nav">
                                    <li>
                                        <Link href="/">Strona główna</Link>
                                    </li>
                                    <li className="subnav__item" onMouseLeave={() => setSubnav(!subnav)}>
                                        <a href="#" className="subnav__parent" onMouseEnter={() => setSubnav(!subnav)}>Oferta</a>
                                        <ul className={`subnav`}>
                                            <li className="subnav__child"><Link href="/amazon">Amazon</Link></li>
                                            <li className="subnav__child"><Link href="/allegro">Allegro</Link></li>
                                            <li className="subnav__child"><Link href="/email">Email marketing</Link></li>
                                            <li className="subnav__child"><Link href="/copywriting">Copywriting</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/about">O nas</Link></li>
                                    <li><Link href="/contact">Kontakt</Link></li>
                                </ul>
                                </nav>
                        </div>

                    </div>
                </div>
            </Container>
        </div> */}
        </>
    )
}

export default Navbar
