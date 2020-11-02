import React , { useState } from "react";
import styled from 'styled-components';

import { Link } from 'gatsby'

import Container from '../../components/Container'
import Element from '../../components/Element'

import heroImage from '../../assets/images/U2BI3GMnSSE-unsplash.jpg';


const HeroImage = styled.div`
  width: 100%;
  height: 65vh;
  border-radius: 5px;
  overflow: hidden;

  & > img {
    transform: scale(0.5) translate(-84%, -77%);
  }
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

      <div className="_container my5">
      
      <Element _py8 my3>
        
        <div className="g-x">
          
          <div className="medium-5">
              <h1>Rozwiń swoje skrzydła</h1>
              <Element _mt8>
                <h6>Mały krok dla Ciebie, ale ogromny dla Twojego biznesu</h6>
              </Element>
          </div>
          <div className="medium-6 offset-medium-1">
              <HeroImage>
                <img src={heroImage} />
              </HeroImage>
          </div>
          
        </div>

      </Element>

      </div>

    </>
  )
}
