import React from 'react'

import { Link } from 'gatsby'

function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="py3">
                        <div className="g-x">
                            <div className="small-4">Wszelkie prawa zastrzeżone. Selleads &copy; 2020</div>
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
