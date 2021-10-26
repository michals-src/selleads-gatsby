import React, { useState } from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

import {motion} from "framer-motion"

import undraw_visual_data_re_mxxo from '@images/undraw_Data_report_re_p4so.svg';
import undraw_Process_re from '@images/undraw_Process_re_gws7.svg';

const textVariants = {
    'TextIn': { opacity: 1, y: 0 },
    'TextOut': { opacity: 0, y: -5 }
}

export default function Hero({ setHeroMotionComplete }) {

  const data = useStaticQuery(graphql`
      query {
        andrew_stickelman_unsplash: file(relativePath: {eq: "andrew-stickelman-4zSqHtIx8H8-unsplash.jpg"}) {
              childImageSharp {
                fluid(maxWidth: 2560) {
                  ...GatsbyImageSharpFluid
                }
              }
          } 
      }
  `);
    
    const [TextIndex, setTextIndex] = useState([false, false, false, false]);
    const [TextIndicator, setTextIndicator] = useState(0);

    const switchText = (variant, index) => {
        if (TextIndicator == index || TextIndicator == (index + 0.5) ) {
            if ( variant === "TextIn" ) {
                setTextIndicator(index + 0.5);
            }
            if (variant === "TextOut") {
                setTextIndicator(index + 1);
            }
        }
    }

  return (
    <>
         
        <div className="w-full flex flex-column flex-nowrap justify-center items-center relative">
              <div
                  className="h-full container mx-auto px-4 md:px-14 relative z-10 ">
                <motion.div
                initial={{ scale: .95 }}
                animate={{ scale: 1, transition: { delay: .1, duration: .5, ease: [0, 0.6, 0.8, 0.9] } }}
                className="h-full rounded-2xl bg-gray-100 overflow-hidden relative">
                
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    className="absolute w-full h-full"
                >
                    <Img
                    className="absolute w-full h-full"
                    style={{ bottom: "0", left: "50%", transform: "translateX(-50%)" }}
                    fluid={data["andrew_stickelman_unsplash"].childImageSharp.fluid} />
                </motion.div>
                
                <motion.div className="absolute w-full h-full bg-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: .75, transition: { delay: 1.5, duration: .35, ease: [0, 0.6, 0.8, 0.9] } }}
                    style={{ left: 0, top: 0 }}
                ></motion.div>

                <div className="w-full h-full flex flex-column items-center">
                    <div className="w-full  mx-auto h-auto text-center relative z-10 text-white">
                        <div className="py-16" style={{ height: "calc(100vh - 112px)" }}>
                            <div className="w-full max-w-6xl px-20 h-full mx-auto text-center relative">
                                <motion.div
                                    key={0}
                                    initial={{ y: 15, opacity: 0 }}
                                    animate={TextIndicator == 0 ? 'TextIn' : 'TextOut'}
                                    transition={{ duration: .5, delay: 2 }}
                                    onAnimationComplete={variant => switchText(variant, 0)}
                                    variants={textVariants}
                                    className="absolute w-full h-full flex flex-col justify-center align-center" style={{ top: 0, left: 0 }}>
                                        <h1 className="text-7xl font-bold leading-tight">Sprzedajesz i myślisz, aby otworzyć dodatkowy kanał sprzedaży?</h1>
                                </motion.div>
                                <motion.div
                                    key={1}
                                    initial={{ y: 15, opacity: 0 }}
                                    animate={TextIndicator == 1 ? 'TextIn' : 'TextOut'}
                                    transition={{ duration: .5, delay: .5 }}
                                    onAnimationComplete={variant => switchText(variant, 1)}
                                    variants={textVariants}
                                    className="absolute w-full h-full flex flex-col justify-center align-center" style={{ top: 0, left: 0 }}>
                                        <h1 className="text-7xl font-bold leading-tight">Masz pomysł na genialny produkt, a nie wiesz jak zacząć?</h1>
                                </motion.div>
                                <motion.div
                                    key={2}
                                    initial={{ y: 15, opacity: 0 }}
                                    animate={TextIndicator == 2 ? 'TextIn' : 'TextOut'}
                                    transition={{ duration: .5, delay: .5 }}
                                    onAnimationComplete={variant => switchText(variant, 2)}
                                    variants={textVariants}
                                    className="absolute w-full h-full flex flex-col justify-center align-center" style={{ top: 0, left: 0 }}>
                                        <h1 className="text-7xl font-bold leading-tight">A może już działasz na Amazonie?</h1>
                                </motion.div>
                                <motion.div
                                    key={2}
                                    initial={{ opacity: 0 }}
                                    animate={TextIndicator == 3 ? 'TextIn' : 'TextOut'}
                                    transition={{ duration: .5, delay: .5 }}
                                    variants={textVariants}
                                    onAnimationComplete={variant => variant === "TextIn" ? setHeroMotionComplete(true) : "" }      
                                    className="absolute w-full h-full flex flex-col justify-center align-center" style={{ top: 0, left: 0 }}>
                                          <h1 className="text-7xl font-bold leading-tight mb-10">Globalne zasięgi sprzedażowe na wyciągnięcie ręki</h1>
                                          <h2 className="text-3xl">Poznaj naszą ofertę Amazon.</h2>
                                </motion.div>

                            </div>
                        </div>
                    </div>
                </div>    
            
                </motion.div>
            </div>
        </div>  

    </>
  )
}