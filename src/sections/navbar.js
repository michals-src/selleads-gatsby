import React , { useState } from "react";
import styled from "styled-components";
import { Link } from 'gatsby';


import Selleads from "@images/selleads.svg";

function Navbar() {

    const [navAria, setNavAria] = useState(false);
    const [snAria, setSmAria] = useState(false);

    const snAriaHandle = (e) => {
        e.preventDefault();

        setSmAria(!snAria);
    }

    return (
        <>
        
        <nav id="sc-globalnav" data-aria={navAria}>

            <div className="sc-gn-header">
                <div className="sc-gn-tapmenu" onClick={() => setNavAria(!navAria)}>
                    <div className="sc-gn-tapmenu-item"><span></span></div>
                    <div className="sc-gn-tapmenu-item"><span></span></div>
                </div>
                <div className="sc-gn-selleads">
                    <h5>Selleads</h5>
                </div>
            </div>
            <ul className="sc-gn-list">
                <li className="sc-gn-list-item sc-gn-selleads">
                    <Link href="/"><h5>
                        Selleads
                    </h5></Link>
                </li>
                <ul className="sc-gn-list-items">
                    <li className="sc-gn-list-item">
                        <Link href="/">Strona główna</Link>
                    </li>
                    <li className="sc-gn-list-item sc-gn-list-item-sn" onMouseLeave={snAriaHandle} data-aria={snAria}>
                        <a href="#" className="sc-gn-sn-main" onMouseEnter={snAriaHandle} onClick={snAriaHandle}>  Oferta</a>
                        <ul className="sc-gn-sn-list">
                            <li className="sc-gn-list-item sc-gn-sn-item">
                                <Link href="/amazon">
                                    <p className="sc-gn-sn-item-title">Amazon</p>
                                    <p className="sc-gn-sn-item-label">Otrzymaj porady i pomoc w osiągnieciu Twouch celów</p>
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
                    </li>
                    <li className="sc-gn-list-item"><Link href="/about">O nas</Link></li>
                    <li className="sc-gn-list-item"> <Link href="/contact">Kontakt</Link></li>
                </ul>
            </ul>
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
