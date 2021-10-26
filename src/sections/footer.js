import React from 'react'
import { Link } from 'gatsby'
import CookieConsent from "react-cookie-consent";
import { useCookies } from 'react-cookie';

function Footer() {

    const [cookies, setCookie] = useCookies(['selleads-cookies-test']);

    const handleAcceptCookies = () => {
        setCookie('selleads-cookies-test', true, { path: '/' });
    }

    return (
        <div>
            { console.log(cookies['selleads-cookies-test']) }
            {/* <CookieConsent
                location="bottom"
                buttonText="Rozumiem"
                cookieName="selleads-cookies-ga"
                expires={365}
            >
                    Nasz strona internetowa wykorzystuje do prawidłowego działania pliki cookies. Każdy może zaakceptować pliki cookies albo ma możliwość wyłączenia ich w przeglądarce, dzięki czemu nie będą zbierane żadne informacje.
            </CookieConsent> */}

            <footer>
                <div className="mt-32 mb-10 py-14">
                    <div className="container mx-auto px-4 md:px-14">
                        <div className="p-16 rounded-lg bg-pastelGreen-250 flex flex-row flex-wrap">
                            <div className="w-6/12">
                                <h6 className="text-6xl leading-tight font-bold">
                                    Zdefiniuj swoje produkty na nowo.
                                </h6>
                                <h1 className="text-6xl leading-tight font-bold">
                                    <div className="mt-3">
                                        <span className="w-auto pr-6 inline-flex">
                                            <div><Link className="underline hover:no-underline" to="/contact">Kontakt</Link></div>
                                        </span>
                                        albo
                                    </div>
                                </h1>
                                <p className="text-2xl py-10 text-pastelGreen-600">selleads.office@gmail.com</p>
                            </div>
                            <div className="w-6/12 flex flex-col flex-nowrap items-end justify-between py-8">
                                <a href="#" className="text-pastelGreen-600 hover:text-pastelGreen-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-10 h-10" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                    </svg>
                                </a>
                                <ul className="mt-8 text-right text-2xl">
                                    <li><Link to="/regulamin">Regulamin</Link></li>
                                    <li className="my-4"><Link to="/polityka-prywatnosci">Polityka prywatności</Link></li>
                                    <li><Link to="/contact">Kontakt</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 md:px-14  py-14">
                    <div className="flex flex-row flex-nowrap">
                        <div className="w-6/12">
                            <p className="text-lg">Selleads &copy; 2021</p>
                        </div>
                        <div className="w-6/12 text-right">
                            <p className="text-lg">Wszelkie prawa zastrzeżone.</p>
                        </div>
                    </div>
{/*                     
                    <div className="py3">
                        <div className="g-x">
                            <div className="small-4"> </div>
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
                    </div> */}

                </div>
            </footer>
        </div>
    )
}

export default Footer
