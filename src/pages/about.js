/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

import { motion } from 'framer-motion';

import '@styles/globals.css';
import '@styles/navigation.css';
import '@styles/cards.css';

import Navbar from '@sections/navbar'
import Footer from '@sections/footer'

import abountImage from '@images/about.png';
import aboutBG from '@images/aboutBG.png';
import plane from '@images/planeNEW.svg';

export default function Home() {

  const data = useStaticQuery(graphql`
  query {
    hero_image1_selleads: file(relativePath: {eq: "hero-image1-selleads.png"}) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
    }, 
    mediensturmer_aWf7mjwwJJo_unsplash: 
        file(relativePath: {eq: "mediensturmer-aWf7mjwwJJo-unsplash.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    unsplash_blake_wisz: 
        file(relativePath: {eq: "blake-wisz-Xn5FbEM9564.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }    
  }
`);


  return (
    <div>

      <Helmet>
          <meta charSet="utf-8" />
          <title>Selleads - O nas</title>
      </Helmet>

      <div className="py-14" >
          <Navbar />

        <div className="container mx-auto px-4">
          <div className="rounded-3xl relative overflow-hidden">
            <div className="absolute w-full h-full z-0" style={{ top: 0, left: 0 }}>
              <Img className="w-full h-full" fluid={ data["hero_image1_selleads"].childImageSharp.fluid } />
            </div>
            <motion.div
              initial={{ x: "calc(100vw + 100%)", y: "50vh", rotate: "0" }}
              animate={{ x: "-100%", y: "0", rotate: "15deg", transition: { delay: .15, duration: 4 } }}
              className="absolute w-full h-full z-0" style={{ top: 0, left: 0 }}>
              <div className="max-w-2xl w-3/12">
                <img src={`${plane}`} width="100%" />
              </div>
            </motion.div>
            <div className="relative z-10">
              


                <div className="h-screen mx-auto p-16 text-white text-center">
                  <div className="h-full flex flex-col flex-nowrap justify-center items-center">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 4, duration: 0.5 } }}
                      className="text-3xl text-pastelGreen-250">Poznaj nas</motion.p>
                      <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 3, duration: 1 } }}
                        className="mb-0 text-7xl font-bold leading-tight">
                        Jesteśmy, aby pomóc w rozwoju Twojego biznesu w sieci.
                      </motion.h1>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, height: '0px' }}
                  animate={{ opacity: 1, height: '100%', transition: { delay: 4.5, duration: 0.5 } }}
                  className="text-white overflow-hidden">
                  
                  <div className="flex flex-row flex-wrap py-16">
                      <div className="w-5/12">
                        <div className="pl-16 py-10">
                          <p className="text-2xl">Nic nadzwyczajnego, kilku młodych chłopaków, którzy przez parę lat doświadczeń, rozwijania własnych linii produktowych i dziesiątek godzin spędzonych na nauce systemów E-commerce chcą pomagać rozwijać się innym.</p>
                        </div>
                        <div className="mt-2 pl-16 py-10">
                          <h3 className="text-4xl font-bold">Łatwo, naturalnie i z ludzkim podejściem do innych.</h3>
                        </div>
                      </div>
                      <div className="w-2/12"></div>
                      <div className="w-4/12">
                          <img src={`${plane}`} width="100%" />
                      </div>
                      <div className="hidden lg:visible w-1/12"></div>
                  </div>
                </motion.div>

            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-16">
          <div className="mt-32">
            <div className="flex flex-row flex-wrap">
              <div className="w-3/12 md:pr-16">
                <h1 className="text-6xl font-bold leading-tight">
                  Osoby zespołu Selleads.
                </h1>
              </div>
              <div className="ml-auto w-5/12">
                <div className="flex flex-row flex-wrap">
                  <div className="w-full">
                    <div className="border-b border-gray-300 flex flex-col justify-center h-100">
                      <div className="text-right p-16">
                        <p className="mb-0 text-2xl text-gray-500">Hubert Kowalewski</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="border-b border-gray-300 flex flex-col justify-center h-100">
                      <div className="text-right p-16">
                        <p className="mb-0 text-2xl text-gray-500">Rafał Łupiński</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col justify-center h-100">
                      <div className="text-right p-16">
                        <p className="mb-0 text-2xl text-gray-500">Michał Sierzputowski</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
{/* 
            <div className="container mt4">
                <div className="g-x fx icenter">
                    <div className="medium-5 small-12">
                        <p className="xlead mb1" style={{fontWeight: 800}}>Poznaj nas</p>
                        <p>Nic nadzwyczajnego, kilku młodych chłopaków, którzy przez parę lat doświadczeń, rozwijania własnych linii produktowych i dziesiątek godzin spędzonych na nauce systemów E-commerce chcą pomagać rozwijać się innym. Łatwo, naturalnie i z ludzkim podejściem do innych :)
                        </p>
                    </div>
                    <div className="medium-6 small-12 offset-medium-1">
                        <img src={abountImage} style={{ width: '100%' }}/>
                    </div>
                </div>
            </div> */}

      <Footer />
   
    </div>
  )
}
