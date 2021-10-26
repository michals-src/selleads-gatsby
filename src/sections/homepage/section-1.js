import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

function Section_1() {

    const data = useStaticQuery(graphql`
        query {
            unsplash_blake_wisz: 
                file(relativePath: {eq: "blake-wisz-Xn5FbEM9564.jpg"}) {
                childImageSharp {
                fluid(maxWidth: 1800) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }  
        }
  `);

    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
                {/* <div className="w-8/12 mx-auto mb-32">
                <h1 className="text-4xl text-center">
                    Pomożemy Ci przygotować ofertę, która spełni oczekiwania nawet najbardziej wymagających klientów.
                </h1>
                </div> */}

                <div className="flex flex-row flex-wrap">
                    <div className="w-6/12 border-r-2 border-b-4 border-white">
                        <div className="flex flex-col align-center p-16 text-center h-full">
                        <div className="mx-auto mb-10 text-pastelGreen-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                        </div>
                        <h5 className="text-2xl font-bold mb-3">Obsługujemy Twoje konta</h5>
                        <p className="px-10 2xl:px-32 text-lg">Na wybranych marketplace, a Ty śledzisz rezultaty.</p>
                        </div>
                    </div>
                    <div className="w-6/12 border-l-2 border-b-4 border-white">
                        <div className="flex flex-col align-center p-16 text-center h-full">
                        <div className="mx-auto mb-10 text-pastelGreen-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h5 className="text-2xl font-bold mb-3">Pomożemy Twojej firmie</h5>
                        <p className="px-10 2xl:px-32 text-lg">Wyjść na arenę międzynarodową.</p>
                        </div>
                    </div>
                    <div className="w-6/12 border-r-2 border-b-4 border-white">
                        <div className="flex flex-col align-center p-16 text-center bg-pastelGreen-150 rounded-tl-2xl h-full">
                        <div className="mx-auto mb-10 text-pastelGreen-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h5 className="text-2xl font-bold mb-3">Maksymalizujemy sprzedaż</h5>
                        <p className="px-10 2xl:px-32 text-lg">Bez wydawania fortuny na reklamy.</p>
                        </div>
                    </div>
                    <div className="w-6/12 border-l-2 border-b-2 border-white">
                    <div className="flex flex-col align-center p-16 text-center bg-pastelGreen-150 rounded-tr-2xl h-full">
                    <div className="mx-auto mb-10 text-pastelGreen-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                    </div>
                    <h5 className="text-2xl font-bold mb-3">Twoi klienci</h5>
                    <p className="px-10 2xl:px-32 text-lg">Sprawimy, że zostaną z Tobą na dłużej.</p>
                    </div>
                    </div>
                    <div className="w-6/12">
                        <div className="overflow-hidden rounded-bl-2xl">
                        <Img fluid={data.unsplash_blake_wisz.childImageSharp.fluid} className="object-fit" />
                        </div>
                    </div>
                    <div className="w-6/12 flex items-center border-2 border-pastelGreen-200 rounded-br-2xl">
                    <div className="flex flex-col justify-center py-16 px-32">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-10">
                        Pomożemy Ci przygotować ofertę.
                    </h1>
                    <p className="text-lg">Spełni oczekiwania nawet najbardziej wymagających klientów.</p>
                    </div>
                    </div>
                </div>

                <div className="flex flex-row flex-wrap align-center justify-center"> </div>

            </div>

        </>
    )
}

export default Section_1
