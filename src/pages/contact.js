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
        let err = Object.values(FormDetails).indexOf("");
        console.log(err);
        if( err !== -1 ) return setFormMsg('error-control');

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...FormDetails })
            })
            .then(() => setFormMsg("success"))
            .catch(error => setFormMsg("error"));

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

            <Navbar />
            
                <div className="container">
                    <div className="py4">
                        <div className="text-center">
                            <p className="xlead">Jesteśmy w kontakcie.</p>
                        </div>
                        <CenterWrapper>
                            <div>
                                <Figure>
                                    <p>+48 864 531 961</p>
                                    <p>office.selleads@gmail.com</p>
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
