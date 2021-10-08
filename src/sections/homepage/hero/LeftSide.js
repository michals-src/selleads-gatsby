import React from 'react'

import { motion} from "framer-motion"

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
            <h1 className="text-6xl font-bold">
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


function Hero_leftSide() {

    const banner = {
        animate: {
            transition: {
            delayChildren: 0.5,
            staggerChildren: 0.045,
            },
        },
    };

    return (
        <>    
            <motion.p
                initial={{ opacity: 0 }}
                animate={{  opacity: 1, transition: { ease: [0, -0.55, 0.45, 1], duration: 2, delay: 4.5}}}
                className="mb-6 text-xl text-green-700"
            >
                Zdobądź siłę przebicia.
            </motion.p>
            
            <motion.div variants={banner} initial="initial" animate="animate">
                <Atext text={"Zadbamy o widoczność Twoich produktów"} />
            </motion.div>
            
            {/* <motion.p
                initial={{ opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {
                        ease: [0, -0.55, 0.45, 1],
                        duration: 3,
                        delay: 5.5
                    }
                }}
                className="mt-8 text-lg"
            >
                Pomożemy Ci przygotować ofertę, która spełni oczekiwania nawet najbardziej wymagających klientów.
            </motion.p> */}

        </>
    )
}

export default Hero_leftSide
