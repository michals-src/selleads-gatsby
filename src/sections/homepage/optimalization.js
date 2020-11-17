import React from "react"
import styled, {keyframes} from "styled-components";

import Container from '../../components/Container'
import Element from '../../components/Element'

import web_search_cards from '../../assets/images/web_search_cards.svg';

const CardMovingDOWNAnimation = keyframes`
  30%{ transform: translateY(0) }
  50%{ transform: translateY(97px) }
  100%{ transform: translateY(97px) }
`

const CardMovingUPAnimation = keyframes`
  30%{ transform: translateY(0) }
  50%{ transform: translateY(-194px) }
  100%{ transform: translateY(-194px) }
`

const CardContentMovingUPAnimation = keyframes`
  40%{ background: #ceecea; }
  50%{ background: #ffc215; }
  100%{ background: #ffc215; }
`

const BrowsingAnimationAnachorAnimate = keyframes`
  0%{ opacity: 0; }
  100%{ opacity: 1; }
`
const BrowsingAnimationInputTextAnimate = keyframes`
  0%{ width: 0; }
  20%{ width: 0; }
  40%{ width: 60%; }
  100%{ width: 60%; }
`
const BrowsingAnimationListAnimate = keyframes`
  0%{ opacity: 0; }
  20%{ opacity: 0; }
  40%{ opacity: 1; }
  100%{ opacity: 1; }
`
const BrowsingAnimationListItemAnimate = keyframes`
  0%,30%{ background: #ceecea; }
  35%{ background: #ffc215; }
  100%{ background: #ffc215; }
`

const WebCards = styled.div``

const WebCard = styled.div`
  padding: 15px;
  border: 1px solid #c1dce8;
  border-radius: 5px;
  width: 100%;
  background: #fff;
  animation-fill-mode: forwards;

  &.one{
    animation: ${CardMovingDOWNAnimation} 3.4s linear 1s infinite;
  }
  
  &.two{
    animation: ${CardMovingDOWNAnimation} 3.4s linear 1s infinite;
  }
  
  &.three{
    animation: ${CardMovingUPAnimation} 3.4s linear 1s infinite;
  }

`

const WebCardImage = styled.div`
  background: #ceecea;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  .three &{
    animation: ${CardContentMovingUPAnimation} 3.4s linear 1s infinite;
  }
`

const WebCardContent = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: #ceecea;
  
  .three &{
    animation: ${CardContentMovingUPAnimation} 3.4s linear 1s infinite;
  }

`


const BrowsingAnimation = styled.div``

const BrowsingInput = styled.div`
  padding: 15px;
  border: 1px solid #ceecea;
  border-radius: 15px;
  display: flex;
  flex-direaction: row;
  flex: auto;
  align-items: center;
`

const BrowsingInputAnachor = styled.div`
  width: 2px;
  height: 15px;
  background: #000;
  animation: ${BrowsingAnimationAnachorAnimate} 1s linear 0s infinite;
`

const BrowsingInputText = styled.div`
  width: 0%;
  height: 10px;
  background: #ceecea;
  margin-right: 5px;
  border-radius: 5px;
  animation: ${BrowsingAnimationInputTextAnimate} 5.25s linear 0s infinite;
`

const BrowsingList = styled.div`
  opacity: 0;
  width: 90%;
  padding: 25px;
  margin: 0 auto;
  border-radius: 0 0 10px 10px;
  border-left: 1px solid #ceecea;
  border-right: 1px solid #ceecea;
  border-bottom: 1px solid #ceecea;
  animation: ${BrowsingAnimationListAnimate} 5.25s linear 0s infinite;
`

const BrowsingListItem = styled.div`
  width: 100%;
  height: 10px;
  background: #ceecea;
  margin: 10px 0;
  border-radius: 5px;

  &.one {
    animation: ${BrowsingAnimationListItemAnimate} 5.25s linear 0s infinite;
  }
`


export default function Optimalization() {
  return (
    <>
    
    <Container>


      <Element my2>
        <div className="g-x">
          <div className="small-12">
            <div className="g-x fx icenter">
              <div className="medium-4">
                
                <WebCards>
                  
                  <WebCard className="mb1 one">
                    <div className="g-x fx icenter">
                      <div className="small-3 _pr1">
                        <WebCardImage />
                      </div>
                      <div className="small-9 _pr3">
                        <div className="g-x fx icenter">
                          <div className="small-4 _pr1 _pb1"><WebCardContent /></div>
                          <div className="small-8 _pl1 _pb1"><WebCardContent /></div>
                          
                          <div className="small-3 _pr1 _py1"><WebCardContent /></div>
                          <div className="small-4 _px1 _py1"><WebCardContent /></div>
                          <div className="small-5 _pl1 _p1"><WebCardContent /></div>

                          <div className="small-5 _pr1 _py1"><WebCardContent /></div>
                          <div className="small-2 _px1 _py1"><WebCardContent /></div>
                          <div className="small-5 _pl1 _p1"><WebCardContent /></div>
                        </div>
                      </div>
                    </div>
                  </WebCard>

                  <WebCard className="mb1 two">
                    <div className="g-x fx icenter">
                      <div className="small-3 _pr1">
                        <WebCardImage />
                      </div>
                      <div className="small-9 _pr3">
                        <div className="g-x fx icenter">
                          <div className="small-4 _pr1 _pb1"><WebCardContent /></div>
                          <div className="small-8 _pl1 _pb1"><WebCardContent /></div>
                          
                          <div className="small-3 _pr1 _py1"><WebCardContent /></div>
                          <div className="small-4 _px1 _py1"><WebCardContent /></div>
                          <div className="small-5 _pl1 _p1"><WebCardContent /></div>

                          <div className="small-5 _pr1 _py1"><WebCardContent /></div>
                          <div className="small-2 _px1 _py1"><WebCardContent /></div>
                          <div className="small-5 _pl1 _p1"><WebCardContent /></div>
                        </div>
                      </div>
                    </div>
                  </WebCard>

                  <WebCard className="mb1 three">
                    <div className="g-x fx icenter">
                      <div className="small-3 _pr1">
                        <WebCardImage />
                      </div>
                      <div className="small-9 _pr3">
                        <div className="g-x fx icenter WebCardContentThree">
                          <div className="small-4 _pr1 _pb1"><WebCardContent /></div>
                          <div className="small-8 _pl1 _pb1"><WebCardContent /></div>
                          
                          <div className="small-3 _pr1 _py1"><WebCardContent /></div>
                          <div className="small-4 _px1 _py1"><WebCardContent /></div>
                          <div className="small-5 _pl1 _p1"><WebCardContent /></div>

                          <div className="small-5 _pr1 _py1"><WebCardContent /></div>
                          <div className="small-2 _px1 _py1"><WebCardContent /></div>
                          <div className="small-5 _pl1 _p1"><WebCardContent /></div>
                        </div>
                      </div>
                    </div>
                  </WebCard>

                </WebCards>

              </div>
              <div className="medium-6 offset-medium-2">
                <p className="xlead _mb4">Popraw swoją widoczność</p>
                <p>Oddając nam swoje produkt pod opiekę możesz liczyć na wzrost sprzedaży, poprawimy jego zasięgi w Twoich kategoriach.</p>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element my4>

        <div>
          <div className="g-x fx icenter">
            <div className="small-7">
                <p className="xlead _mb4">Zdobądź siłę przebicia</p>
                <p>Wyświetlaj się na samych szczytach wyszukiwarek, Twoje produkty lub marka będzią widoczna na pierwszych miejscach listy wyszukiwarek.</p>
            </div>
            <div className="small-4 offset-small-1">
              <BrowsingAnimation>
                <BrowsingInput>
                  <BrowsingInputText />
                  <BrowsingInputAnachor />
                </BrowsingInput>
                <BrowsingList>
                  <BrowsingListItem className="one"></BrowsingListItem>
                  <BrowsingListItem></BrowsingListItem>
                  <BrowsingListItem></BrowsingListItem>
                  <BrowsingListItem></BrowsingListItem>
                </BrowsingList>
              </BrowsingAnimation>
            </div>
          </div>
        </div>

      </Element>

      </Container>
    
    </>
  )
}
