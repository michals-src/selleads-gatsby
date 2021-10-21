import React, { useEffect, useRef } from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

import Navbar from './../navbar'

import {AnimatePresence, motion, useMotionValue, useTransform, useElementScroll} from "framer-motion"

import Hero_leftSide from './hero/LeftSide';
import Hero_MiddleSide from './hero/MiddleSide';
import Hero_RightSide from './hero/RightSide';

const Flying_Icons = [
  {
    icon: () => {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    top: 5,
    left: 0,
    color: "green"
  },
  {
    icon: () => {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    top: 12,
    left: 25,
    color: "yellow"
  },
  {
    icon: () => {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
      )
    },
    top: 16,
    left: 10,
    color: "blue"
  },
];

const FlyingIcons = () => {
  return (
    <>
      <ul className="list-none flex flex-row flex-nowrap absolute" style={{
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%) translateY(50%)"
      }}>
      {
        Flying_Icons.map((iconProps, index) => {

          const variants = {
            initial: {
              opacity: 0,
              y: "50%",
            },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                ease: [0, -0.55,-0.45, 0.95],
                duration: 2,
                delay: 4
              }
            }
          }

          return (
            <motion.li
              key={index}
              variants={variants}
              className="mx-10"
              >
                <div className={`bg-${iconProps.color}-100 rounded-full h-16 w-16 flex items-center justify-center`}
                  style={{
                  boxShadow: "0 5px 15px rgba(0,0,0,.05)"
                }}>
                  {<iconProps.icon/>}
                </div>
            </motion.li>
          )
        })
        }
        </ul>
    </>
  )
}


export default function Hero() {

  const data = useStaticQuery(graphql`
  query {
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

  const fIcons = {
    animate: {
      transition: {
        staggerChildren: 1.5,
      },
    },
  };

  const x = useMotionValue(0)
  const xRange = [0, 1]
  const opacityRange = [1, 0]
  const opacity = useTransform(x, xRange, opacityRange)

  const ref = useRef();
  const { scrollYProgress } = useElementScroll(ref)
  
  const heroMiddleRef = useRef(null);

  const carousel_content = [
    'Obsługujemy Twoje konta na wybranych marketplace, a Ty śledzisz rezultaty.',
    'Przygotowujemy oferty szyte na miarę Twoich klientów.',
    'Pomożemy Twojej firmie wyjść na arenę międzynarodową.',
    'Sprawimy, że Twoi klienci zostaną z Tobą na dłużej.',
    'Maksymalizujemy sprzedaż bez wydawania fortuny na reklamy.',
    'Zajmiemy się budowaniem bazy lojalnych klientów.'
  ];

  
  return (
    <>   
    <div className="py-14">
      <Navbar />
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-6 2xl:px-14">
        <div className="bg-gray-100 bg-gradient-to-t from-green-100 to-green-50 rounded-2xl py-10 px-10 md:px-20">
          <div className="py-8 mt-4 flex flex-col justify-center relative">
            <div className="flex flex-row flex-wrap align-center relative z-20">
              <div className="w-full flex flex-col justify-center relative z-20">
                <div className="text-center mb-32">
                  <div className="max-w-3xl mx-auto">
                      <Hero_leftSide /> 
                  </div>
                </div>
              </div>
              <div className="w-full hidden md:block invisible md:visible lg:w-7/12 flex flex-col justify-center relative">
                <Hero_MiddleSide/>
              </div>
              <div className="w-full lg:w-5/12 flex flex-col justify-center h-full">
                <Hero_RightSide/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* <div className="w-8/12 mx-auto mb-32">
          <h1 className="text-4xl text-center">
            Pomożemy Ci przygotować ofertę, która spełni oczekiwania nawet najbardziej wymagających klientów.
          </h1>
        </div> */}

        <div className="flex flex-row flex-wrap">
          <div className="w-6/12 border-r-2 border-b-4 border-white">
            <div className="flex flex-col align-center p-16 text-center h-full">
              <div className="mx-auto mb-10 text-green-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h5 className="text-2xl font-bold mb-3">Obsługujemy Twoje konta</h5>
              <p className="px-10 2xl:px-32 text-lg">Na wybranych marketplace, a Ty śledzisz rezultaty.</p>
            </div>
          </div>
          <div className="w-6/12 border-l-2 border-b-4 border-white">
            <div className="flex flex-col align-center p-16 text-center h-full">
              <div className="mx-auto mb-10 text-green-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h5 className="text-2xl font-bold mb-3">Pomożemy Twojej firmie</h5>
              <p className="px-10 2xl:px-32 text-lg">Wyjść na arenę międzynarodową.</p>
            </div>
          </div>
          <div className="w-6/12 border-r-2 border-b-4 border-white">
            <div className="flex flex-col align-center p-16 text-center bg-gray-100 rounded-tl-2xl h-full">
              <div className="mx-auto mb-10 text-green-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              </div>
              <h5 className="text-2xl font-bold mb-3">Maksymalizujemy sprzedaż</h5>
              <p className="px-10 2xl:px-32 text-lg">Bez wydawania fortuny na reklamy.</p>
            </div>
          </div>
          <div className="w-6/12 border-l-2 border-b-2 border-white">
            <div className="flex flex-col align-center p-16 text-center bg-gray-100 rounded-tr-2xl h-full">
              <div className="mx-auto mb-10 text-green-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h5 className="text-2xl font-bold mb-3">Twoi klienci</h5>
              <p className="px-10 2xl:px-32 text-lg">Sprawimy, że zostaną z Tobą na dłużej.</p>
            </div>
          </div>
          <div className="w-6/12">
            <div className="overflow-hidden rounded-bl-2xl">
              <Img fluid={data.unsplash_blake_wisz.childImageSharp.fluid} className="object-fit" />
            </div>
          </div>
          <div className="w-6/12 flex items-center border-2 border-gray-200 rounded-br-2xl">
            <div className="flex flex-col justify-center px-32">
              <h1 className="text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-10">
                Pomożemy Ci przygotować ofertę.
              </h1>
              <p className="text-lg">Spełni oczekiwania nawet najbardziej wymagających klientów.</p>
            </div>
          </div>
          

        </div>


        <div className="flex flex-row flex-wrap align-center justify-center">

        </div>
      </div>
   

    </>
  )
}