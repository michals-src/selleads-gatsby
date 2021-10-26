import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'
import { motion } from 'framer-motion';

export default function Hero({ setHeroMotionComplete }) {

    const data = useStaticQuery(graphql`
        query {
            curology_DGH1u80sZik_unsplash: file(relativePath: {eq: "curology-DGH1u80sZik-unsplash.jpg"}) {
                childImageSharp {
                fluid(maxWidth: 2560) {
                    ...GatsbyImageSharpFluid
                }
                }
            } 
        }
    `);

    return (
        <>
            
            <div className="w-full flex flex-column flex-nowrap justify-center items-center relative" >
                <div className="h-full container mx-auto px-4 md:px-14 relative z-10 ">
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
                                fluid={data["curology_DGH1u80sZik_unsplash"].childImageSharp.fluid} />
                        </motion.div>
              
                        <motion.div className="absolute w-full h-full bg-black"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: .75, transition: { delay: 1.5, duration: .35, ease: [0, 0.6, 0.8, 0.9] } }}
                            style={{ left: 0, top: 0 }}
                        ></motion.div>

                        <div className="w-full h-screen flex flex-column items-center">
                            <div className="max-w-6xl p-20 mx-auto h-auto text-center relative z-10 text-white">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0, transition: { delay: 1.7, duration: 1, ease: [0, 0.6, 0.8, 0.9] } }}
                                >
                                    <div className="mb-10">
                                        <h1 className="text-8xl font-bold leading-tight">Twoje produkty</h1>
                                        <h1 className="text-8xl font-bold leading-tight">lubią o sobie mówić.</h1>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { delay: 2.1, duration: 0.5, ease: [0, 0.6, 0.8, 0.9] } }}
                                    onAnimationComplete={() => setHeroMotionComplete(true)}
                                >
                                    <h3 className="text-3xl leading-snug">Ale mogą to zrobić lepiej niż dotychczas</h3>
                                </motion.div>
                            </div>
                        </div>
            
                    </motion.div>
                </div>
            </div>

        </>
    )
}
