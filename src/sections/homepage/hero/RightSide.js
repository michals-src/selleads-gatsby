import React from 'react'
import { Link } from 'gatsby';

import {AnimatePresence, motion} from "framer-motion"

import Button from '@components/Button';

const PaddingX = 8;

const Oferta_Naglowek = ({ naglowek }) => {
    return (
        <div className={`text-lg font-bold px-5 mb-3`}>{naglowek}</div>
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
            <Button rIcon={<Hyper_Button_Icon/>}>Poznaj szczegóły</Button>
        </Link>
    )
}

function Hero_RightSide() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1,
                  transition: { delay: 4, duration: 1.5, ease: [0, -0.55, 0.45, 1],
                  }
                }}
              >
              <div className="pl-20">
                <ul className="list-none">
                  <li className="h-full py-16 border-b border-gray-200">
                    <Oferta_Naglowek naglowek="Oferta Amazon." />
                    <Hyper_Button to="/" />
                  </li>
                  <li className="h-full py-16">
                    <Oferta_Naglowek naglowek="Copywriting." />
                    <Hyper_Button to="/" />
                  </li>
                </ul>
              </div>
              </motion.div>
            
        </>
    )
}

export default Hero_RightSide
