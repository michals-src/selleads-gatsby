// https://www.sketch.com/s/dd9e72f3-b0e2-4543-bbea-266a65c79ca4/a/GPw9PE

//https://garoaskincare.com/about
//https://isabelmoranta.com/
//https://yarogolyev.com/about
//https://www.awwwards.com/awwwards/collections/about-page/

/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react"
import { Helmet } from "react-helmet"

import "@styles/global.css"
import "@styles/navigation.css"
import "@styles/cards.css"

import {
  Hero,
  Section_1,
  Section_2,
  Section_3,
  Section_4,
  Analytics,
  Optimalization,
  Rekomendacje,
} from "@sections/homepage"
import Navbar from "@sections/navbar"
import Footer from "@sections/footer"
import { motion } from "framer-motion"

const navbarVariants = {
  "while-hero-motion": { height: "0" },
  "complete-hero-motion": { height: "100%" },
}

export default function Home() {
  const [HeroMotionComplete, setHeroMotionComplete] = useState(false)

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Selleads</title>
      </Helmet>
      {/* <motion.div
        initial={{ height: '0' }}
        animate={ HeroMotionComplete ? 'complete-hero-motion' : 'while-hero-motion' }
        transition={{ duration: .5 }}
        variants={navbarVariants}
        className="overflow-hidden">
        <div className="pt-14"> <Navbar /> </div>
      </motion.div> */}
      <div className="pt-14">
        {" "}
        <Navbar />{" "}
      </div>
      <Hero setHeroMotionComplete={setHeroMotionComplete} />
      {/* <motion.div
        initial={{ height: "0" }}
        animate={
          HeroMotionComplete ? "complete-hero-motion" : "while-hero-motion"
        }
        transition={{ duration: 0.5 }}
        variants={navbarVariants}
        className="overflow-hidden"
      > */}
      <Section_1 /> {/* Features */}
      <Section_2 />
      <Section_3 /> {/* Oferty */}
      {/* <Services />*/}
      <Analytics />
      <Rekomendacje />
      {/* <Optimalization /> */}
      <Footer />
      {/* </motion.div> */}
    </div>
  )
}
