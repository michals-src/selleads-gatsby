import React , { useState } from "react";
import styled from 'styled-components';

import Container from '../../components/Container'
import Element from '../../components/Element'
import Navbar from './../navbar'

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

  return (
    <>

    <Navbar />

    
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
