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
`

const Cards = styled.div`
  & a {
    text-decoration: none;
    transition: transform .35s ease-in-out;
  }

  & a:hover{
    transform: scale(0.95);
  }
`

const CardWrapper = styled.div`
  color: #fff;
  text-shadow: 0 5px 10px rgba(0,0,0,0.4);
  background: url(${efe_kurnaz_RnCPiXixooY_unsplash});
  text-align: center;
  background-size: cover;
  text-decoration: none;

  &.one{
    background: url(${glenn_carstens_peters_npxXWgQ33ZQ_unsplash}) right no-repeat;
    background-size: cover;
    
  }
  &.two{
    background: url(${headway_5QgIuuBxKwM_unsplash}) center no-repeat;
    background-size: cover;
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

      <div className="py0 px3">
        <CardsWrapper>
            <Element mt3 mb2 px2>
              <div className="__center">
                <p className="lead">Pomożemy Ci na tych platformach.</p>
              </div>
            </Element>

                  <Cards>
                    <div className="g-x">
                      <div className="medium-6 small-12 _px2 _py1">
                        <Link to="/allegro">
                          <CardWrapper className="py8 one">
                            <h3 className="_mb2">Allegro</h3>
                            <p className="px3">Pozwól się rozpoznać milionom ludzi przez naszą opiekę nad produktem.</p>
                          </CardWrapper>
                        </Link>
                      </div>
                      <div className="medium-6 small-12 _px2 _py1">
                        <Link to="/amazon">
                          <CardWrapper className="py8 two">
                            <h3 className="_mb2">Amazon</h3>
                            <p className="px3">Doskonałe miejsce do budowania swojej marki produktowej.</p>
                          </CardWrapper>
                        </Link>
                      </div>
                    </div>
                  </Cards>

        </CardsWrapper>
      </div>
      </Wrapper>
    </>
  )
}
