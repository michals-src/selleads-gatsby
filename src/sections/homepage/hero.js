import React , { useState } from "react";
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import Container from '../../components/Container'
import Element from '../../components/Element'
import Navbar from './../navbar'

import heroImage from '../../assets/images/U2BI3GMnSSE-unsplash.jpg';

const HeroWrapper = styled.div`
  max-width: 1800px;
  position: relative;
  padding: 0 30px 30px 30px;
  color: #fff;
  margin:90px auto 150px auto;
  height: auto;

  @media (max-width: 1200px){
    &{
      margin-bottom: 35px;
    }
  }
`
const HeroBackground = styled.div`
  border-radius: 10px;
  width: 100%;

  & > img {
    border-radius:10px;
  }
`
const HeroText = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index:1;
`


export default function Hero() {

  const data = useStaticQuery(graphql`
    query  {
      file(relativePath: {eq: "U2BI3GMnSSE-unsplash.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>

    <Navbar />

    
    <HeroWrapper>
        <HeroBackground>
          <Img fluid={data.file.childImageSharp.fluid} />
        </HeroBackground>
        <HeroText>

          <h1>Selleads</h1>
          <Element _mt4>
            <h3 style={{fontWeight: 400}}>Wings for your business</h3>
          </Element>

        </HeroText>

    </HeroWrapper>

    </>
  )
}
