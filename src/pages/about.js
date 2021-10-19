/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Helmet } from "react-helmet"

import '@styles/globals.css';
import '@styles/navigation.css';
import '@styles/cards.css';

import Navbar from '@sections/navbar'
import Footer from '@sections/footer'

import abountImage from '@images/about.png';
import aboutBG from '@images/aboutBG.png';
import plane from '@images/planeNEW.svg';

export default function Home() {

  return (
    <div>

      <Helmet>
          <meta charSet="utf-8" />
          <title>Selleads - O nas</title>
      </Helmet>

      <div className="py-14" >
          <Navbar />

        <div className="container mx-auto px-4">
          <div className="rounded-3xl" style={{ backgroundImage: `url(${aboutBG})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom right", backgroundColor: "#0c0c14", backgroundSize: "100% auto" }}>
            <div className="py-16">
              
              <div className="mx-auto my-32 px-16 text-white text-center">
                <p className="text-2xl">Poznaj nas</p>
                <h1 className="mb-0 text-6xl font-bold">Jesteśmy, aby pomóc w rozwoju</h1>
                <h1 className="mt-3 my-10 text-6xl font-bold">Twojego biznesu w sieci.</h1>
              </div>

              <div className="flex flex-row flex-wrap text-white py-32">
                <div className="w-5/12">
                  <div className="pl-16 py-10">
                    <p className="text-2xl">Nic nadzwyczajnego, kilku młodych chłopaków, którzy przez parę lat doświadczeń, rozwijania własnych linii produktowych i dziesiątek godzin spędzonych na nauce systemów E-commerce chcą pomagać rozwijać się innym.</p>
                  </div>
                  <div className="mt-2 pl-16 py-10">
                    <h3 className="text-4xl font-bold">Łatwo, naturalnie i z ludzkim podejściem do innych.</h3>
                  </div>
                </div>
                <div className="w-2/12"></div>
                <div className="w-4/12">
                    <img src={`${plane}`} width="100%" />
                </div>
                <div className="w-1/12"></div>
              </div>

            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-16">
          <div className="mt-32">
            <div className="flex flex-row flex-wrap">
              <div className="w-3/12 md:pr-16">
                <h1 className="text-6xl font-bold leading-tight">
                  Osoby zespołu Selleads.
                </h1>
              </div>
              <div className="ml-auto w-5/12">
                <div className="flex flex-row flex-wrap">
                  <div className="w-full">
                    <div className="border-b border-gray-300 flex flex-col justify-center h-100">
                      <div className="text-right p-16">
                        <p className="mb-0 text-2xl text-gray-500">Hubert Kowalewski</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="border-b border-gray-300 flex flex-col justify-center h-100">
                      <div className="text-right p-16">
                        <p className="mb-0 text-2xl text-gray-500">Rafał Łupiński</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col justify-center h-100">
                      <div className="text-right p-16">
                        <p className="mb-0 text-2xl text-gray-500">Michał Sierzputowski</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
{/* 
            <div className="container mt4">
                <div className="g-x fx icenter">
                    <div className="medium-5 small-12">
                        <p className="xlead mb1" style={{fontWeight: 800}}>Poznaj nas</p>
                        <p>Nic nadzwyczajnego, kilku młodych chłopaków, którzy przez parę lat doświadczeń, rozwijania własnych linii produktowych i dziesiątek godzin spędzonych na nauce systemów E-commerce chcą pomagać rozwijać się innym. Łatwo, naturalnie i z ludzkim podejściem do innych :)
                        </p>
                    </div>
                    <div className="medium-6 small-12 offset-medium-1">
                        <img src={abountImage} style={{ width: '100%' }}/>
                    </div>
                </div>
            </div> */}

      <Footer />
   
    </div>
  )
}
