import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

import styled from 'styled-components'
import { motion, useTransform, useViewportScroll } from "framer-motion"

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
            key={x}
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

const Pin = ({ el, duration, children }) => {
    
    const ref = useRef(null);

    const [scrollYProgress, setScrollYProgress] = useState(0);
    const [heightEl, setHeightEl] = useState(0);

    // Style rodzica
    const [isPadding, setIsPadding] = useState(false);
    const [paddingTop, setPaddingTop] = useState(0);
    const [paddingBottom, setPaddingBottom] = useState(0);
    let boxSizing = "content-box";

    // Style elementu trzymającego
    const [position, setPosition] = useState("static");
    let left = 0;
    let top = 0;

    useEffect(() => {

        setHeightEl(el.current.getBoundingClientRect().height);
        setPaddingBottom(`${duration}px`);
        
        const scrollDocument = () => {
            let refEl = el.current.getBoundingClientRect();
            const rect = ref.current.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            const offsetStart = rect.top + scrollTop;
            const offsetEnd = (offsetStart + duration);

            //console.log(scrollTop, offsetStart, offsetEnd);

            if (scrollTop < offsetStart) {

                setPaddingTop(0);
                setPaddingBottom(`${duration}px`);
                setPosition("static");
                setIsPadding(false);
                setScrollYProgress(0);
            }

            if (scrollTop >= offsetStart && scrollTop <= offsetEnd) {
                // if (isPadding === false) {
                //     setPaddingTop(-rect.top);
                //     setPaddingBottom(`${duration + rect.top}px`);
                //     setIsPadding(true);
                // }
                setPosition("fixed");
                let progressY = (scrollTop - offsetStart) / duration;
                setScrollYProgress(progressY);
            }

            if (scrollTop > offsetEnd) {
                setPaddingTop(`${duration}px`);
                setPaddingBottom(0);
                setPosition("static");
                setIsPadding(false);
                setScrollYProgress(1);
            }
            
        }

        window.addEventListener('scroll', scrollDocument);
        window.addEventListener('resize', scrollDocument);

        return () => {
            window.removeEventListener('scroll', scrollDocument);
            window.removeEventListener('resize', scrollDocument);
        }

    }, [ref]);

    return (
        <>
            <div className="relative" style={{ height: heightEl, paddingTop, paddingBottom, boxSizing }} ref={ref}>
                <div className="w-full h-auto" style={{ position, top, left }}>
                    {children(scrollYProgress)}
                </div>
            </div>
            {/* <div style={{ height: heightEl }}></div> */}
        </>
    )
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

    const pinDuration = window.innerHeight;
    const ref = useRef(null);
    // const PinRef = useRef(null);
    
    // const [scrollYProgress, setScrollYProgress] = useState(0);
    
    // useEffect(() => {

    //     // const rect = ref.current.getBoundingClientRect();
    //     // const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    //     // const offsetStart = rect.top + scrollTop;
    //     // const offsetEnd = (offsetStart + rect.height);

    //     // const elementScrollStart = offsetStart / document.body.clientHeight;
    //     // const elementScrollEnd = offsetEnd / document.body.clientHeightt;

    //     // setScrollPercentageStart(elementScrollStart);
    //     // setScrollPercentageEnd(elementScrollEnd);

    //     const onScroll = () => {
    //         const rect = PinRef.current.getBoundingClientRect();
    //         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    //         const offsetStart = rect.top + scrollTop;
    //         const offsetEnd = (offsetStart + pinDuration);

    //         if ( scrollTop < offsetStart ) {
    //             setScrollYProgress(0);
    //         }

    //         if ( scrollTop >= offsetStart && scrollTop <=  offsetEnd ) {
    //             let progressY = (scrollTop - offsetStart) / pinDuration;
    //             setScrollYProgress(progressY);
    //         }

    //         if ( scrollTop >  offsetEnd ) {
    //             setScrollYProgress(1);
    //         }
            
    //     }

    //     window.addEventListener('scroll', onScroll);
    //     window.addEventListener('resize', onScroll);

    //     return () => {
    //         window.removeEventListener('scroll', onScroll);
    //         window.removeEventListener('resize', onScroll);
    //     }

    // }, []);

    

  return (
    <>

        <div className="mt-32">
            {/* <div style={{ height: "400vh" }} ref={ref}> */}
              <Pin el={ref} duration={ pinDuration }>
                  {(scrollYProgress) => {
                      let x = `-${scrollYProgress * 50}vw`;

                      console.log(scrollYProgress);

                      return (
                        <div className="overflow-x-hidden">
                        <div ref={ref} className="container mx-auto h-screen flex flex-col flex-nowrap justify-center">
                                <motion.div className="h-auto flex flex-row flex-nowrap" style={{ width: '180vw', x }}>
                                    <div style={{ width: "50vw" }} >
                                        <div className="max-w-3xl px-16">
                                                <h3 className="text-4xl font-bold">
                                                Mieliśmy straszny problem z wyróżnieniem nowego produktu. Kreatywne podejście do tematu chłopaków z Selleads sprawiło, że teraz naszego zestawu nie da się pomylić z żadnym z innym. A to wszystko za sprawą niewielkiego dodatku.
                                            </h3>
                                            <div className="mt-8">
                                                <p className="text-lg font-bold">Klaudia Korzeniecka</p>
                                                <p>Sales Manager w SlowDeco</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ width: "50vw" }}>
                                        <div className="max-w-3xl px-16">
                                            <h3 className="text-4xl font-bold">
                                                Świetnie przygotowane opisy sprawiły, że nasza oferta zaczęła sprzedawać się znacznie lepiej niż wcześniej. Zanotowaliśmy kilkuprocentowy wzrost konwersji. Przyjacielski kontakt i trafne wskazówki wpłynęły na to, że zdecydowaliśmy się na dłuższą współpracę - i działamy tak od 7 miesięcy :)
                                            </h3>
                                            <div className="mt-8">
                                                <p className="text-lg font-bold">Aleks</p>
                                                <p>CEO w Adamell</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ width: "50vw" }}>
                                        <div className="max-w-3xl px-16">
                                            <h3 className="text-4xl font-bold">
                                                Do tej pory oferowaliśmy produkty tylko w Polsce, ale chcieliśmy spróbować naszych sił za granicą. Padło na Amazon w Niemczech, który okazał się strzałem w dziesiątkę. Powierzyliśmy ekipie z Selleads opiekę nad platformą, a zaoszczędzony czas możemy poświęcić na dalsze skalowanie naszej firmy.
                                            </h3>
                                            <div className="mt-8">
                                                <p className="text-lg font-bold">Kacper Konopko</p>
                                                <p>Owner w Katana Clan</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                        </div>
                      </div>
                      )
                  }}
                </Pin>
            {/* </div> */}
        </div>

          
    {/* <div className="container mx-auto px-4 md:px-16">

        <div className="mt-64 mb-32">
            <div className="flex flex-row flex-nowrap">
                <div className="w-9/12">
                    <div className="mb-20 max-w-2xl">
                        <h3 className="text-lg font-bold">
                            Mieliśmy straszny problem z wyróżnieniem nowego produktu. Kreatywne podejście do tematu chłopaków z Selleads sprawiło, że teraz naszego zestawu nie da się pomylić z żadnym z innym. A to wszystko za sprawą niewielkiego dodatku.
                        </h3>
                        <div className="mt-8">
                            <p className="text-lg font-bold">Klaudia Korzeniecka</p>
                            <p>Sales Manager w SlowDeco</p>
                        </div>
                    </div>
                    <div className="mb-20 max-w-2xl">
                        <h3 className="text-lg font-bold">
                        Świetnie przygotowane opisy sprawiły, że nasza oferta zaczęła sprzedawać się znacznie lepiej niż wcześniej. Zanotowaliśmy kilkuprocentowy wzrost konwersji. Przyjacielski kontakt i trafne wskazówki wpłynęły na to, że zdecydowaliśmy się na dłuższą współpracę - i działamy tak od 7 miesięcy :)
                        </h3>
                        <div className="mt-8">
                            <p className="text-lg font-bold">Aleks</p>
                            <p>CEO w Adamell</p>
                        </div>
                    </div>
                    <div className="max-w-2xl">
                        <h3 className="text-lg font-bold">
                        Do tej pory oferowaliśmy produkty tylko w Polsce, ale chcieliśmy spróbować naszych sił za granicą. Padło na Amazon w Niemczech, który okazał się strzałem w dziesiątkę. Powierzyliśmy ekipie z Selleads opiekę nad platformą, a zaoszczędzony czas możemy poświęcić na dalsze skalowanie naszej firmy.
                        </h3>
                        <div className="mt-8">
                            <p className="text-lg font-bold">Kacper Konopko</p>
                            <p>Owner w Katana Clan</p>
                        </div>
                    </div>
                </div>
                <div className="w-3/12 flex flex-col flex-nowrap items-center content-center">
                    <div className="bg-gray-200" style={{ width: '2px', height: '50%'}}></div>
                    <div className="py-6 text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg"fill="currentColor" class="w-14 h-14" viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"/>
                        </svg>
                    </div>
                    <div className="bg-gray-200" style={{ width: '2px', height: '50%'}}></div>
                </div>
            </div>
        </div>

    </div> */}

    {/* <Wrapper>
        <div className="container py0 px2">

            <div className="mt3 mb1 _p3">
                <h5>Rekomendacje</h5>
            </div>
        </div>

        <Tabs />

      </Wrapper> */}
        <div className="container mx-auto px-4 md:px-14 mt-32 mb-64">
            <div className="flex flex-col flex-wrap">
                <div className="w-4/12">
                    <h1 className="text-6xl font-bold">Zaufali nam</h1>
                </div>
                <div className="w-12/12">
                    <div className="md:pr-16 flex flex-row flex-wrap items-center">
                        <div className="w-2/12 p-6"><Img fluid={data.adamell.childImageSharp.fluid} /></div>
                        <div className="w-2/12 p-6"><Img fluid={data.charmings.childImageSharp.fluid} /></div>
                        <div className="w-2/12 p-6"><Img fluid={data.katanaClan.childImageSharp.fluid} /></div>
                        <div className="w-2/12 p-6"><Img fluid={data.slowdeco.childImageSharp.fluid} /></div>
                        <div className="w-2/12 p-6"><Img fluid={data.solier.childImageSharp.fluid} /></div>
                    </div>
                </div>
            </div>
            {/* <h4 className="text-2xl text-center font-bold">Zaufali nam:</h4>
            <Marks>
            
                <Mark>
                    
                </Mark>
                <Mark>
                    
                </Mark>
                <Mark>
                    
                </Mark>
                <Mark>
                    
                </Mark>
                <Mark>
                    
                </Mark>

            </Marks> */}
        </div>
    </>
  )
}
