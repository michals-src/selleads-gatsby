import React from "react"
import { Link } from 'gatsby'
import Container from '../../components/Container'
import Element from '../../components/Element'
import styled from 'styled-components';


import background_dashed from '../../assets/images/background_dashed.svg';

const BackgroundWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: -1;
`

const Picture = styled.img`
    width: 100%;
`

export default function services() {
  return (
    <>
    <div style={{
      position: 'relative',
      zIndex: '2'
    }}>

    <BackgroundWrapper>
      <picture>
        <Picture src={background_dashed} />
      </picture>
    </BackgroundWrapper>

      <div className="container py0">

            <Element py2>
              <div className="__center">
                <h2>Platformy</h2>
                <p className="lead">Pomożemy tobie na tych serwisach</p>
              </div>
            </Element>
            <div className="g-x">
              <div className="small-12">
                <div className="cards">
                  <div className="g-x">
                    <div className="small-6 card p2">
                      <h3>Allegro</h3>
                    </div>
                    <div className="small-6 card p2">
                      <h3>Amazon</h3>
                    </div>
                  </div>
                  <div className="cards-navigation">
                    <button className="button primary">
                      <Link href="/">Zobacz ofertę</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

      </div>
    </div>
    </>
  )
}
