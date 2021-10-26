/* eslint-disable react/react-in-jsx-scope */
import React, {useState} from 'react';
import { Helmet } from "react-helmet"
import { motion } from 'framer-motion';

// import '@styles/global.css';
// import '@styles/navigation.css';

import Navbar from '@sections/navbar'
import Footer from '@sections/footer';

import { Hero, Section1, Section2, Section3 } from '@sections/amazon';

const navbarVariants = {
  'while-hero-motion': { height: '0' },
  'complete-hero-motion': { height: '100%' }
};

export default function Home() {

  const [HeroMotionComplete, setHeroMotionComplete] = useState(false);

  return (
    <>

      <Helmet>
          <meta charSet="utf-8" />
          <title>Selleads - Oferta Amazon</title>
      </Helmet>

      <div className="pt-4 md:pt-14">

        <motion.div
          initial={{ height: '0' }}
          animate={ HeroMotionComplete ? 'complete-hero-motion' : 'while-hero-motion' }
          transition={{ duration: .5 }}
          variants={navbarVariants}
          className="overflow-hidden">
         
          <Navbar />

        </motion.div>

        <Hero setHeroMotionComplete={setHeroMotionComplete} />
        
      </div>

      <motion.div
        initial={{ height: '0' }}
        animate={ HeroMotionComplete ? 'complete-hero-motion' : 'while-hero-motion' }
        transition={{ duration: .5 }}
        variants={navbarVariants}
        className="overflow-hidden">
        
        <Section1 />
        <Footer />

      </motion.div>
      
      {/* <Section2 />
      <Section3 /> */}
   
    </>
  )
}
