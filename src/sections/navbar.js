import React , { useState } from "react";
import styled from 'styled-components';

import { Link } from 'gatsby'

import Container from '../components/Container'
import Element from '../components/Element'

function Navbar() {

    const [subnav, setSubnav] = useState(false);

    return (
        <>
        
        <div className="navigation">
            <Container>
                <div className="g-x">
                    <div className="medium-4">
                        <div className="logoType">
                            <h5>Selleads</h5>
                        </div>
                    </div>

                    <div className="medium-8">

                    <div className="navbar">
                        <nav>
                            <ul className="nav">
                                <li>
                                <Link href="/">Strona główna</Link>
                                </li>
                                <li className="subnav__item" onMouseLeave={() => setSubnav(!subnav)}>
                                    <a href="#" className="subnav__parent" onMouseEnter={() => setSubnav(!subnav)}>Oferta</a>
                                    <ul className={`subnav`}>
                                        <li className="subnav__child"><Link href="amazon">Amazon</Link></li>
                                        <li className="subnav__child"><Link href="allegro">Allegro</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="about">O nas</Link></li>
                                <li><Link href="amazon">Kontakt</Link></li>
                            </ul>
                            </nav>
                    </div>

                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Navbar
