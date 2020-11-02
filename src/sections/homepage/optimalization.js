import React from "react"


import Container from '../../components/Container'
import Element from '../../components/Element'

import web_search_cards from '../../assets/images/web_search_cards.svg';

export default function Optimalization() {
  return (
    <>
    
    <Container>


      <Element my8>
        <div className="g-x">
          <div className="small-11 offset-small-1">
            <div className="g-x">
              <div className="medium-4">
                <img src={web_search_cards} />
              </div>
              <div className="medium-7 offset-medium-1">
                <h5 className="_mb4">Popraw swoją widoczność</h5>
                <p>Enim excepteur amet elit id sunt nulla exercitation mollit do laboris ipsum incididunt dolor cillum. Aliqua ad pariatur voluptate veniam esse deserunt deserunt do id culpa deserunt adipisicing reprehenderit ipsum. Eu est elit ipsum commodo fugiat labore fugiat elit ea eu ea laboris sint. Nulla dolor tempor aliqua qui labore in sint nostrud et. Proident Lorem reprehenderit consequat voluptate quis ea ea pariatur id mollit dolore dolor nulla pariatur.</p>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element my8>

        <div>
          <div className="g-y">
            <div className="small-8 offset-small-2">
                <h3>Zdobądź siłę przebicia</h3>
                <p>Culpa in aliqua quis irure quis eu culpa irure culpa mollit mollit qui consectetur. Elit nisi veniam proident excepteur est exercitation aliqua sit ut reprehenderit proident. Aliquip nisi et laborum anim deserunt cupidatat consequat magna cupidatat. Amet do aliquip nostrud ipsum.</p>
            </div>
          </div>
        </div>
        <div></div>

      </Element>

      </Container>
    
    </>
  )
}
