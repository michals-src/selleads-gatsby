import React from 'react';
import styled from 'styled-components';

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

const InputText = styled.input`
    border-radius: 5px;
    border: 1px solid #91cec5;
    outline: none;
    padding: 8px 12px;
    width: 100%;

    &:focus{
        box-shadow: 0 0 8px rgb(163 226 217 / 80%);
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
`
const Figure = styled.div`
    padding: 85px 50px;
    text-align: center;
    background: #fff;

    &.special{
        box-shadow: 0 10px 25px rgb(163 226 217 / 40%);
    }
`

const Textcolor = styled.p`
    color: #91cec5;
`

export default function contact() {
    return (
        <>
            <Navbar />
            
                <div className="container">
                    <div className="g-x fx icenter py4">
                        <div className="small-12 text-center pb2">
                            <p className="xlead">Bądźmy w kontakcie</p>
                        </div>
                        <div className="medium-6 small-6">
                            <Figure className="special">
                                <h6 className="mb1 lead">Godziny pracy</h6>
                                <p>Pon - Pią od 8:00 do 16:00</p>
                                <p>Sob od 10:00 do 16:00</p>
                            </Figure>
                        </div>
                        <div className="medium-6 small-6">
                            <Figure>
                                <h6 className="mb1 lead">Kontakt</h6>
                                <p>+48 864 531 961</p>
                                <p>adres_email@selleads.com</p>
                            </Figure>
                        </div>
                    </div>
                </div>
                <PageWrapper>
                <div className="container py4 px4">
                    <div className="g-x fx icenter">
                        <div className="offset-medium-1 medium-5 small-12 pr2 text-right">
                            <p className="_mb1">Masz jakieś pytania ?</p>
                            <h5 className="mb2 xlead">Napisz do nas</h5>
                            <p className="lead">Jeżeli potrzebujesz dowiedzieć się więcej lub chcesz się z nami skonsultować, jedną z opcji kontaku jaką oferujemy jest napisanie do nas wiadomości e-mail formularzem znajdującym się obok.</p>
                        </div>
                        <div className="offset-medium-1 medium-5 small-12">
                            <FormWrapper>
                                <form>
                                    <InputGroup>
                                        <Label for="contact_name">Twoje imię</Label>
                                        <InputText type="text" id="contact_name" />
                                    </InputGroup>
                                    <InputGroup>
                                        <Label for="contact_name">Adres e-mail</Label>
                                        <InputText type="email" id="contact_name" />
                                    </InputGroup>
                                    <InputGroup>
                                        <Label for="contact_name">Temat</Label>
                                        <InputText type="text" id="contact_name" />
                                    </InputGroup>
                                    <InputGroup>
                                        <Label for="contact_message">Wiadomość</Label>
                                        <Textarea id="contact_message" />
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
