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
        bg={["bg-pastelGreen-100", "hover:bg-pastelGreen-600"]}
        color={["text-black", "hover:text-white"]}
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
          <div className="flex flex-row flex-wrap items-end">
            <div className="w-full lg:w-8/12 pr-0 md:pr-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-bold mb-14 leading-tight">
                Zwielokrotnijmy Twoje zasięgi
              </h1>
              <div className="max-w-lg">
                <h3 className="text-lg lg:text-2xl leading-10 tracking-normal">
                  Średnia konwersja dobrze zoptymalizowanego sklepu
                  internetowego to około 2-3%. Czyli na 1000 odwiedzających
                  Twoją witrynę, około 30 osób powinno dokonać zakupu. A co
                  jeśli zmianą sposobu prezentowania oferty dałoby się to
                  podwoić?
                </h3>
              </div>
            </div>
            <div className="w-full mt-10 lg:mt-0 lg:w-4/12">
              <div className="h-full flex flex-col items-left lg:items-center">
                <Hyper_Button to="/contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1
