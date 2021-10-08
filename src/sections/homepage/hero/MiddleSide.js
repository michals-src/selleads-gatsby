import React from 'react'
import { motion } from "framer-motion"

import undraw_visual_data_re_mxxo from '@images/undraw_Data_report_re_p4so.svg';

function Hero_MiddleSide() {

    return (
        <>
            <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 1.7, duration: 0.5, ease: [0, -0.55, 0.45, 1]}}}
                  className="w-full relative z-10"
                >
                  <div className="relative z-10">
                    <div className="rounded-2xl overflow-hidden relative">
                      <img style={{
                      }} src={undraw_visual_data_re_mxxo} alt="Unsplash - Blake_Wisz_Pic" />
                      </div>
                    
                    {/* <motion.div variants={fIcons} initial="initial" animate="animate">
                      <FlyingIcons />
                    </motion.div> */}
                  </div>   
                </motion.div>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: [0, 400, 0], top: [0, 0, 400] }}
                  transition={{ ease: [0, 0.4, 0.75, 1], delay: 1, duration: 1.5, times: [0, 0.5, 1]}}
                  className="absolute w-full h-full z-20 bg-gray-800"
                  style={{ top: 0 }}
                ></motion.div>
              </div>
        </>
    )
}

export default Hero_MiddleSide
