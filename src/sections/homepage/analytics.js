import React from "react"


import Container from '../../components/Container'
import Element from '../../components/Element'

import map_image from '../../assets/images/undraw_connected_world_wuay.svg';

const tabs = () => {
  return [
    // Amazon
    {
      "title" : "Worldwide.",
      "content" : "Amazon to największa na świecie platforma sprzedażowa. W USA odpowiada za 45% sprzedaży dokonanych w Internecie.",
      "size": "medium-3 small-12"
    },
    {
      "title" : "Prime.",
      "content" : "Ponad 100 milionów ludzi na świecie posiada konto Prime, jest ich więcej, niż osób bez Prime.",
      "size": "medium-3 small-12"
    },
    {
      "title" : "Cała Europa na wyciągnięcie ręki.",
      "content" : "Amazon otworzył rynki w 6 europejskich krajach Niemczech, Wielkiej Brytanii, Francji, Włoszech, Hiszpanii oraz Holandii. Dzięki takiej infrastrukturze, sprzedając na platformie jesteśmy w stanie dotrzeć, aż do 28 krajów leżących w Europie.",
      "size": "medium-6 small-12"
    },
  ];
}

const Tabs = () => {
  return (
    tabs().map((tab) => {

      return (
        
        
        <div className={`${tab.size ? tab.size : `medium-3`} _px8 mb2`}>
          <div className="_mb6">
            <h6>{tab.title}</h6>
          </div>
          <p>{tab.content}</p>
        </div>

      );

    })
  );
}

const Icon_Worldwide = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="m-auto fill-current h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
    </svg>
  )
}

const Icon_Prime = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="m-auto fill-current h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
    </svg>
  )
}

const Series_Col = ({ tytul, opis, ikona, color }) => {
  return (
    <div className="p-4 h-full">
      <div className={`flex content-center h-full border-green-100 rounded-md`}>
        <div className="flex flex-row flex-nowrap items-center">
          <div className="w-7/12">
            <div className="my-4">
              <h1 className="text-3xl font-bold text-green-800">
                {tytul}
              </h1>
            </div>
            <p className="text-lg">{opis}</p>
          </div>
          <div className={`w-4/12 ml-auto text-green-800`}>
            { ikona }
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Analytics() {
  return (
    <>
    
      <div className="container px-4 md:px-14 mx-auto">

        <div className="flex flex-wrap my-64">
          <div className="w-full">
            <h6 className="text-xl text-green-700 mb-6">Pokaż się innym.</h6>
          </div>
          <div className="w-full md:w-6/12 md:pr-16">
            <h1 className="text-6xl font-bold"><span>Wyświetlaj się częściej,</span> więcej i trafniej.</h1>
          </div>
          <div className="w-full md:w-5/12 md:pl-10 md:pr-10 ml-auto">
            <p className="text-lg">Uszyjmy Twoje reklamy, na miarę Twoich klientów. Przygotujmy lejek sprzedażowy, który zbierze najbardziej lojalnych i zainteresowanych Twoim produktem kupujących.</p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 -ml-4 flex flex-col justify-between">

            <Series_Col
              tytul="Worldwide."
              opis="Amazon to największa na świecie platforma sprzedażowa. W USA odpowiada za 45% sprzedaży dokonanych w Internecie."
              ikona={<Icon_Worldwide />}
              color="green"
            />

            <Series_Col
              tytul="Prime."
              opis="Ponad 100 milionów ludzi na świecie posiada konto Prime, jest ich więcej, niż osób bez Prime."
              ikona={<Icon_Prime />}
              color="blue"
            />
          
          </div>
          <div className="w-full md:w-6/12 md:-ml-0">
            <div className="h-full p-4 h-full">
              <div className="flex flex-col justify-left h-full p-14 bg-green-900 text-white rounded-md">
                <div className="">
                  <div className="my-14 text-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-28 w-28" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="my-4"><h1 className="text-2xl font-bold">Cała Europa na wyciągnięcie ręki.</h1></div>
                  <p className="text-lg">Amazon otworzył rynki w 6 europejskich krajach Niemczech, Wielkiej Brytanii, Francji, Włoszech, Hiszpanii oraz Holandii. Dzięki takiej infrastrukturze, sprzedając na platformie jesteśmy w stanie dotrzeć, aż do 28 krajów leżących w Europie.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
          
    </>
  )
}
