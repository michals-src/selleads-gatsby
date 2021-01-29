import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"


import Container from '../../components/Container'

import map_image from '../../assets/images/undraw_connected_world_wuay.svg';

const Wrapper = styled.div`
    background-color: rgb(238 249 245 / 32%);
    color: #517366;
    padding-top: 40px;
    margin-bottom: 50px;
    margin-top: -50px;
`

const OpinionContent = styled.div`
    color: #000;
    padding: 25px 0;
`

const OpinionDetails = styled.div`
    padding: 25px 0;
`
const OpinionAuthor = styled.h6`
    margin: 5px 0 8px 0;
`

const Marks = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1050px;
    margin: 20px auto 40px auto;
    flex-wrap: wrap;
`

const Mark = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    margin-left: auto;
    margin-right: auto;
    color: #a4b5af;

    & > .gatsby-image-wrapper{
        width: 130px;
    }
`

const OpinionWrapper = styled.div`
`

const elements = () => {
  return [
        {
        "content" : "Mieliśmy straszny problem z wyróżnieniem nowego produktu. Kreatywne podejście do tematu chłopaków z Selleads sprawiło, że teraz naszego zestawu nie da się pomylić z żadnym z innym. A to wszystko za sprawą niewielkiego dodatku.",
        "author": "Klaudia Korzeniecka",
        "label": "Sales Manager",
        "company": "SlowDeco",
        },
        {
        "content" : "Świetnie przygotowane opisy sprawiły, że nasza oferta zaczęła sprzedawać się znacznie lepiej niż wcześniej. Zanotowaliśmy kilkuprocentowy wzrost konwersji. Przyjacielski kontakt i trafne wskazówki wpłynęły na to, że zdecydowaliśmy się na dłuższą współpracę - i działamy tak od 7 miesięcy :)",
        "size": "large-4 medium-12",
        "author": "Aleks",
        "label": "CEO",
        "company": "Adamell",
        },
        {
        "content" : "Do tej pory oferowaliśmy produkty tylko w Polsce, ale chcieliśmy spróbować naszych sił za granicą. Padło na Amazon w Niemczech, który okazał się strzałem w dziesiątkę. Powierzyliśmy ekipie z Selleads opiekę nad platformą, a zaoszczędzony czas możemy poświęcić na dalsze skalowanie naszej firmy.",
        "size": "large-4 medium-12",
        "label": "Owner",
        "author": "Kacper Konopko",
        "company": "Katana Clan",
        },
    ]
}

const Tabs = () => {
  return (
    elements().map((tab, x) => {

        let colorOpacity = ((x+1)/elements().length) * 100;

      return (
        <div
            style={{
                'background-color': 'rgb(214 239 231 / ' + colorOpacity + '%)'
            }}
        >
            <div className="container">
                <div className="g-x">
                    <div className={`medium-8 small-12`}>
                        <OpinionContent>
                            <p>{tab.content}</p>
                        </OpinionContent>
                    </div>
                    <div className={`medium-3 offset-medium-1 small-12`}>
                        <OpinionDetails>
                            <p>{tab.label}</p>
                            <OpinionAuthor>{tab.author}</OpinionAuthor>
                            <p className="lead">{tab.company}</p>
                        </OpinionDetails>
                    </div>
                </div>
            </div>
        </div>
      );

    })
  );
}

export default function Rekomendacje() {

    const data = useStaticQuery(graphql`
        query {
            adamell: 
                file(relativePath: {eq: "adamell.png"}) {
                childImageSharp {
                    fluid(maxWidth: 130) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
            charmings: 
                file(relativePath: {eq: "charmings.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 130) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
            katanaClan: 
                file(relativePath: {eq: "katana_clan.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 130) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
            slowdeco: 
                file(relativePath: {eq: "slowdeco.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 130) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
            solier: 
                file(relativePath: {eq: "solier.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 130) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        
        }
    `);



  return (
    <>
    
    <Wrapper>
        <div className="container py0 px2">

            <div className="mt3 mb1 _p3">
                <h5>Rekomendacje</h5>
            </div>
        </div>

        <Tabs />

      </Wrapper>

    <div className="container py0">
            <h4 className="mt2 lead text-center" style={{
                color: "#a4b5af"
            }}>Zaufali nam:</h4>
            <Marks>
            
                <Mark>
                    <Img fluid={data.adamell.childImageSharp.fluid} />
                </Mark>
                <Mark>
                    <Img fluid={data.charmings.childImageSharp.fluid} />
                </Mark>
                <Mark>
                    <Img fluid={data.katanaClan.childImageSharp.fluid} />
                </Mark>
                <Mark>
                    <Img fluid={data.slowdeco.childImageSharp.fluid} />
                </Mark>
                <Mark>
                    <Img fluid={data.solier.childImageSharp.fluid} />
                </Mark>

            </Marks>
        </div>
    </>
  )
}
