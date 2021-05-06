import React from 'react'

import FormUI from "./FormUI"

/* Estilos */
import {    
    Container,         
    Slide,
    QuestionContainer,
    Question,
    IconsContainer,
    AnswerContainer,
    VeryGoodIcon,
    Acceptable,
    MustImprove,
    IconText,
    TextField,
    SendButton,
    MobileStepper,
    StepperContainer,
    Answer
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
                    <Slide duration="1800" key={key} style={{ display: visibleCard === key ? 'block' : 'none'}}>
                        <>
                            <QuestionContainer>
                                <Question>{ question.title }</Question>
                            </QuestionContainer>
                            <IconsContainer container>
                                {
                                key < 5 &&
                                <>                                
                                    <AnswerContainer item xs={4}>
                                        <Answer onClick={ () => this.saveAnwser( visibleCard + 1, key, "Muy bueno")} >
                                            <VeryGoodIcon />
                                            <IconText>Muy bueno</IconText>  
                                        </Answer>
                                    </AnswerContainer>
                                    <AnswerContainer item xs={4}>
                                        <Answer onClick={ () => this.saveAnwser( visibleCard + 1, key, "Aceptable" )} >
                                            <Acceptable />
                                            <IconText>Aceptable</IconText>             
                                        </Answer>
                                    </AnswerContainer>
                                    <AnswerContainer item xs={4}>
                                        <Answer onClick={ () => this.saveAnwser( visibleCard + 1, key, "Debe mejorar" )}>
                                            <MustImprove /> 
                                            <IconText>Debe mejorar</IconText>             
                                        </Answer>
                                    </AnswerContainer>                                     
                                </>                                     
                                }   
                                {
                                key === 5 &&
                                <>                    
                                    <AnswerContainer onClick={ () => this.saveAnwser( visibleCard + 1, key, "Si" )} item xs={6}>
                                        <VeryGoodIcon />
                                        <IconText>Si</IconText>             
                                    </AnswerContainer>
                                    <AnswerContainer onClick={ () => this.saveAnwser( visibleCard + 1, key, "No" )} item xs={6}>
                                        <MustImprove /> 
                                        <IconText>No</IconText>           
                                    </AnswerContainer>                    
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
                                        label="Email"                                                               
                                        variant="outlined"
                                        name="email"
                                        value={ clientData.email.value}
                                        onChange={ ( e ) => this.handleClientData(e) }                             
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
                            <StepperContainer>
                                <MobileStepper
                                    variant="dots"
                                    steps={questions.length - 1}
                                    position="static"
                                    activeStep={visibleCard}                               
                                />
                            </StepperContainer>
                            
                        </>
                    </Slide>    
                )
            }          
            </Container>
        )
    }
}

export default Form