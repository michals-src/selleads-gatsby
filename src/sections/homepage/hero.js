import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  motion,
  useMotionValue,
  useTransform,
  useElementScroll,
} from "framer-motion"

import Hero_leftSide from "./hero/LeftSide"
// import Hero_MiddleSide from './hero/MiddleSide';
// import Hero_RightSide from './hero/RightSide';
// import Button from '@components/Button';

import undraw_visual_data_re_mxxo from "@images/undraw_Data_report_re_p4so.svg"

const Flying_Icons = [
  {
    icon: () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    top: 5,
    left: 0,
    color: "green",
  },
  {
    icon: () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    top: 12,
    left: 25,
    color: "yellow",
  },
  {
    icon: () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    top: 16,
    left: 10,
    color: "blue",
  },
]

const FlyingIcons = () => {
  return (
    <>
      <ul
        className="list-none flex flex-row flex-nowrap absolute"
        style={{
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%) translateY(50%)",
        }}
      >
        {Flying_Icons.map((iconProps, index) => {
          const variants = {
            initial: {
              opacity: 0,
              y: "50%",
            },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                ease: [0, -0.55, -0.45, 0.95],
                duration: 2,
                delay: 4,
              },
            },
          }

          return (
            <motion.li key={index} variants={variants} className="mx-10">
              <div
                className={`bg-${iconProps.color}-100 rounded-full h-16 w-16 flex items-center justify-center`}
                style={{
                  boxShadow: "0 5px 15px rgba(0,0,0,.05)",
                }}
              >
                {<iconProps.icon />}
              </div>
            </motion.li>
          )
        })}
      </ul>
    </>
  )
}

export default function Hero({ setHeroMotionComplete }) {
  const data = useStaticQuery(graphql`
    query {
      hero_image1_selleads: file(
        relativePath: { eq: "hero-image1-selleads.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const fIcons = {
    animate: {
      transition: {
        staggerChildren: 1.5,
      },
    },
  }

  const x = useMotionValue(0)
  const xRange = [0, 1]
  const opacityRange = [1, 0]
  const opacity = useTransform(x, xRange, opacityRange)

  const ref = useRef()
  const { scrollYProgress } = useElementScroll(ref)

  const heroMiddleRef = useRef(null)

  const carousel_content = [
    "Obsługujemy Twoje konta na wybranych marketplace, a Ty śledzisz rezultaty.",
    "Przygotowujemy oferty szyte na miarę Twoich klientów.",
    "Pomożemy Twojej firmie wyjść na arenę międzynarodową.",
    "Sprawimy, że Twoi klienci zostaną z Tobą na dłużej.",
    "Maksymalizujemy sprzedaż bez wydawania fortuny na reklamy.",
    "Zajmiemy się budowaniem bazy lojalnych klientów.",
  ]

  return (
    <>
      <motion.div
        initial={{ borderRadius: "16px" }}
        animate={{
          borderRadius: "0px",
          transition: { delay: 0.3, duration: 0.5 },
        }}
        className="w-full h-screen"
      >
        <div className="relative">
          <div
            className="overflow-hidden h-screen mr-auto"
            style={{ width: "75vw" }}
          >
            <div
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{
                delay: 0.1,
                duration: 0.4,
                ease: [0.6, 0.8, 0.85, 0.9],
              }}
              className="bg-pastelGreen-150 rounded-r-3xl h-full"
            >
              {/* <Img
                className="w-full"
                fluid={
                  data["francesca_grima_vwZo1zAYPws_unsplash"].childImageSharp
                    .fluid
                }
              /> */}
              <div className="p-40 h-full">
                <img
                  className="w-full h-full"
                  src={undraw_visual_data_re_mxxo}
                  alt="Unsplash - Blake_Wisz_Pic"
                />
              </div>
            </div>
          </div>

          {/* <div className="absolute w-full h-full z-0" style={{ top: 0, left: 0 }}>
            <Img className="w-full h-screen" fluid={ data["hero_image1_selleads"].childImageSharp.fluid } />
          </div> */}

          <div className="absolute w-full h-full z-0">
            <div className="h-full flex flex-col items-center justify-center">
              {/* <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: .5, transition: { delay: 2.5, duration: 1 } }}
                className="w-6/12">
                <img className="w-full" src={undraw_visual_data_re_mxxo} alt="Unsplash - Blake_Wisz_Pic" />
              </motion.div> */}
            </div>
          </div>
          <div className="absolute w-full h-full" style={{ top: 0, left: 0 }}>
            <div
              ref={ref}
              className="container mx-auto px-4 sm:px-6 lg:px-6 2xl:px-14 relative z-10"
            >
              <div className="h-screen py-16 flex flex-col align-end justify-center">
                <div className="text-right">
                  {/* <Hero_leftSide setHeroLoaded={setHeroMotionComplete} />  */}

                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: "50%", opacity: 0 }}
                      animate={{ y: "0", opacity: 1 }}
                      transition={{
                        delay: 0.1,
                        duration: 0.5,
                        ease: [0.5, 0.85, 0.9, 0.95],
                      }}
                    >
                      <h1 className="text-6xl font-bold my-2 font-poppins">
                        Zadbamy o widoczność
                      </h1>
                    </motion.div>
                  </div>

                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: "50%", opacity: 0 }}
                      animate={{ y: "0", opacity: 1 }}
                      transition={{
                        delay: 0.2,
                        duration: 0.5,
                        ease: [0.5, 0.85, 0.9, 0.95],
                      }}
                      // onAnimationComplete={v => setHeroMotionComplete(true)}
                    >
                      <h1 className="text-6xl font-bold my-2 font-poppins">
                        Twoich produktów
                      </h1>
                    </motion.div>
                  </div>

                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: "50%", opacity: 0 }}
                      animate={{ y: "0", opacity: 1 }}
                      transition={{
                        delay: 0.6,
                        duration: 0.5,
                        ease: [0.5, 0.85, 0.9, 0.95],
                      }}
                      // onAnimationComplete={v => setHeroMotionComplete(true)}
                    >
                      <h1 className="text-4xl font-bold my-2 font-poppins">
                        w internecie
                      </h1>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-6 2xl:px-14">
        <div className="bg-gray-800 text-white rounded-2xl py-10 px-10 md:px-20">
          <div className="py-8 mt-4 flex flex-col justify-center relative">
            <div className="flex flex-row flex-wrap align-center relative z-20">
              <div className="w-full flex flex-col justify-center relative z-20">
                <div className="mb-32">
                  <div className="max-w-3xl">
                      <Hero_leftSide /> 
                  </div>
                </div>
              </div>
              <div className="w-full hidden md:block invisible md:visible lg:w-7/12">
                <div className="flex flex-col justify-center relative">
                  <Hero_MiddleSide/>
                </div>
              </div>
              <div className="w-full lg:w-5/12 flex flex-col justify-center h-full">
                <Hero_RightSide/>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
