import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet"

import '@styles/globals.css';
import '@styles/navigation.css';
import '@styles/cards.css';

import Navbar from '@sections/navbar'
import Footer from '@sections/footer'

import background from '@images/contact_background.jpg';

const PageWrapper = styled.div`
    background: url(${background}) center no-repeat;
`

const FormWrapper = styled.div`
    padding: 30px 40px;
    /*border: 1px solid #a3e2d9;*/
    border-radius: 5px;
    box-shadow: 0 15px 25px rgb(163 226 217 / 31%);
    background: #fff;
`

const InputGroup = styled.div`
    margin-top: 10px;
    margin-bottom: 30px;
    padding: 0;
    display: block;
`

const Label = styled.label`
    margin-bottom: 5px;
    font-size: 14px;
    color: #000;
    width: 100%:
`

const LabelAfter = styled.div`
    font-size: 12px;
    color: red;
`

const InputText = styled.input`
    border-radius: 5px;
    border: 1px solid #91cec5;
    outline: none;
    padding: 8px 12px;
    width: 100%;

    &:focus{
        box-shadow: 0 0 8px rgb(163 226 217 / 80%);
    }

    &.invalid-control{
        border-color: #d01010;
        box-shadow-color: #d01010;
    }
`

const Textarea = styled.textarea`
    border-radius: 5px;
    border: 1px solid #91cec5;
    outline: none;
    padding: 8px 12px;
    width: 100%;

    &:focus{
        box-shadow: 0 0 8px rgb(163 226 217 / 80%);
    }

    &.invalid-control{
        border-color: #d01010
    }
`
const Figure = styled.div`
    padding: 35px 50px;
    text-align: center;
    background: #fff;
    font-size: 21px;

    &.special{
        box-shadow: 0 10px 25px rgb(163 226 217 / 40%);
    }
`

const Textcolor = styled.p`
    color: #91cec5;
`

const MsgSuccess = styled.div`
    background: #91cec53d;
    border-radius: 10px;
    box-shadow: 0 5px 15px #91cec54f;
    border: 1px solid #c5d8ea;
    color: #197366;
`

const MsgError = styled.div`
    background: #ffebe7;
    border: 1px solid #f1d5d5;
    color: #c34343;
    border-radius: 10px;
    box-shadow: 0 5px 15px #ff00001a;
`

const CenterWrapper = styled.div`
    margin: 0 auto;
    max-width: 450px;
`

export default function Contact() {

    const [FormDetails, setFormDetails] = useState({
        "contact_name" : "",
        "contact_email" : "",
        "contact_phone" : "",
        "contact_message" : ""
    });

    const [FormMsg, setFormMsg] = useState("");
    const [Err, setErr] = useState("");

    const onContactFormChange = (e) => {
        setFormDetails({
            ...FormDetails,
            [e.target.name]: e.target.value
        })
    };

    const handleContact = (e) => {
        
        e.preventDefault();

        if(FormDetails['contact_phone'] == "" ){
            FormDetails['contact_phone'] = "Nie wpisano";
        }

        let err = Object.values(FormDetails).indexOf("");
        if( err !== -1 ) return setFormMsg('error-control');

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...FormDetails })
            })
            .then(() => setFormMsg("success"))
            .catch(error => setFormMsg("error"));
        
        if(FormDetails['contact_phone'] == "Nie wpisano" ){
            FormDetails['contact_phone'] = "";
        }

    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const controlClass = FormMsg == "error-control" ? "invalid-control" : "";

    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Selleads - Kontakt</title>
        </Helmet>

        <div className="py-14 bg-gradient-to-b from-gray-200 to-gray-white ">
            <Navbar />

            <div className="container pr-4 md:pr-14 mx-auto">
                <div className="flex flex-row flex-nowrap">
                    <div className="w-2/12"></div>
                    <div className="w-10/12">
                        <div className="max-w-3xl">
                            <div className="my-16">
                                <h1 className="text-6xl leading-tight font-bold">
                                    Bądźmy w kontakcie.
                                </h1>
                                <p className="mt-5 text-lg">
                                    Jeśli chcesz dowiedzieć się czegoś więcej, po prostu do nas napisz
                                    <span className="mx-1 text-green-800 inline-flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                </p>
                                <p className="mb-14 text-lg">
                                    Chętnie przygotujemy indywidualną ofertę i plan działania dla każdego klienta osobno, a na wasze pytania odpowiemy maksymalnie w ciągu 24 godzin.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div>
                <div className="flex flex-row flex-nowrap">
                    <div className="w-2/12 ml-auto h-auto pt-36">
                        <h3 className="h-auto text-2xl font-bold p-6" style={{ transform: "rotate(90deg)" }}>
                            Napisz do nas.
                        </h3>
                    </div>
                    <div className="w-10/12">
                        <div className="max-w-6xl mr-auto">
                            <div className="p-14 bg-gray-100 border-b-2 border-white">
                                <h4 className="text-2xl mb-3 font-bold">
                                    O czym chcesz napisać ?
                                </h4>
                                <p className="text-lg mb-10">Opisz swoją działalność, albo zadaj nam pytanie.</p>
                                <div className="flex flex-row flex-nowrap">
                                    <textarea rows="6" type="text" placeholder="Im dokładniej opiszesz wiadomość, tym lepiej." className="w-full rounded-lg border border-gray-200 shadow-lg py-3 px-7 text-gray-800" />
                                </div>
                            </div>

                            <div className="p-14 bg-gray-100 border-b-2 border-white">
                                <h4 className="text-2xl mb-3 font-bold">
                                    Przedstaw się.
                                </h4>
                                <p className="text-lg mb-10">Pozwól nam Ciebie poznać.</p>
                                <div className="flex flex-row flex-nowrap">
                                    <div className="w-6/12 pr-5 mb-5">
                                        <input type="text" placeholder="Imię" className="w-full rounded-lg border border-gray-200 shadow-lg py-3 px-7 text-gray-800"/>
                                    </div>
                                    <div className="w-6/12 mb-5">
                                        <input type="text" placeholder="Nazwisko" className="w-full rounded-lg border border-gray-200 shadow-lg py-3 px-7 text-gray-800"/>
                                    </div>
                                    
                                </div>
                                <div className="w-full">
                                    <input type="text" placeholder="Firma (opcjonalne)" className="w-full rounded-lg border border-gray-200 shadow-lg py-3 px-7 text-gray-800"/>
                                </div>
                            </div>

                            <div className="p-14 bg-gray-100 border-b-2 border-white">
                                <h4 className="text-2xl mb-3 font-bold">
                                    Informaje kontaktowe.
                                </h4>
                                <p className="text-lg mb-10">W jaki sposób mozemy się z Tobą skontaktować.</p>
                                <div className="w-full mb-5">
                                    <input type="email" placeholder="E-mail" className="w-full rounded-lg border border-gray-200 shadow-lg py-3 px-7 text-gray-800"/>
                                </div>
                                <div className="w-full">
                                    <input type="phone" placeholder="Telefon (opcjonalne)" className="w-full rounded-lg border border-gray-200 shadow-lg py-3 px-7 text-gray-800"/>
                                </div>
                            </div>
                            <div className="p-14 bg-gradient-to-b from-gray-200 to-gray-white border-b-2 border-white">
                                <button className="w-full py-3 px-8 bg-gray-900 hover:bg-gray-800 text-gray-100 hover:text-gray-200 rounded-lg">Wyślij wiadomość</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-14">
                <div className="my-32">
                    <div className="flex flex-row flex-nowrap">
                        <div className="w-4/12 pr-10 lg:pr-20">
                            <div className="mb-10 text-right">
                                <p className="text-base mb-2">Nazwa firmy</p>
                                <h6 className="text-2xl">Hukow</h6>
                            </div>
                        </div>
                        <div className="w-8/12">
                            <h1 className="text-6xl font-bold">Kilka informacji</h1>
                            <h1 className="text-6xl font-bold">o nas.</h1>
                        </div>
                    </div>
                    <div className="flex flex-row flex-nowrap mt-16">
                        <div className="w-4/12 text-right pr-10 lg:pr-20 border-r border-gray-300">
                            <p className="text-base mb-2">Nasza lokalizacja</p>
                            <h6 className="text-2xl">ul. Warszawska 00</h6>
                            <h6 className="text-2xl">15-000, Białystok</h6>
                        </div>
                        <div className="w-8/12 pl-10 lg:pl-20">
                            <p className="text-base mb-2">Nip</p>
                            <h6 className="text-2xl">987463829485</h6>
                        </div>
                    </div>
                </div>

            </div>
            
                <div className="container">
                    <div className="py4">
                        <div className="text-center">
                            <p className="xlead">Jesteśmy w kontakcie.</p>
                        </div>
                        <CenterWrapper>
                            <div>
                                <Figure>
                                    <p>+48 515 601 252</p>
                                    <p>+48 507 893 168</p>
                                    <p>selleads.office@gmail.com</p>
                                </Figure>
                            </div>
                        </CenterWrapper>
                    </div>
                </div>
                <PageWrapper>
                <div className="container py4 px2">
                    <div className="g-x fx icenter">
                        <div className="offset-large-1 large-5 medium-12 small-12 pr2 ">
                            <p className="_mb1">Masz jakieś pytania?</p>
                            <h5 className="mb2 xlead">Napisz do nas!</h5>
                            <p className="lead">Jeśli chcesz dowiedzieć się czegoś więcej, po prostu do nas napisz :) Chętnie przygotujemy indywidualną ofertę i plan działania dla każdego klienta osobno, a na wasze pytania odpowiemy maksymalnie w ciągu 24 godzin. To co, zaczynamy?</p>
                        </div>
                        <div className="offset-large-1 large-5 medium-12 small-12 mt1">
                            <FormWrapper>
                                
                                { FormMsg === "success" && 
                                <MsgSuccess className="my2 _py6 px1">
                                    <p>Pomyślnie wysłano widomość. Dziękujęmy za kontakt.</p>
                                </MsgSuccess> }
                                
                                { FormMsg === "error" && 
                                <MsgError className="my2 _py6 px1">
                                    <p>Oops, coś poszło nie tak. Sprawdź czy wszystkie pola są poprawnie uzupełnione.</p>
                                </MsgError> }
                                
                                <form onSubmit={handleContact} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                                    <input type="hidden" name="form-name" value="contact" />
                                    <InputGroup>
                                        <Label for="contact_name">Twoje imię</Label>
                                        <InputText type="text" id="contact_name" name="contact_name" className={controlClass} onChange={onContactFormChange} value={FormDetails.contact_name}  />
                                        { (FormMsg === "error-control" && FormDetails["contact_name"] === "") && <LabelAfter><p>To pole nie może być puste.</p></LabelAfter> }
                                    </InputGroup>
                                    <InputGroup>
                                        <Label for="contact_email">Adres e-mail</Label>
                                        <InputText type="email" id="contact_email" name="contact_email" className={controlClass} onChange={onContactFormChange} value={FormDetails.contact_email} />
                                        {(FormMsg === "error-control" && FormDetails["contact_email"] === "") && <LabelAfter><p>To pole nie może być puste.</p></LabelAfter> }
                                    </InputGroup>
                                    <InputGroup>
                                        <Label for="contact_phone">Numer telefonu (opcjonalnie)</Label>
                                        <InputText type="tel" id="contact_phone" name="contact_phone" onChange={onContactFormChange} value={FormDetails.contact_phone} />
                                    </InputGroup>
                                    <InputGroup>
                                        <Label for="contact_message">Wiadomość</Label>
                                        <Textarea id="contact_message" name="contact_message" className={controlClass} onChange={onContactFormChange} value={FormDetails.contact_message} />
                                        { (FormMsg === "error-control" && FormDetails["contact_message"] === "")&& <LabelAfter><p>To pole nie może być puste.</p></LabelAfter> }
                                    </InputGroup>
                                    <button type="submit" className="button warning">Wyślij wiadomość</button>
                                </form>
                            </FormWrapper>
                        </div>
                    </div>
                </div>
                </PageWrapper>
            <Footer />
        </>
    )
}
