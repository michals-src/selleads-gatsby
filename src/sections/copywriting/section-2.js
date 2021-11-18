import React from "react"
import { Link } from "gatsby"

import Button from "@components/Button"

const Hyper_Button_Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="fill-current h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
)

const Hyper_Button = ({ to }) => {
  return (
    <Link className="hover:no-underline" to={to}>
      <Button
        rIcon={<Hyper_Button_Icon />}
        bg={["bg-pastelGreen-700", "hover:bg-pastelGreen-400"]}
        color={["text-white", "hover:text-white"]}
        className="shadow-xl"
      >
        Udoskonalmy Twoje oferty
      </Button>
    </Link>
  )
}

function Section1() {
  return (
    <>
      <div className="py-32 w-full overflow-hidden bg-pastelGreen-400 text-white">
        <div className="container mx-auto px-8 md:px-14">
          <div>
            <div className="w-full mx-auto py-32">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-9xl font-bold mb-14 leading-tight">
                <span className="text-pastelGreen-300">Zwielokrotnijmy</span>{" "}
                <span className="text-pastelGreen-200">Twoje</span>{" "}
                <span>zasięgi</span>
              </h1>
            </div>
            <div className="w-full ">
              <div className="p-14 rounded-t-3xl">
                <div className="container mx-auto px-4 md:px-14">
                  <div className="max-w-lg mr-auto">
                    <h3 className="h4 text-6xl font-bold mb-10">Opisy</h3>
                    <div className="text-lg lg:text-2xl tracking-normal leading-10">
                      Oferty produktowe opowiadają historie. Jedne są
                      pociągające, inne nudne jak flaki z olejem.
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-14 py-32 my-5 bg-white text-black rounded-3xl">
                <div className="text-center">
                  <div className="px-4 md:px-14">
                    <h3 className="h4 text-6xl font-bold text-pasterGreen-300 mb-10">
                      Kluczowe korzyści dla klienta.
                    </h3>
                  </div>
                  <div className="max-w-2xl mx-auto px-4 md:px-14">
                    <div className="max-w-2xl mx-auto">
                      <div className="text-2xl lg:text-2xl tracking-normal leading-10">
                        Wspólnie stworzymy oferty, które będą powodowały szybsze
                        bicie serca u każdego kto ją przeczyta.
                      </div>
                      <div className="mt-20">
                        <Hyper_Button to="/contact" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-14 text-white rounded-b-3xl">
                <div className="max-w-2xl text-right ml-auto px-4 md:px-14">
                  <div className="max-w-lg mr-auto">
                    <h3 className="h4 text-6xl font-bold text-pasterGreen-300 mb-10">
                      Nagłówki
                    </h3>
                    <div className="text-lg lg:text-2xl tracking-normal leading-10">
                      Ludzie z reguły wolą kupować niż czuć, że ktoś im coś
                      sprzedaje.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1
