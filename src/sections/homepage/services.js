import React from "react"
import { Link } from 'gatsby'
import Container from '../../components/Container'
import Element from '../../components/Element'
import styled from 'styled-components';


import background_dashed from '../../assets/images/background_dashed.svg';
import efe_kurnaz_RnCPiXixooY_unsplash from '@images/efe-kurnaz-RnCPiXixooY-unsplash.jpg';

import glenn_carstens_peters_npxXWgQ33ZQ_unsplash from '@images/loic-furhoff-qeIaMQP_xQE-unsplash.jpg';
import headway_5QgIuuBxKwM_unsplash from '@images/bench-accounting-ziwuqMZNRvs-unsplash.jpg';

const Wrapper = styled.div`
  max-width: 2100px;
  margin:0 auto;
  position: relative;
`

const BackgroundWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: -1;
    max-width: 1800px;
    left: 0;
    right: 0;
    overflow: hidden;
`

const Picture = styled.img`
    width: 100%;
    display: block;
    margin-left: 50px;
`

const CardsWrapper = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  padding: 0 15px;
  border-radius: 5px;

  @media (max-width: 767px){
    &{
      padding: 10px;
    }
  }
`

const Cards = styled.div`
  & a {
    text-decoration: none;
    transition: transform .35s ease-in-out, box-shadow .3s ease-in-out;
    box-shadow: 0 20px 15px rgba(0,0,0,.1);
    transform: scale(1);
  }

  & a:hover,
  & a:focus,
  & a:active{
    transform: scale(0.95);
    box-shadow: 0 20px 15px rgba(0,0,0,.015);
  }

  & .cards-item:nth-child(1){
    padding-right: 15px;
  }
  & .cards-item:nth-child(2){
    padding-left: 15px;
  }

  @media (max-width: 767px){
    & {
      padding: 15px;
    }

    & .cards-item:nth-child(1){
      padding-right: 0;
      padding-bottom: 15px;
    }
    & .cards-item:nth-child(2){
      padding-left: 0;
    }
  }
`

const CardWrapper = styled.div`
  color: #fff;
  text-shadow: 0 5px 10px rgba(0,0,0,0.4);
  background: url(${efe_kurnaz_RnCPiXixooY_unsplash});
  text-align: center;
  background-size: cover;
  text-decoration: none;
  padding: 200px 0;
  border-radius: 5px;

  &.one{
    background: url(${glenn_carstens_peters_npxXWgQ33ZQ_unsplash}) right no-repeat;
    background-size: cover;
    
  }
  &.two{
    background: url(${headway_5QgIuuBxKwM_unsplash}) center no-repeat;
    background-size: cover;
  }

  @media (max-width: 767px){
    & {
      padding: 75px 0;
    }
  }

`

export default function services() {
  return (
    <>
    <Wrapper>
      <BackgroundWrapper>
        <picture>
          <Picture src={background_dashed} />
        </picture>
      </BackgroundWrapper>

      
        <CardsWrapper>
                  <Cards>
                    <div className="g-x">
                      <div className="medium-6 small-12 cards-item">
                        <Link to="/allegro">
                          <CardWrapper className="one">
                            <h3 className="_mb2">Allegro</h3>
                            <p className="px3">Pozwól się rozpoznać milionom ludzi przez naszą opiekę nad produktem.</p>
                          </CardWrapper>
                        </Link>
                      </div>
                      <div className="medium-6 small-12 cards-item">
                        <Link to="/amazon">
                          <CardWrapper className="two">
                            <h3 className="_mb2">Amazon</h3>
                            <p className="px3">Doskonałe miejsce do budowania swojej marki produktowej.</p>
                          </CardWrapper>
                        </Link>
                      </div>
                    </div>
                  </Cards>

        </CardsWrapper>
      
      </Wrapper>
    </>
  )
}
