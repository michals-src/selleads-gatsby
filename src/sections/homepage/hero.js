import React, { useEffect } from "react";
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

import Element from '../../components/Element'
import Navbar from './../navbar'

import selleadsHero from '@images/selleads--hero.svg';


const HeroWrapper = styled.div`
  max-width: 1800px;
  position: relative;
  padding: 0 30px 30px 30px;
  color: #fff;
  margin: 90px auto 0 auto;
  height: auto;

  @media (max-width: 767px){
    & {
      padding: 0 5px;
    }
  }
`
const HeroBackground = styled.div`
  width: 100%;

  & img {
    border-radius:10px;
  }

  @media (max-width: 767px){
    & .gatsby-image-wrapper {
      height: calc(65vh);
    }
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
const HeroTextPicture = styled.div`
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 767px){
    & {
      max-width: 300px;
    }
  }
`


//Carousel text
const Carousel_wrapper = styled.ul`
  position: relative;
  max-width: 1180px;
  height: 80px;
  margin: 0 auto;
  text-align: center;
`
const Carousel_item = styled.li`
  height: 60px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  text-align: center;
`
const Carousel_content = styled.div`
  font-weight: 400;
  transition: transform .15s ease-in-out, opacity .1s ease-in-out;
  -ms-transition: transform .3s ease-in-out, opacity .1s ease-in-out;
  transform: translateY(100%);
  -ms-transform: translateY(100%);
  opacity: 0;
  padding: 0 25px;

  .in & {
    transform: translateY(0%);
    opacity: 1;
  }
  .out & {
    transform: translateY(-100%);
    opacity: 0;
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5, 
  & h6{
    font-weight: 400;
    font-family: 'Fraunces', 'Bentham', serif;
  }
`


export default function Hero() {

  const data = useStaticQuery(graphql`
    query {
      hero: 
          file(relativePath: {eq: "selleads--hero--dark.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      full: 
          file(relativePath: {eq: "selleads--full.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      
    }
  `);

  const carousel_content = [
    'Obsługujemy Twoje konta na wybranych marketplace, a Ty śledzisz rezultaty.',
    'Przygotowujemy oferty szyte na miarę Twoich klientów.',
    'Pomożemy Twojej firmie wyjść na arenę międzynarodową.',
    'Sprawimy, że Twoi klienci zostaną z Tobą na dłużej.',
    'Maksymalizujemy sprzedaż bez wydawania fortuny na reklamy.',
    'Zajmiemy się budowaniem bazy lojalnych klientów.'
  ];

  const timeInterval = 3500;
  const hero_text_carousel = ( n = 0 ) => {

    if( typeof window == "undefined" || !window.document){
      return;
    }

    const carousel_wrapper = document.getElementById('carousel-text');
    const carousel_items = document.getElementsByClassName('carousel-item');

    if( carousel_items.length > 0 ){

      let n_1 = (n-1) < 0 ? (carousel_content.length - 1) : n-1;

      carousel_items[n_1].classList.remove('in')
      carousel_items[n_1].classList.add('out')
      carousel_items[n_1].addEventListener( 'transitionend', () => {
        carousel_items[n_1].classList.remove('out');
      });
      
      carousel_items[n].classList.add('in');

    }

  };

  hero_text_carousel();

  useEffect(() => {
    hero_text_carousel( 0 );

    let item = 1;
    const interval = setInterval(() => {
      if( item > (carousel_content.length - 1) ){
        item = 0;
      }
      hero_text_carousel( item );
      item++;
    }, timeInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <>

    <Navbar />
    <HeroWrapper>
        <HeroBackground>
          <Img fluid={data.hero.childImageSharp.fluid} />
        </HeroBackground>
        <HeroText>

          <HeroTextPicture>
            {/* <Img fluid={data.full.childImageSharp.fluid} /> */}
            <img src={selleadsHero} alt="Selleads - Wings for your business" />
          </HeroTextPicture>
          <Element _mt4>
            <Carousel_wrapper id="carousel-text">
              
              {
                carousel_content.map((e) => {
                  return (<Carousel_item className="carousel-item">
                    <Carousel_content className="carousel-item-content">
                      <h5>{e}</h5>
                    </Carousel_content>
                  </Carousel_item>)
                })
              }
              
            </Carousel_wrapper>
          </Element>

        </HeroText>

    </HeroWrapper>

    </>
  )
}
