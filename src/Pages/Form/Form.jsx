import React from 'react'

import FormUI from "./FormUI"

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
class Form extends FormUI {

    render() {

        // Alias del estado 
        let {
            questions,
            visibleCard,
            sending,
            clientData
        } = this.state;

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
                                    <IconContainer onClick={ () => this.saveAnwser( visibleCard + 1, key, "Muy bueno")} item xs={4}>
                                        <VeryGoodIcon />
                                        <IconText>Muy bueno</IconText>             
                                    </IconContainer>
                                    <IconContainer onClick={ () => this.saveAnwser( visibleCard + 1, key, "Aceptable" )} item xs={4}>
                                        <Acceptable />
                                        <IconText>Aceptable</IconText>             
                                    </IconContainer>
                                    <IconContainer onClick={ () => this.saveAnwser( visibleCard + 1, key, "Debe mejorar" )} item xs={4}>
                                        <MustImprove /> 
                                        <IconText>Debe mejorar</IconText>             
                                    </IconContainer> 
                                    
                                </>                                     
                                }   
                                {
                                key === 5 &&
                                <>                    
                                    <IconContainer onClick={ () => this.saveAnwser( visibleCard + 1, key, "Si" )} item xs={6}>
                                        <VeryGoodIcon />
                                        <IconText>Si</IconText>             
                                    </IconContainer>
                                    <IconContainer onClick={ () => this.saveAnwser( visibleCard + 1, key, "No" )} item xs={6}>
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
                                        onChange={ ( e ) => this.handleClientData(e) }
                                    />
                                    
                                    <TextField                      
                                        label="Nombre y Apellido (*)"                      
                                        variant="outlined"
                                        name="name"
                                        value={ clientData.name.value}
                                        onChange={ ( e ) => this.handleClientData(e) }
                                        error={clientData.name.empty}
                                        helperText={ clientData.name.empty && "Campo obligatorio" }
                                    />                                 
                                    <TextField  
                                        label="Dirección"                                                               
                                        variant="outlined"
                                        name="direccion"
                                        value={ clientData.direccion.value}
                                        onChange={ ( e ) => this.handleClientData(e) }
                                    />
                                    <TextField   
                                        label="Fecha de cumpleaños"                                                              
                                        variant="outlined"
                                        name="birthdate"
                                        value={ clientData.birthdate.value}
                                        onChange={ ( e ) => this.handleClientData(e) }
                                    />
                                    <TextField  
                                        label="Tel/Celular"                                                               
                                        variant="outlined"
                                        name="telefono"
                                        value={ clientData.telefono.value}
                                        onChange={ ( e ) => this.handleClientData(e) }
                                    />
                                    <TextField  
                                        label="Email (*)"                                                               
                                        variant="outlined"
                                        name="email"
                                        value={ clientData.email.value}
                                        onChange={ ( e ) => this.handleClientData(e) }
                                        error={clientData.email.empty}
                                        helperText={ clientData.email.empty && "Campo obligatorio" }
                                    />                                
                                    <SendButton 
                                        variant="contained"
                                        color="primary"
                                        onClick={ () => sending ? () => {} : this.sendReview() }
                                        startIcon={ sending && <CircularSpinner /> }
                                    >
                                        { sending ? "Enviando" : "Enviar"}
                                    </SendButton>
                                </> 
                                } 
                                {
                                key === 7 &&
                                <>                    
                                    <SendButton variant="contained" color="primary" onClick={ () => this.clearReview()}>Responder otra encuesta</SendButton>                    
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
}

export default Form