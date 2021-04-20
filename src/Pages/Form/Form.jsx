import React, {useState} from 'react'

/* Estilos */
import {    
    Container,         
    Slide,
    QuestionContainer,
    Question,
    IconsContainer,
    IconContainer,
    VeryGoodIcon,
    Acceptable,
    MustImprove,
    IconText,
    TextField,
    SendButton,
} from './Form.styles';

/* Componentes */
import CircularSpinner  from "../../Components/CircularSpinner/CircularSpinner";

/* Modelos */
import EmailModel from "../../Models/EmailModel";

import { validateHttpResponse } from "../../Utils/ValidateResponse"

export default function Form() {

    // Preguntas del cuestionario
    const [questions, setQuestions] = useState( [
        {
          title: "Calidad de la comida"    
        },
        {
          title: "Atención"    
        },
        {
          title: "Cordialidad de nuestros empleados"    
        },
        {
          title: "Limpieza"    
        },
        {
          title: "Relacion precio/calidad"    
        },
        {
          title: "¿Volvería a visitarnos?"    
        },
        {
          title: "Dejanos algunos datos"    
        },
        {
          title: "Gracias por responder"    
        },
    ])
    // Card que esta visible
    const [ visibleCard, setvisibleCard] = useState(0);

    // Datos que deja el cliente 
    const [ clientData, setClientData] = useState({
        sugerencias: {
            value: "",
            empty: true
        },
        name:{
            value: "",
            empty: true
        },
        direccion: {
            value: "",
            empty: true
        },
        birthdate: {
            value: "",
            empty: true
        },
        telefono:{
            value: "",
            empty: true
        },
        email:{
            value: "",
            empty: true
        }
    })
    
    // Estado del envio del review
    const [ sending, setSending] = useState(false)

    // Guarda la respuesta del usuario
    const saveAnwser = (visibleCard, questionKey, anwser) => {

        questions[questionKey].anwser = anwser;

        // Actualiza las preguntas
        setQuestions(questions)

        // Actualiza la card visible
        setvisibleCard(visibleCard)

        console.log(questions)
    }

    // Guarda los datos del usuario
    const handleClientData = (e) => {

        // Alias del evento
        let {
            name,
            value
        } = e.target

        // Nuevo valor
        let newValue = {
            value,
            empty: clientData[name].value === ''
        }       

        // Actualizamos datos del cliente
        setClientData({...clientData, [name]: newValue})

    }

    // Envia la reseña
    const sendReview = async () => {

        console.log("preguntas",questions,"cliente",clientData)

        // Actualizamos el estado del envio
        setSending(true);

        // Obtenemos las ordenes
        const response = await EmailModel.sendReview({ questions,clientData});

        // Validamos la respuesta
        validateHttpResponse( response, async function(){
           
            console.log(response)

            // Actualizamos el estado del envio
            setSending(false);

            // Actualizamos la card visible
            setvisibleCard( visibleCard + 1 )
           
            return true;

        }, async function( errorCode ){

            // Actualizamos el estado del envio
            setSending(false);

            console.log(errorCode)

            return false;

        });

        return true;
    }

    // Limpia el formulario
    const clearReview = () => {

        // Indicamos la card a mostrar
        setvisibleCard( 0 );

        // Limpiamos los datos del cliente
        setClientData({
            sugerencias: {
                value: "",
                empty: true
            },
            name:{
                value: "",
                empty: true
            },
            direccion: {
                value: "",
                empty: true
            },
            birthdate: {
                value: "",
                empty: true
            },
            telefono:{
                value: "",
                empty: true
            },
            email:{
                value: "",
                empty: true
            }
        })

    }
    return (
        <Container>         
        {
            questions.map( (question , key) => 
            <Slide key={key} style={{ display: visibleCard === key ? 'block' : 'none'}}>
                <>
                    <QuestionContainer>
                        <Question variant="h5">{ question.title }</Question>
                    </QuestionContainer>
                    <IconsContainer container>
                        {
                        key < 5 &&
                        <>
                            
                            <IconContainer onClick={ () => saveAnwser( visibleCard + 1, key, "Muy bueno")} item xs={4}>
                                <VeryGoodIcon />
                                <IconText>Muy bueno</IconText>             
                            </IconContainer>
                            <IconContainer onClick={ () => saveAnwser( visibleCard + 1, key, "Aceptable" )} item xs={4}>
                                <Acceptable />
                                <IconText>Aceptable</IconText>             
                            </IconContainer>
                            <IconContainer onClick={ () => saveAnwser( visibleCard + 1, key, "Debe mejorar" )} item xs={4}>
                                <MustImprove /> 
                                <IconText>Debe mejorar</IconText>             
                            </IconContainer> 
                            
                        </>                                     
                        }   
                        {
                        key === 5 &&
                        <>                    
                            <IconContainer onClick={ () => saveAnwser( visibleCard + 1, key, "Si" )} item xs={6}>
                                <VeryGoodIcon />
                                <IconText>Si</IconText>             
                            </IconContainer>
                            <IconContainer onClick={ () => saveAnwser( visibleCard + 1, key, "No" )} item xs={6}>
                                <MustImprove /> 
                                <IconText>No</IconText>           
                            </IconContainer>                    
                        </> 
                        }   
                        {
                        key === 6 && 
                        <>                    
                            <TextField  
                                label="Sugerencias"                    
                                multiline
                                rows={2}                      
                                variant="outlined"
                                name="sugerencias"
                                value={ clientData.sugerencias.value }
                                onChange={ ( e ) => handleClientData(e) }
                            />  
                            <TextField                      
                                label="Nombre y Apellido"                      
                                variant="outlined"
                                name="name"
                                value={ clientData.name.value}
                                onChange={ ( e ) => handleClientData(e) }
                            />
                            <TextField  
                                label="Dirección"                                                               
                                variant="outlined"
                                name="direccion"
                                value={ clientData.direccion.value}
                                onChange={ ( e ) => handleClientData(e) }
                            />
                            <TextField   
                                label="Fecha de cumpleaños"                                                              
                                variant="outlined"
                                name="birthdate"
                                value={ clientData.birthdate.value}
                                onChange={ ( e ) => handleClientData(e) }
                            />
                            <TextField  
                                label="Tel/Celular"                                                               
                                variant="outlined"
                                name="telefono"
                                value={ clientData.telefono.value}
                                onChange={ ( e ) => handleClientData(e) }
                            />
                            <TextField  
                                label="Email"                                                               
                                variant="outlined"
                                name="email"
                                value={ clientData.email.value}
                                onChange={ ( e ) => handleClientData(e) }
                            />
                            <SendButton 
                                variant="contained"
                                color="primary"
                                onClick={ () => sending ? () => {} : sendReview() }
                                startIcon={ sending && <CircularSpinner /> }
                            >
                                { sending ? "Enviando" : "Enviar"}
                            </SendButton>
                        </> 
                        } 
                        {
                        key === 7 &&
                        <>                    
                            <SendButton variant="contained" color="primary" onClick={ () => clearReview()}>Responder otra encuesta</SendButton>                    
                        </> 
                        }                            
                    </IconsContainer> 
                </>
            </Slide>    
            )
        }          
        </Container>
    )
}
