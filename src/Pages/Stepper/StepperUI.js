/**
 * @desc Dependencias
 */
import { Component } from "react";

/* Modelos */
import EmailModel from "../../Models/EmailModel";
import ReviewModel from "../../Models/ReviewModel";
import QuestionModel from "../../Models/QuestionModel";

/* Utilidades */
import { validateHttpResponse } from "../../Utils/ValidateResponse"
import { STORES } from '../../Utils/Constants'

class FormUI extends Component {
   /**
    * @desc Constructor
    *
    * @param { Object } props
    *
    * @return { void }
    */
    constructor(props) {
        super(props);
        
        this.state = {
            // Pasos
            steps:[ 
                {                    
                    title: "Calidad de la comida",
                    type: "QUALIFICATIONS"                    
                },
                {                    
                    title: "Atención",
                    type: "QUALIFICATIONS"                    
                },
                {                    
                    title: "Cordialidad de nuestros empleados",
                    type: "QUALIFICATIONS"                    
                },
                {                    
                    title: "Limpieza",
                    type: "QUALIFICATIONS"                    
                },
                {                    
                    title: "Relación precio/calidad",
                    type: "QUALIFICATIONS"                    
                },
                {                    
                    title: "¿Volvería a visitarnos?",
                    type: "CHOICE"                    
                },   
                {
                    title: "Dejanos algunos datos",
                    type: "FORM"
                },
                {
                    title: "Gracias por responder",    
                    type: "BUTTON"
                },
            ],
            // Preguntas
            questions: [],
            // Card que esta visible
            visibleCard: 0,
            // Datos que deja el cliente 
            clientData:{
                
                name:{
                    value: "",
                    empty: false
                },
                birthdate: {
                    value: "",
                    empty: false
                },
                phone:{
                    value: "",
                    empty: false
                },
                email:{
                    value: "",
                    empty: false
                },
                suggestions: {
                    value: "",
                    empty: false
                }
            },
            // Estado del envio del review
            sending: false,
            // Set de errores
            errorSet : {       
                error:false,
                message: ""
            }
        }
    }
 
    // Guarda la respuesta del usuario
    saveAnwser = ( title, qualification) => {

        // Alias del estado
        let {
            questions, 
            visibleCard           
        } = this.state;
        
        // Agrega la pregunta al array 
        questions.push({
            title,
            qualification
        });
                
        // Actualiza las preguntas y la card visible
        this.setState({ questions, visibleCard: visibleCard + 1 })
               
    } 

    // Guarda los datos del usuario
    handleClientData = (e) => {

        // Alias del evento
        let {
            name,
            value
        } = e.target

        // Alias del estado
        let {
            clientData,            
        } = this.state;

        clientData[name].value = value;
        clientData[name].empty = clientData[name].value === '';              

        // Actualizamos datos del cliente
        this.setState(clientData)

    }

    // Limpia el formulario
    clearReview = () => {

        // Alias del estado
        const { clientData = {} } = this.state;
          
        // Limpiamos los datos del cliente
        Object.keys( clientData ).forEach(( key ) => {

            clientData[key].value = '';
            clientData[key].empty = false;

        });

        // Vacia las respuestas del usuario y indica la card a mostrar
        this.setState({ clientData, questions: [], visibleCard: 0 })     

    }

    // Envia la reseña
    sendReview = async () => {

        try {

            // Actualizamos el estado del envio
            this.setState({ sending: true });
            
             // Alias del estado
            const { visibleCard, questions, clientData } = this.state;
            
            // Verifica los errores del formulario             
            if(!this.verify()){
                                               
                this.setState({ sending: false });
    
                return false;
            }

            // Respuestas del cliente
            clientData.anwsers = questions;
                       
            let url = new URL(window.location.href);
            let c = url.searchParams.get("s");
           
            const review = {
                store: STORES[c] || STORES.AD,
                name: clientData.name.value,
                birthdate:  clientData.birthdate.value,
                phone: clientData.phone.value,
                email: clientData.email.value,
                suggestions:  clientData.suggestions.value,
                answers: questions
            }
            
            // Obtenemos las ordenes
            const response = await ReviewModel.sendReview(review);
    
            // Validamos la respuesta
            validateHttpResponse( response, async function(){                               
    
                // Actualizamos el estado del envio
                this.setState({ sending: false });
    
                // Actualizamos la card visible
                this.setState({ visibleCard: visibleCard + 1 } )
               
                return true;
    
            }.bind( this ), async function( errorCode ){
    
                // Actualizamos el estado del envio
                this.setState({ sending: false });
    
                console.log(errorCode)
    
                return false;
    
            }.bind( this ));
    
            return true;  
        } catch (error) {
            console.log(error)

            return false
        }
    }

    /**
    * @desc Verifica los datos del formulario
    * 
    * @return { Boolean }
    */
    verify(){

        try{

             // Alias del estado
             const { clientData = {} } = this.state;
            
             // Limpiamos los errores
             Object.keys( clientData ).forEach(( key ) => {
                 clientData[key].empty = false;
             });
              
            // Verificamos el nombre del cliente
            if( clientData.name.value === '' ){

                // Indicamos que el nombre esta vacio.
                clientData.name.empty = true;

                // Actualizamos el estado
                this.setState({ clientData });

                return false;

            }
            
            return true;

        }catch( error ){

            // Logueamos el error
            console.log( error );

            return false;

        }

    }
    
 }
 export default FormUI;
 