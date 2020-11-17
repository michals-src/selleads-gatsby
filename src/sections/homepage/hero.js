import React , { useState } from "react";
import styled from 'styled-components';

import { Link } from 'gatsby'

import Container from '../../components/Container'
import Element from '../../components/Element'

import heroImage from '../../assets/images/U2BI3GMnSSE-unsplash.jpg';

const HeroWrapper = styled.div`
  max-width: 2100px;
  margin: 0 auto;
  padding: 30px;
  color: #fff;
`
const HeroBackground = styled.div`
  background: url(${heroImage});
  background-size: cover;
  height: 700px;
  display: flex;
  align-items: center;
  text-align: center;
  text-shadow: 0 3px 10px #0000005e;
`


export default function Hero() {

  const [subnav, setSubnav] = useState(false);

  return (
    <>

      <Container>

      <div className="navigation">
        <div className="logoType">
          <h5>Selleads</h5>
        </div>
        <div className="navbar">
          <nav>
            <ul className="nav">
              <li>
                <Link href="/">Strona główna</Link>
              </li>
              <li className="subnav__item">
                <div className="subnav__parent" onClick={() => setSubnav(!subnav)}>Oferta</div>
                <ul className={`subnav ${(subnav) ? `active` : ``}`}>
                  <li className="subnav__child"><Link href="amazon">Amazon</Link></li>
                  <li className="subnav__child"><Link href="allegro">Allegro</Link></li>
                </ul>
              </li>
              <li>O nas</li>
              <li>Kontakt</li>
            </ul>
          </nav>
        </div>
      </div>

      </Container>

    
    <HeroWrapper>
      <HeroBackground>
        <Container>

        <h1>Rozwiń swoje skrzydła</h1>
        <Element _mt8>
          <h6>Mały krok dla Ciebie, ale ogromny dla Twojego biznesu</h6>
        </Element>

        </Container>
      </HeroBackground>
    </HeroWrapper>

    </>
  )
}
