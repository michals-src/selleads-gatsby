import React, { useEffect, useRef } from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

import Element from '../../components/Element'
import Navbar from './../navbar'

import {AnimatePresence, motion, useMotionValue, useTransform, useElementScroll} from "framer-motion"



import undraw_visual_data_re_mxxo from '../../assets/images/undraw_visual_data_re_mxxo.svg';

const Atext = ({ text }) => {

  let vText = text.split(" ");
  let vWords = [];

  for (const [, item] of vText.entries()) {
    vWords.push(item.split(""));
  }

  vWords.map((item) => {
    return item.push("\u00A0");
  });

  const item = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: [0.1, -0.05, 0.6, 0.95],
        duration: 0.65
      }
    }
  }

  return (
    <>
    <h1 className="text-5xl font-bold">
      {
          vWords.map((words, index) => {
            return (
              <span key={index} className="inline-block whitespace-nowrap mb-5">
                {
                  vWords[index].flat().map((letter, ind) => {
                    return (
                      <span className="inline-block">
                        <motion.span  className="inline-block" key={ind} variants={item} >
                          {letter}
                        </motion.span>
                      </span>
                    )
                  })
                }
              </span>
            )
          })  
      }
    </h1>
    </>
  );

}

const carousel_content = [
  'Obsługujemy Twoje konta na wybranych marketplace, a Ty śledzisz rezultaty.',
  'Przygotowujemy oferty szyte na miarę Twoich klientów.',
  'Pomożemy Twojej firmie wyjść na arenę międzynarodową.',
  'Sprawimy, że Twoi klienci zostaną z Tobą na dłużej.',
  'Maksymalizujemy sprzedaż bez wydawania fortuny na reklamy.',
  'Zajmiemy się budowaniem bazy lojalnych klientów.'
];

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

  const banner = {
    animate: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.045,
      },
    },
  };

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
  
  return (
    <>

    <Navbar />

    
      <div ref={ref} className="container mx-auto px-4 md:px-14">
        <div className="h-screen mt-4 flex flex-col justify-center relative">

          <div className="flex flex-row flex-wrap align-center relative z-20">
            <div className="w-5/12 flex flex-col justify-center relative z-20">
              
            <motion.p
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              transition: {
                ease: [0, -0.55, 0.45, 1],
                duration: 3,
                delay: 3.5
              }
            }}
            className="mb-6 text-blue-600">Zdobądź siłę przebicia.</motion.p>
            
            <motion.div variants={banner} initial="initial" animate="animate">
              <Atext text={"Zadbamy o widoczność Twoich produktów na platformie Amazon"} />
            </motion.div>
            
            <motion.p
             initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              transition: {
                ease: [0, -0.55, 0.45, 1],
                duration: 3,
                delay: 3.5
              }
            }}
            className="mt-8 text-lg"
            >
              Pomożemy Ci przygotować ofertę, która spełni oczekiwania nawet najbardziej wymagających klientów, pomożemy Twojej firmie wyjść na arenę międzynarodową.
            </motion.p>
          

            </div>
            <div className="w-4/12 flex flex-col justify-center">
              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 1,
                    duration: 2,
                    ease: [0, -0.55, 0.45, 1],
                  }
                }}
              >
                <div className="relative z-10">
                  
                  <div className="rounded-2xl overflow-hidden relative">
                    <img style={{
                      height: "650px"
                    }} src={undraw_visual_data_re_mxxo} alt="Unsplash - Blake_Wisz_Pic" />
                    </div>
                  
                  {/* <motion.div variants={fIcons} initial="initial" animate="animate">
                    <FlyingIcons />
                  </motion.div> */}

                </div>   
              </motion.div>
            </div>
            <div className="w-3/12 flex flex-col justify-center">
              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 3.5,
                    duration: 3,
                    ease: [0, -0.55, 0.45, 1],
                  }
                }}
              >
              <div className="px-6">
                <ul className="list-none">
                  <li className="h-full py-16 border-b border-gray-200">
                    <div className="text-lg font-bold">Oferta Amazon</div>
                    
                    <div className="flex flex-row flex-nowrap align-center text-gray-400 hover:no-underline">
                      <a className="hover:text-gray-700 text-gray-400 hover:no-underline" href="#">Poznaj szczegóły</a>
                      <span className="ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>

                  </li>
                  <li className="h-full py-16">
                    <div className="text-lg font-bold">Copywriting</div>
                    <div className="flex flex-row flex-nowrap align-center text-gray-400 hover:no-underline">
                      <a className="hover:text-gray-700 text-gray-400 hover:no-underline" href="#">Poznaj szczegóły</a>
                      <span className="ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              </motion.div>
            </div>
          </div>


        </div>
      </div>
   

    </>
  )
}
