import React from "react"
import styled, {keyframes} from "styled-components";

import Container from '../../components/Container'
import Element from '../../components/Element'

import web_search_cards from '../../assets/images/web_search_cards.svg';
import i1 from '@images/blake-wisz-Xn5FbEM9564-unsplash.jpg';

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


const BootstrapIcons = {
  chat_dots : () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-dots-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    </svg>
    )
  },
  blockquote_left : () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-blockquote-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm5 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
        <path d="M3.734 6.352a6.586 6.586 0 0 0-.445.275 1.94 1.94 0 0 0-.346.299 1.38 1.38 0 0 0-.252.369c-.058.129-.1.295-.123.498h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 0 1-.187.463c-.12.14-.289.21-.503.21-.336 0-.577-.108-.721-.327C2.072 8.619 2 8.328 2 7.969c0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352zm2.168 0a6.588 6.588 0 0 0-.445.275 1.94 1.94 0 0 0-.346.299c-.113.12-.199.246-.257.375a1.75 1.75 0 0 0-.118.492h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 0 1-.187.463c-.12.14-.289.21-.504.21-.335 0-.576-.108-.72-.327-.145-.223-.217-.514-.217-.873 0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352z"/>
      </svg>
    )
  },
  envelope_fill : () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
      </svg>
    )
  },
  signpost_fill : () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-signpost-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1.414V4h2V1.414a1 1 0 0 0-2 0zM1 5a1 1 0 0 1 1-1h10.532a1 1 0 0 1 .768.36l1.933 2.32a.5.5 0 0 1 0 .64L13.3 9.64a1 1 0 0 1-.768.36H2a1 1 0 0 1-1-1V5zm6 5h2v6H7v-6z"/>
      </svg>
    )
  },
  bar_chart_fill : () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bar-chart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect width="4" height="5" x="1" y="10" rx="1"/>
        <rect width="4" height="9" x="6" y="6" rx="1"/>
        <rect width="4" height="14" x="11" y="1" rx="1"/>
      </svg>
    )
  },
  info_circle_fill : () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
      </svg>
    )
  },
}

const SolutionItemWrapper = styled.div`
text-align: right;
  background-size: cover;
  padding: 25px;
  color: #4e7284;
`

const BI = styled.div`
  font-size: 16px;
  margin: 0 auto;
`

const Abc = styled.div`
  width: 100%;
  height: 600px;
  background: url(${i1});
  background-size: cover;
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 10px;
`

const solutions = [
  [ BootstrapIcons.chat_dots, 'Tytuł' ],
  [ BootstrapIcons.blockquote_left, 'Tytuł' ],
  [ BootstrapIcons.envelope_fill, 'Tytuł' ],
  [ BootstrapIcons.signpost_fill, 'Tytuł' ],
  [ BootstrapIcons.bar_chart_fill, 'Tytuł' ],
  [ BootstrapIcons.info_circle_fill, 'Tytuł' ],
];

const SolutionsWrapperAlpha = styled.div`
  max-width: 2100px;
  margin: 0 auto;
`
const SolutionsAlphaHero = styled.div`
  max-width: 100%;
  background: url(${i1}) center no-repeat;
  background-size: cover;
  color: #fff;
  height: 70vh;
  display: flex;
  align-items: center;
  text-align: center;
`

const SolutionItemTitlePath = styled.div`
  width: 100%;
  height: 2px;
  background: #000;
`

const SolutionItem = ({icon, title}) => {
  return (
    <SolutionItemWrapper>
      <div className="g-x fx icenter">
        <div className="small-3 text-center">
          <BI>
            { icon() }
          </BI>
        </div>
        <div className="small-9 text-left">
          <p>
            { title }
          </p>
        </div>
      </div>
    </SolutionItemWrapper>
  )
};


export default function Optimalization() {
  return (
    <>
    
    <Container>


      <Element my2>
        <div className="g-x">
          <div className="small-12">
            <div className="g-x fx icenter">
              <div className="medium-4 small-12">
                
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
                <p className="xlead _mb4">Popraw swoją widoczność.</p>
                <p>Wyświetlaj się częściej, więcej i trafniej. Uszyjmy Twoje reklamy, na miarę Twoich klientów. Przygotujmy lejek sprzedażowy, który zbierze najbardziej lojalnych i zainteresowanych Twoim produktem kupujących.</p>
              </div>
            </div>
          </div>
        </div>
      </Element>
</Container>
      
      <SolutionsWrapperAlpha>
        <SolutionsAlphaHero>
          <Container>
            <p className="xlead _mb1">Rozwiązania, które wdrożymy dla Twojej firmy</p>
            <p className=" _mb8">Kreowane naszym doświadczeniem oraz potrzebami użytkowników</p>
          </Container>
        </SolutionsAlphaHero>
        {/* <Container>
          <div className="g-x fx icenter mt3 ">
            <div className="medium-6">
              <div className="g-x fx icenter">
                { solutions.map( (e) => {
                  return <div className="small-6"><SolutionItem icon={e[0]} title={e[1]}/></div>
                })
                }
              </div>
            </div>
            <div className="medium-5 offset-medium-1 _pl4">
              <p>Przegladając naszą ofertę możesz zobaczyć wiele innych naszych opcji rozwoju dla Twojej firmy. Allegro bądź Amazon, jeżeli, któraś z platform przykuła Twoją uwagę w celu rozwinięcia twojej kampanii przejrzyj naszą ofertę dla wybranego serwisu i zapoznaj się ze szczegółami naszych działań, które wprowadzą Ciebie i twóją firmę na szczyt.</p>
            </div>
          </div>
        </Container> */}
      </SolutionsWrapperAlpha>

  <Container>
      <Element my4>

        <div>
          <div className="g-x fx icenter">
            <div className="medium-7 small-12 mb2">
                <p className="xlead _mb4">Zdobądź siłę przebicia.</p>
                <p>Pomożemy Ci przygotować ofertę, która spełni oczekiwania nawet najbardziej wymagających klientów, a algorytm wraz z upływem czasu zacznie pozycjonować Twoją ofertę coraz wyżej. Aż dojdzie do samej góry. </p>
            </div>
            <div className="medium-4 small-12 offset-medium-1">
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
