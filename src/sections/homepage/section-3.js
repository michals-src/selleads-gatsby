import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

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
        Poznaj szczegóły
      </Button>
    </Link>
  )
}

function Section_3() {
  const data = useStaticQuery(graphql`
    query {
      mediensturmer_aWf7mjwwJJo_unsplash: file(
        relativePath: { eq: "mediensturmer-aWf7mjwwJJo-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      anirudh_wKeZstqxKTQ_unsplash: file(
        relativePath: { eq: "anirudh-wKeZstqxKTQ-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="my-32 text-white">
        <div className="container px-10 mx-auto pl-4 sm:pl-6 lg:pl-6 2xl:pl-14">
          <div className="bg-pastelGreen-400 rounded-3xl py-8 pl-32">
            <div className="flex flex-row flex-wrap items-center py-16">
              <div className="w-full lg:w-5/12 lg:pr-10">
                <div className="max-w-3xl ml-auto pl-4 sm:pl-6 lg:pl-6 2xl:pl-14">
                  <div className="h-full flex flex-col flex-nowrap justify-center">
                    <h2 className="text-6xl font-bold">Oferta Amazon.</h2>
                    <h3 className="text-2xl leading-10 tracking-normal mt-4 mb-10">
                      Zanurkuj z nami po sukces.
                    </h3>
                    <Hyper_Button to="/amazon" />
                  </div>
                </div>
              </div>
              <div className="w-6/12 ml-auto overflow-hidden rounded-l-3xl">
                <Img
                  className="w-full h-screen"
                  fluid={
                    data["anirudh_wKeZstqxKTQ_unsplash"].childImageSharp.fluid
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container px-10 mx-auto pl-4 sm:pl-6 lg:pl-6 2xl:pl-14">
          <div className="mt-16 bg-pastelGreen-400 rounded-3xl py-8 pl-32">
            <div className="py-10">
              <div className="h-full flex flex-row flex-wrap justify-center">
                <div className="w-full lg:w-6/12">
                  <h2 className="text-5xl font-bold">Oferta Copywriting.</h2>
                  <h3 className="text-3xl mt-4 mb-10">
                    Wyróżnij produkty, które sprzedajesz.
                  </h3>
                </div>
                <div className="w-full lg:w-6/12">
                  <div className="flex flex-row flex-nowrap justify-left lg:justify-center">
                    <Hyper_Button to="/copywriting" />
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

export default Section_3
