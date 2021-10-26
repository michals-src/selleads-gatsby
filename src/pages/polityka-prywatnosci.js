/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet"

import '@styles/globals.css';
import '@styles/navigation.css';
import '@styles/cards.css';

import Navbar from '@sections/navbar'
import Footer from '@sections/footer'

const DecimalList = styled.ul`
    list-style: decimal;
`

export default function PrivacyPolicy() {

  return (
    <div>

      <Helmet>
          <meta charSet="utf-8" />
          <title>Selleads - Polityka prywatności</title>
      </Helmet>
      
        <div className="pt-14">
            <Navbar />
        </div>

        <div className="container mt-10 px-4 md:px-14">
            

            <h3 className="text-8xl font-bold text-pastelGreen-700">Polityka Cookies</h3>
            <div className="max-w-3xl mr-auto">
                <p className="my-16 text-2xl leading-10" >Poniższa Polityka Cookies określa zasady zapisywania i uzyskiwania dostępu do danych na Urządzeniach Użytkowników korzystających z Serwisu do celów świadczenia usług drogą elektroniczną przez Administratora Serwisu.</p>
            </div>

            <h5 className="mb-6 text-2xl">§ 1 Definicje</h5>
            <div className="pb-16 mb-16 border-b border-pastelGreen-150">
                <ul>
                    <li className="mb-2"><p><strong>Serwis</strong> - serwis internetowy działający pod adresem <span id="serwis"><span >www.selleads.pl</span></span></p></li>
                    <li className="mb-2"><p><strong>Serwis zewnętrzny</strong> - serwis internetowe partnerów, usługodawców lub usługobiorców Administratora</p></li>
                    <li className="mb-2"><p><strong>Administrator</strong> - firma <span id="firma"><span >Hukow Hubert Kowalewski</span>, prowadząca działalność pod adresem: <span >Warszawska 70/16, 15-078, Białystok</span>, o nadanym numerze identyfikacji podatkowej (NIP): <span >9662139144</span></span>, świadcząca usługi drogą elektroniczną za pośrednictwem Serwisu oraz przechowująca i uzyskująca dostęp do informacji w urządzeniach Użytkownika</p></li>
                    <li className="mb-2"><p><strong>Użytkownik</strong> - osba fizyczna, dla której Administrator świadczy usługi drogą elektroniczna za pośrednictwem Serwisu.</p></li>
                    <li className="mb-2"><p><strong>Urządzenie</strong> - elektroniczne urządzenie wraz z oprogramowaniem, za pośrednictwem, którego Użytkownik uzyskuje dostęp do Serwisu</p></li>
                    <li className="mb-2"><p><strong>Cookies (ciasteczka)</strong> - dane tekstowe gromadzone w formie plików zamieszczanych na Urządzeniu Użytkownika</p></li>
                </ul>
            </div>

            <h5 className="mb-6 text-2xl">§ 2 Rodzaje Cookies</h5>
            <div className="pb-16 mb-16 border-b border-pastelGreen-150">
                <ul>
                    <li><p><strong>Cookies wewnętrzne</strong> - pliki zamieszczane i odczytywane z Urządzenia Użytkownika przes system teleinformatyczny Serwisu</p></li>
                    <li><p><strong>Cookies zewnętrzne</strong> - pliki zamieszczane i odczytywane z Urządzenia Użytkownika przez systemy teleinformatyczne Serwisów zewnętrznych</p></li>
                    <li><p><strong>Cookies sesyjne</strong> - pliki zamieszczane i odczytywane z Urządzenia Użytkownika przez Serwis <span id="sz1" >lub Serwisy zewnętrzne</span> podczas jednej sesji danego Urządzenia. Po zakończeniu sesji pliki są usuwane z Urządzenia Użytkownika.</p></li>
                    <li><p><strong>Cookies trwałe</strong> - pliki zamieszczane i odczytywane z Urządzenia Użytkownika przez Serwis <span id="sz2" >lub Serwisy zewnętrzne</span> do momentu ich ręcznego usunięcia. Pliki nie są usuwane automatycznie po zakończeniu sesji Urządzenia chyba że konfiguracja Urządzenia Użytkownika jest ustawiona na tryb usuwanie plików Cookie po zakończeniu sesji Urządzenia.</p></li>
                </ul>
            </div>
              
            <h5 className="mb-6 text-2xl">§ 3 Bezpieczeństwo</h5>
            <div className="pb-16 mb-16 border-b border-pastelGreen-150">
                <ul>
                    <li><p><strong>Mechanizmy składowania i odczytu</strong> - Mechanizmy składowania i odczytu Cookies nie pozwalają na pobierania jakichkolwiek danych osobowych ani żadnych informacji poufnych z Urządzenia Użytkownika. Przeniesienie na Urządzenie Użytkownika wirusów, koni trojańskich oraz innych robaków jest praktynie niemożliwe.</p></li>
                    <li><p><strong>Cookie wewnętrzne</strong> - zastosowane przez Administratora Cookie wewnętrzne są bezpieczne dla Urządzeń Użytkowników</p></li>
                    <li><p><strong>Cookie zewnętrzne</strong> - za bezpieczeństwo plików Cookie pochodzących od partnerów Serwisu Administrator nie ponosi odpowiedzialności. Lista partnerów zamieszczona jest w dalszej części Polityki Cookie.</p></li>
                </ul>
            </div>

            <h5 className="mb-6 text-2xl">§ 4 Cele do których wykorzystywane są pliki Cookie</h5>
            <div className="pb-16 mb-16 border-b border-pastelGreen-150">
                <ul>
                    <li>
                        <p><strong><span >Usprawnienie i ułatwienie dostępu do Serwisu</span></strong> - Administrator może przechowywać w plikach Cookie informacje o prefernecjach i ustawieniach użytkownika dotyczących Serwisu aby usprawnić, polepszyć i przyśpieszyć świadczenie usług w ramach Serwisu.</p>
                    </li>
                    <li>
                        <p><strong><span >Marketing i reklama</span></strong> - Administrator <span id="sz3" >oraz Serwisy zewnętrzne</span> wykorzystują pliki Cookie do celów marketingowych oraz serwowania reklam Użytkowników.</p>
                    </li>
                    <li>
                        <p><strong><span >Dane statystyczne</span></strong> - Administrator <span id="sz4" >oraz Serwisy zewnętrzne</span> wykorzystuje pliki Cookie do zbirania i przetwarzania danych statystycznych takich jak np. statystyki odwiedzin, statystyki Urządzeń Użytkowników czy statystyki zachowań użytkowników. Dane te zbierane są w celu analizy i ulepszania Serwisu.</p>
                    </li>
                    <li>
                        <p><strong><span >Serwowanie usług multimedialnych</span></strong> - Administrator <span id="sz5" >oraz Serwisy zewnętrzne</span> wykorzystuje pliki Cookie do serwowania Użytkownikom usług multimedialnych.</p>
                    </li>
                    <li
                        ><p><strong><span >Usługi społecznościowe</span></strong> - Administrator <span id="sz7" >oraz Serwisy zewnętrzne</span> wykorzystują pliki Cookie do wsparcia usług społecznościowych</p>
                    </li>
                </ul>
            </div>
                
            <h5 className="mb-6 text-2xl">§ 5 Serwisy zewnętrzne</h5>
            <p className="text-lg">Administrator współpracuje z następującymi serwisami zewnętrznymi, które mogą zamieszczać pliki Cookie na Urządzeniach Użytkownika:</p>
            <div className="pb-16 mb-16 border-b border-pastelGreen-150">
              <ul className="list-decimal">
                    <li>
                        <p><strong><span >Google Analytics</span></strong></p>
                    </li>
                    <li>
                        <p><strong><span >Facebook</span></strong></p>
                    </li>
                </ul>
            </div>
              
            <h5 className="mb-6 text-2xl">§ 6 Możliwości określania warunków przechowywania i uzyskiwania dostępu na Urządzeniach Użytkownika przez Serwis<span id="sz6" > i Serwisy zewnętrzne</span></h5>
              <div className="pb-16 mb-16 border-b border-pastelGreen-150">
                  <ul className="list-decimal">
                    <li><p>Użytkownik może w dowolnym momencie, samodzielnie zmienić ustawienia dotyczące zapisywania, usuwania oraz dostępu do danych zapisanych plików Cookies</p></li>
                    <li><p>Informacje o sposobie wyłączenia plików Cookie w najpopularniejszych przeglądarkach komputerowych i urządzeń mobilnych dostępna są na stronie: <a href="http://jakwylaczyccookie.pl">jak wyłączyć cookie</a>.</p></li>
                    <li><p>Użytkownik może w dowolnym momencie usunąć wszelkie zapisane do tej pory pliki Cookie korzystając z narzędzi Urządzenia Użytkownika za pośrednictwem którego Użytkowanik korzysta z usług Serwisu.</p></li>
                  </ul>
              </div>

            <h5 className="mb-6 text-2xl">§ 7 Wyłączenie odpowiedzialności</h5>
              <div className="pb-16 mb-16 border-b border-pastelGreen-150">
                  <ul className="list-decimal">
                    <li>Administrator stosuje wszelkie możliwe środki w celu zapewnienia bezpieczeństwa danych umieszczanych w plikach Cookie. Należy jednak zwrócić uwagę, że zapewnienie bezpieczeństwa tych danych zależy od obu stron, w tym działalności Użytkownika oraz satnu zabezpieczeń urządzenia z którego korzysta.</li>
                    <li>Administrator nie bierze odpowiedzialności za przechwycenie danych zawartych w plikach Cookie, podszycie się pod sesję Użytkownika lub ich usunięcie, na skutek świadomej lub nieświadomej działalność Użytkownika, wirusów, koni trojańskich i innego oprogramowania szpiegującego, którymi może być zainfekowane Urządzenie Użytkownika.</li>
                    <li>Użytkownicy w celu zabezpieczenia się przed wskazanymi w punkcie poprzednim zagrożeniami powinni stosować się do <span id="cyber_random"><a href="https://nety.pl/cyberbezpieczenstwo/">zasad cyberbezpieczeństwa</a></span>.</li>
                    <li>Usługi świadczone przez podmioty trzecie są poza kontrolą Administratora. Podmioty te mogą w każdej chwili zmienić swoje warunki świadczenia usług, cel oraz wykorzystanie plików cookie. Administrator nie odpowiada na tyle na ile pozwala na to prawo za działanie plików cookies używanych przez serwisy partnerskie. Użytkownicy w każdej chwili mogą samodzielnie zarządzać zezwoleniami i ustawieniami plików cookie dla każedej dowolnej witryny.</li>
              </ul>
              </div>

            <h5 className="mb-6 text-2xl">§ 8 Wymagania Serwisu</h5>
              <div className="pb-16 mb-16 border-b border-pastelGreen-150">
                  <ul className="list-decimal">
                    <li><p>Ograniczenie zapisu i dostępu do plików Cookie na Urządzeniu Użytkownika może spowodować nieprawidłowe działanie niektórych funkcji Serwisu.</p></li>
                    <li><p>Administrator nie ponosi żadnej odpowiedzialności za nieprawidłowo działające funkcje Serwisu w przypadku gdy Użytkownik ograniczy w jakikolwiek sposób możliwość zapisywania i odczytu plików Cookie.</p></li>
                  </ul>
              </div>

            <h5 className="mb-6 text-2xl">§ 9 Zmiany w Polityce Cookie</h5>
              <div className="pb-16 mb-16">
                  <ul className="list-decimal">
                    <li><p>Administrator zastrzega sobie prawo do dowolnej zmiany niniejszej Polityki Cookie bez konieczności informowania o tym użytkowników.</p></li>
                    <li><p>Wprowadzone zmiany w Polityce Cookie zawsze będą publikowane na tej stronie.</p></li>
                    <li><p>Wprowadzone zmiany wchodzą w życie w dniu publikacji Polityki Cookie.</p></li>
                  </ul>
              </div>

        </div>

      <Footer />
   
    </div>
  )
}
