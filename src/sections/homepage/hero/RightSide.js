import React from 'react'
import { Link } from 'gatsby';

import {AnimatePresence, motion} from "framer-motion"

import Button from '@components/Button';

import undraw_online_ad_re_ol62 from '@images/undraw_online_ad_re_ol62.svg';
import boxBG from '@images/mediensturmer-aWf7mjwwJJo-unsplash.jpg';

const Oferta_Naglowek = ({ naglowek }) => {
    return (
        <div className={`text-3xl font-bold px-5 mb-3`}>{naglowek}</div>
    )
}

const Hyper_Button_Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
)

const Hyper_Button = ({ to }) => {
    return (
        <Link className="hover:no-underline" to={to}>
        <Button rIcon={<Hyper_Button_Icon />}
            bg={['bg-gray-100', 'hover:bg-gray-800']}
            color={['text-black', 'hover:text-white']}
        >Poznaj szczegóły</Button>
        </Link>
    )
}

function Hero_RightSide() {
    return (
        <>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1,
                  transition: { delay: 1.5, duration: 1.5, ease: [0, -0.55, 0.45, 1],
                  }
                }}
              >
              <div className="">
                <ul className="list-none text-center">
                  <motion.li whileHover={{ y: -15, transition: { duration: .3, ease: [0.15, 0.35, .8, 1]} }} className="h-full py-64 text-white px-10 mb-5 rounded-2xl" style={{ background: `#c9ecdc url(${boxBG}) center center no-repeat`, backgroundSize: "100% 100%" }}>
                    <Oferta_Naglowek naglowek="Oferta Amazon." />
                    <div className="mt-3 mb-8">
                    <p className="text-lg">Zanurkuj z nami po sukces.</p>
                    </div>
                    <Hyper_Button to="/" />

                  </motion.li>
                  <motion.li className="h-full py-16 px-10 rounded-2xl" style={{ background: "#c9ecdc" }}>
                    <Oferta_Naglowek naglowek="Copywriting." />
                    <Hyper_Button to="/" />
                  </motion.li>
                </ul>
              </div>
              </motion.div>
            
        </>
    )
}

export default Hero_RightSide
