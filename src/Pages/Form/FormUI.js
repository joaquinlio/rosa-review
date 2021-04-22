/**
 * @desc Dependencias
 */
import { Component } from "react";

/* Modelos */
import EmailModel from "../../Models/EmailModel";

/* Utilidades */
import { validateHttpResponse } from "../../Utils/ValidateResponse"
 
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
            // Preguntas del cuestionario
            questions: [
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
            ],
            // Card que esta visible
            visibleCard: 0,
            // Datos que deja el cliente 
            clientData:{
                sugerencias: {
                    value: "",
                    empty: false
                },
                name:{
                    value: "",
                    empty: false
                },
                direccion: {
                    value: "",
                    empty: false
                },
                birthdate: {
                    value: "",
                    empty: false
                },
                telefono:{
                    value: "",
                    empty: false
                },
                email:{
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
    saveAnwser = (visibleCard, questionKey, anwser) => {

        // Alias del estado
        let {
            questions,            
        } = this.state;

        questions[questionKey].anwser = anwser;
        
        // Actualiza las preguntas y la card visible
        this.setState({questions,visibleCard})
               
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

            this.setState(clientData)
        });

        // Indicamos la card a mostrar
        this.setState({ visibleCard: 0 })          
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

            // Obtenemos las ordenes
            const response = await EmailModel.sendReview({ questions,clientData});
    
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

            // Verificamos el email
            if( clientData.email.value === '' ){

                // Indicamos que el nombre esta vacio.
                clientData.email.empty = true;

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
 