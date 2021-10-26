import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet"

import '@styles/globals.css';
import '@styles/navigation.css';
import '@styles/cards.css';

import Navbar from '@sections/navbar'
import Footer from '@sections/footer'

import Button from '../components/Button';

import background from '@images/contact_background.jpg';
import undraw_Letter_re_8m03 from '@images/undraw_Letter_re_8m03.svg';

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
    width: 100%;
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

const ToolTipCarret = styled.div`
    top: -10px;
    left: 30px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #dc2626;
`

const ModalCloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
)

const validatePhone = (phone) => {
    const regex_desk = /^\+?([0-9]{2})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const regex_mobile = /^\+?([0-9]{2})?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3,4})$/;     

    return regex_desk.test(phone) || regex_mobile.test(phone);
}

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validateStrictText = (text) => {
    const regex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/g;
    return regex.test(text);
}


const FormContact_Panel = ({ children, heading, desc, ...props }) => {
    return (
        <div className="w-full p-14 bg-gray-100 border-b-2 border-white">
            <div className="max-w-6xl mr-auto">
                <h4 className="text-2xl mb-3 font-bold">
                    { heading }
                </h4>
                <p className="text-lg mb-10">{ desc }</p>
                <div className="flex flex-row flex-wrap relative">
                    { children }
                </div>
            </div>
        </div>
    )
}

const Error_Tooltip_Wrapper = ({ content, ...props }) => {
    return (
        <div className="absolute z-20" style={{ top: "calc(100% + 5px)" }}>
            <div className="relative">
                <ToolTipCarret className="absolute" />
                <div className="bg-red-600 px-8 py-2 rounded-md">
                    <p className="text-sm text-red-100">{content}</p>
                </div>
            </div>
        </div>
    )
}

export default function Contact() {

    const [FormFieldsValues, setFormFieldsValues] = useState({
        "form_contact_name": { required: true, value: "", validation: "strict_text" },
        "form_contact_surname": { required: false, value: "", validation: "strict_text" },
        "form_contact_company": { required: false, value: "", validation: "text-number" },
        "form_contact_phone": { required: false, value: "", validation: "phone" },
        "form_contact_email": { required: true, value: "", validation: "email" },
        "form_contact_message": { required: true, value: "", validation: "text-number-special" },
    });

    // Tablica z błędami walidacji
    const [FormFieldsErrors, setFormFieldsErrors] = useState({});
    // Stan okna modalnego (pokaż / ukryj)
    const [FormContactSend, setFormContactSend] = useState(false);

    // Nazwa walidacji przypisany do funkcji
    const onValidate = {
        //'text':         validateText,
        'strict_text':  validateStrictText,
        'phone':        validatePhone,
        'email':        validateEmail,
    };

    // Tablica komunikatów walidacji
    const invalidMessages = {
        'strict_text': 'Pole może zawierać tylko litery.',
        'phone': 'Proszę wpisać prawidłowy numer telefonu.',
        'email': 'Proszę wpisać prawidłowy adres e-mail.',
        'empty': 'To pole nie może być puste.'
    };

    const handleValidateField = ( field ) => {
        let fieldName = field.target.name;       

        if (Object.keys(FormFieldsValues).indexOf(fieldName) < 0) return;

        let value = field.target.value;
        let props = FormFieldsValues[fieldName];
        let fieldTypes = props.validation.split('-');

        setFormFieldsValues({
            ...FormFieldsValues,
            [fieldName]: {
                ...FormFieldsValues[fieldName],
                value: value
            }
        });

        if ( props.required && value.length <= 0) {
            setFormFieldsErrors({ ...FormFieldsErrors,
                [fieldName]: invalidMessages['empty']
            });
            return;
        }

        for (const [, type] of Object.entries(fieldTypes)) {
            //Sprawdzenie, czy dany typ walidacji istnieje w onValidate
            if (onValidate.hasOwnProperty(type)) {
                //Kontrola, czy pole zaczęto uzupełniać
                if (value.length > 0) {
                    //Wynik walidacji
                    let isValid = onValidate[type](value);
                    if (!isValid) {
                        //Przypisanie pierwszego napotkanego błędu dla pola
                        setFormFieldsErrors({ ...FormFieldsErrors,
                            [fieldName]: invalidMessages[type]
                        });
                        return;
                    }
                }
            }
        }

        //Przerwanie w momencie, gdy fieldName znajduje sięw FormFieldsErrors
        //Zablokowanie wyczyszczenia błędu (krok następny)
        if (Object.keys(FormFieldsErrors).indexOf(fieldName) < 0) return;

        //Czyszczenie błędu dla pola, jeżeli w krokach poprzednich nie znaleziono go
        let copiedFormFieldsErrors = Object.assign({}, FormFieldsErrors);
        let { [fieldName]: removedProperty, ...clearedFormFieldsErrors } = copiedFormFieldsErrors;

        setFormFieldsErrors(clearedFormFieldsErrors);
    }

    const handleSubmitContact = (e) => {
        e.preventDefault();
        let emptyField = {};

        for (const [fName, fProps] of Object.entries(FormFieldsValues)) {
            if ( fProps.required && fProps.value.length <= 0 ) {
                emptyField = { ...emptyField,
                    [fName]: invalidMessages['empty']
                };
            }
        }

        if (emptyField) setFormFieldsErrors({ ...FormFieldsErrors, ...emptyField}); 

        //Sprawdzenie wypełnienia obiektu w JS
        //https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
        if (Object.keys(emptyField).length !== 0) return;

        let FieldsValues = {};
        for (const [fName, fProps] of Object.entries(FormFieldsValues)) {
            // Wypełnienie pustych pól w wiadomości
            let value = fProps.value.length <= 0 ? "--------" : fProps.value;
            FieldsValues[fName] = value;
        }

        console.log(FieldsValues);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...FieldsValues })
        }).then(() => {
            emptyField = {};
            for (const [fName, fProps] of Object.entries(FormFieldsValues)) {
                //Czyszczenie pól po wysłaniu wiadomości
                let props = Object.assign({}, fProps);
                props.value = "";
                emptyField[fName] = props;
            }
            setFormFieldsValues({ ...FormFieldsValues, ...emptyField });
            //Otworzenie okna Modal
            setFormContactSend(true);
        })
        .catch(error => {
            console.log(error);
        });
        
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    
    const Error_Tooltip = (fieldName) => {
        if (FormFieldsErrors.hasOwnProperty(fieldName)) {
            let error = FormFieldsErrors[fieldName];

            return <Error_Tooltip_Wrapper content={error} />
        }
    }

    const FormContact_Field = ({ placeholder, textarea, name, ...props }) => {

        let Component = (!textarea) ? 'input' : "textarea";
        let Rows = (textarea) ? 6 : "";
        let requiredPlaceholder = (FormFieldsValues[name].required) ? placeholder : placeholder + ' (opcjonalne)'
    
        let errorClass = () => {
            return FormFieldsErrors[name] ? 'border-red-300' : '';
        };
    
        return (
            <>
                <Component
                    name={name}
                    rows={Rows}
                    placeholder={requiredPlaceholder}
                    className={`focus:outline-none focus:ring ring-gray-300 w-full rounded-lg border border-gray-300 shadow-lg py-3 px-7 text-gray-800 relative z-10 ${errorClass()}`}
                    { ...props }
                />
                {Error_Tooltip(name)}
            </>
        )
    }
    

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
                    <div className="w-1/12 md:w-2/12"></div>
                    <div className="w-11/12 md:w-10/12">
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
                    <div className="w-1/12 md:w-2/12 ml-auto h-auto pt-36">
                        <h3 className="invisible md:visible h-auto text-2xl font-bold p-6" style={{ transform: "rotate(90deg)" }}>
                            Napisz do nas.
                        </h3>
                    </div>
                    <div className="w-11/12 md:w-10/12">
                        
                        <form onSubmit={handleSubmitContact} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                            
                            <FormContact_Panel heading="O czym chcesz napisać ?" desc="Opisz swoją działalność, albo zadaj nam pytanie." >
                                <div className="w-full mb-5 relative">
                                    <textarea value={FormFieldsValues['form_contact_message'].value} rows="6" name="form_contact_message" onChange={handleValidateField} placeholder="Im dokładniej opiszesz wiadomość, tym lepiej." className="focus:outline-none focus:ring ring-gray-300 w-full rounded-lg border border-gray-300 shadow-lg py-3 px-7 text-gray-800 relative z-10" />
                                    {Error_Tooltip('form_contact_message')}
                                </div>
                            </FormContact_Panel>
                            <FormContact_Panel heading="Przedstaw się." desc="Pozwól nam Ciebie poznać." >
                                <div className="w-6/12 pr-5 mb-5 relative">
                                    <input value={FormFieldsValues['form_contact_name'].value} type="text" name="form_contact_name" placeholder="Imię" onChange={handleValidateField} className="focus:outline-none focus:ring ring-gray-300 w-full rounded-lg border border-gray-300 shadow-lg py-3 px-7 text-gray-800 relative z-10" />
                                    {Error_Tooltip('form_contact_name')}
                                </div>
                                <div className="w-6/12 mb-5 relative">
                                    <input value={FormFieldsValues['form_contact_surname'].value} type="text" name="form_contact_surname" placeholder="Nazwisko (opcjonalne)" onChange={handleValidateField} className="focus:outline-none focus:ring ring-gray-300 w-full rounded-lg border border-gray-300 shadow-lg py-3 px-7 text-gray-800 relative z-10" />
                                    {Error_Tooltip('form_contact_surname')}
                                </div>
                                <div className="w-full mb-5 relative">
                                    <input value={FormFieldsValues['form_contact_company'].value} type="text" name="form_contact_company" placeholder="Firma (opcjonalne)" onChange={handleValidateField} className="focus:outline-none focus:ring ring-gray-300 w-full rounded-lg border border-gray-300 shadow-lg py-3 px-7 text-gray-800 relative z-10" />
                                    {Error_Tooltip('form_contact_company')}
                                </div>
                            </FormContact_Panel>
                            <FormContact_Panel heading="Informaje kontaktowe." desc="W jaki sposób mozemy się z Tobą skontaktować." >
                                <div className="w-full mb-5 relative">
                                    <input value={FormFieldsValues['form_contact_email'].value} type="email" name="form_contact_email" placeholder="E-mail" onChange={handleValidateField} className="focus:outline-none focus:ring ring-gray-300 w-full rounded-lg border border-gray-300 shadow-lg py-3 px-7 text-gray-800 relative z-10" />
                                    {Error_Tooltip('form_contact_email')}
                                </div>
                                <div className="w-full mb-5 relative">
                                    <input value={FormFieldsValues['form_contact_phone'].value} type="phone" name="form_contact_phone" placeholder="Telefon (opcjonalne)" onChange={handleValidateField} className="focus:outline-none focus:ring ring-gray-300 w-full rounded-lg border border-gray-300 shadow-lg py-3 px-7 text-gray-800 relative z-10" />
                                    {Error_Tooltip('form_contact_phone')}
                                </div>
                            </FormContact_Panel>
                      
                            <div className="w-full p-14 bg-gradient-to-b from-gray-200 to-gray-white border-b-2 border-white">
                                <div className="max-w-6xl mr-auto">
                                    <button type="submit" className="w-full py-3 px-8 bg-gray-900 hover:bg-gray-800 text-gray-100 hover:text-gray-200 rounded-lg">Wyślij wiadomość</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-14">
                <div className="my-32">
                    <div className="flex flex-row flex-nowrap">
                        <div className="w-6/12 lg:w-4/12 pr-10 lg:pr-20">
                            <div className="mb-10 text-right">
                                <p className="text-base mb-2">Nazwa firmy</p>
                                <h6 className="text-2xl">Hukow</h6>
                            </div>
                        </div>
                        <div className="w-6/12 lg:w-8/12">
                            <h1 className="text-3xl lg:text-6xl font-bold">Kilka informacji</h1>
                            <h1 className="text-3xl lg:text-6xl font-bold">o nas.</h1>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap mt-8 md:mt-16">
                        <div className="w-full md:w-6/12 lg:w-4/12 text-center md:text-right md:pr-10 mb-10 md:pr-20 md:border-r border-gray-300">
                            <p className="text-base mb-2">Nasza lokalizacja</p>
                            <h6 className="text-2xl">ul. Warszawska 00</h6>
                            <h6 className="text-2xl">15-000, Białystok</h6>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-8/12 text-center md:text-left md:pl-10 md:pl-20">
                            <p className="text-base mb-2">Nip</p>
                            <h6 className="text-2xl">987463829485</h6>
                        </div>
                    </div>
                </div>

            </div>
            
            {
                FormContactSend && (
                    <div className="fixed w-full h-screen z-50"
                        style={{ top: 0, left: 0, backgroundColor: "#010805f2" }}
                    >
                        <div className="relative p-8 md:p-10 overflow-hidden h-full flex justify-center content-center">
                            <div className="overflow-auto max-w-3xl p-10 md:p-24 bg-white rounded-lg text-center">
                                <img src={undraw_Letter_re_8m03} alt="undraw_Letter_re_8m03" className="mx-auto w-48 h-48" />
                                <h1 className="text-2xl md:text-4xl font-bold mt-14 mb-4">Pomyślnie wysłano wiadomość.</h1>
                                <div className="text-base md:text-lg">Doceniamy Twoje chęci do kontaktu z nami. Odpowiemy na twoją wiadomość najszybciej jak możemy. </div>
                                <div className="my-8">
                                    <Button onClick={() => setFormContactSend(false) } rIcon={<ModalCloseIcon/>}>Zamknij okno</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            

            <Footer />
        </>
    )
}
