import React from "react"

function Section1() {
  return (
    <>
      <div className="py-32">
        <div className="container mx-auto px-4 md:px-14">
          <div className="flex flex-row flex-wrap">
            <div className="w-full lg:w-6/12 xl:w-5/12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-bold leading-0">
                Inwestujemy w marketing, pozycjonowanie czy płatne współprace.
              </h1>
            </div>
            <div className="w-full"></div>
            <div className="w-full lg:w-6/12 ml-auto"></div>
            <div className="max-w-xl ml-auto mt-10 lg:mt-20">
              <h3 className="text-lg lg:text-xl 2xl:text-2xl tracking-normal leading-10 text-pastelGreen-500">
                To dobrze, bo w obecnych czasach bez inwestowania w reklamę
                trudno pokazać się światu. Ale czy zadbaliśmy, aby nasza oferta
                była naprawdę atrakcyjna? Ile warte są kliknięcia, które nie
                powodują zamknięcia transakcji?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1
