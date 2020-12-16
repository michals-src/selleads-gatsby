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
`

const Picture = styled.img`
    width: 100%;
`

const Cards = styled.div``

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

      <div className="container py0">

            <Element pt2 pb1>
              <div className="__center">
                <p className="lead">Pomożemy Ci na tych platformach.</p>
              </div>
            </Element>
            <div className="g-x">
              <div className="small-10">

                
                  <Cards>
                    <div className="g-x">
                      <div className="small-6 _pr2">
                        <Link to="/allegro">
                          <CardWrapper className="py8 one">
                            <h3 className="_mb2">Allegro</h3>
                            <p className="px3">Pozwól się rozpoznać milionom ludzi przez naszą opiekę nad produktem</p>
                          </CardWrapper>
                        </Link>
                      </div>
                      <div className="small-6 _pl2">
                        <Link to="/allegro">
                          <CardWrapper className="py8 two">
                            <h3 className="_mb2">Amazon</h3>
                            <p className="px3">Doskonałe miejsce do budowania swojej marki produktowej</p>
                          </CardWrapper>
                        </Link>
                      </div>
                    </div>
                  </Cards>
                

              </div>
            </div>

      </div>
      </Wrapper>
    </>
  )
}
