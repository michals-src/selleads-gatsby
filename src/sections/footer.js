import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'

import CookieConsent from "react-cookie-consent";

function Footer() {
    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText="Rozumiem"
                cookieName="selleads-cookies"
                >
                    Nasz strona internetowa wykorzystuje do prawidłowego działania pliki cookies. Każdy może zaakceptować pliki cookies albo ma możliwość wyłączenia ich w przeglądarce, dzięki czemu nie będą zbierane żadne informacje.
            </CookieConsent>

            <footer>
                <div className="container">
                    <div className="py3">
                        <div className="g-x">
                            <div className="small-4">Wszelkie prawa zastrzeżone. Selleads &copy; 2021</div>
                            <div className="small-8 text-right">
                                
                            <div className="navbar">
                                <nav>
                                    <ul className="nav">
                                        <li><Link href="/polityka-prywatnosci">Polityka prywatności</Link> </li>
                                        <li><Link href="/contact">Kontakt</Link> </li>
                                    </ul>
                                </nav>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
