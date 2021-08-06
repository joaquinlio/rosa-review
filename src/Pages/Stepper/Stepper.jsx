// Dependencias
import React from 'react'

// Controlador
import StepperUI from "./StepperUI"

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
    StepperCircles,
    Circle,
    StepLabel,
    StepperContainer,
    Answer
} from './Stepper.styles';

/* Componentes */
import CircularSpinner  from "../../Components/CircularSpinner/CircularSpinner";

/* Utilidades */
import { QUALIFICATIONS, STEPTYPE } from '../../Utils/Constants'

class Stepper extends StepperUI {

    render() {

        // Alias del estado 
        let {
            steps,
            questions,
            visibleCard,
            sending,
            clientData
        } = this.state;

        return (
            <Container>         
            {
                steps.map( (step , key) => 
                    <Slide duration="1800" key={key} show={ visibleCard === key }>
                        <>
                            {/* Titulo de la pregunta */}
                            <QuestionContainer>
                                <Question>{ step.title }</Question>
                            </QuestionContainer>
                            <IconsContainer container>
                                {
                                    step.type === STEPTYPE.QUALIFICATIONS &&
                                        <>                                
                                            <AnswerContainer item xs={4}>
                                                <Answer onClick={ () => this.saveAnwser( step.title, QUALIFICATIONS.DISSATISFIED )}>
                                                    <MustImprove /> 
                                                    <IconText>Debe mejorar</IconText>             
                                                </Answer>
                                            </AnswerContainer>
                                            <AnswerContainer item xs={4}>
                                                <Answer onClick={ () => this.saveAnwser( step.title, QUALIFICATIONS.NEUTRAL )} >
                                                    <Acceptable />
                                                    <IconText>Aceptable</IconText>             
                                                </Answer>
                                            </AnswerContainer>
                                            <AnswerContainer item xs={4}>                                        
                                                <Answer onClick={ () => this.saveAnwser( step.title, QUALIFICATIONS.SATISFIED)} >
                                                    <VeryGoodIcon />
                                                    <IconText>Muy bueno</IconText>  
                                                </Answer>
                                            </AnswerContainer>                                     
                                        </>                                     
                                }   
                                {
                                    step.type === STEPTYPE.CHOICE &&
                                        <>        
                                            <AnswerContainer item xs={6}>
                                                <Answer onClick={ () => this.saveAnwser( step.title, QUALIFICATIONS.NO )}>
                                                    <MustImprove /> 
                                                    <IconText>No</IconText> 
                                                </Answer>                                                          
                                            </AnswerContainer>              
                                            <AnswerContainer item xs={6}>
                                                <Answer onClick={ () => this.saveAnwser( step.title, QUALIFICATIONS.YES )}>
                                                    <VeryGoodIcon />
                                                    <IconText>Si</IconText>      
                                                </Answer>                                                            
                                            </AnswerContainer>                                                      
                                        </> 
                                }   
                                {
                                    step.type === STEPTYPE.FORM && 
                                        <>                    
                                            <TextField  
                                                label="Sugerencias"                    
                                                multiline
                                                rows={2}                      
                                                variant="outlined"
                                                name="suggestions"
                                                value={ clientData.suggestions.value }
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
                                                label="Fecha de cumpleaños"                                                              
                                                variant="outlined"
                                                name="birthdate"
                                                value={ clientData.birthdate.value}
                                                onChange={ ( e ) => this.handleClientData(e) }
                                            />
                                            <TextField  
                                                label="Tel/Celular"                                                               
                                                variant="outlined"
                                                name="phone"
                                                value={ clientData.phone.value}
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
                                                onClick={ () => !sending && this.sendReview() }
                                                startIcon={ sending && <CircularSpinner /> }
                                            >
                                                { sending ? "Enviando" : "Enviar"}
                                            </SendButton>
                                        </> 
                                } 
                                {
                                    step.type === STEPTYPE.BUTTON &&
                                        <>                    
                                            <SendButton variant="contained" color="primary" onClick={ () => this.clearReview()}>Responder otra encuesta</SendButton>                    
                                        </> 
                                }                          
                            </IconsContainer> 
                            
                            {/* Numeracion de los pasos */}
                            <StepperContainer>
                                <StepperCircles                                     
                                    alternativeLabel={true}                          
                                    activeStep={visibleCard}                               
                                >
                                {
                                    steps.map(( question, key ) => 
                                        key < 7 &&
                                        <Circle key={key}>
                                            <StepLabel/>
                                        </Circle>
                                    )
                                }    
                                </StepperCircles>
                            </StepperContainer>
                            
                        </>
                    </Slide>    
                )
            }          
            </Container>
        )
    }
}

export default Stepper