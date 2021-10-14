import React, {useState, useContext} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import { CookiesProvider } from 'react-cookie';

import courtainContext from './CourtainContext';

const useCourtain = () => {
    const [courtainVisible, setCourtainVisible ] = useState( true );
    return { courtainVisible, setCourtainVisible }
}

function ThemeContext({children, ...props}) {

    const courtainVal = useCourtain();

    const Courtain = () => {
        const { courtainVisible } = useContext(courtainContext);

        return (
            courtainVisible && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{duration: 1.5, times: [0, 0.5, 1]}}
                        className="curatin-transition absolute bg-gray-100 h-screen" style={{ top: 0, width: "50vw" }}></motion.div>
                    <motion.div className="curatin-transition absolute h-screen" style={{ width: "50vw", right: 0}}></motion.div>
                </>
            ) 
        )
    }

    return (
        <CookiesProvider>
            <courtainContext.Provider value={courtainVal}>
                {children}
                {/* <Courtain /> */}
            </courtainContext.Provider>
        </CookiesProvider>
    )
}

export default ThemeContext
