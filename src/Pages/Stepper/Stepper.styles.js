/**
 * @desc Dependencias
 */
 import styled, { css } from "styled-components";

 /**
  * @desc Material design
  */
 import { 
     Grid as GridMaterial,
     Container as ContainerMaterial,
     Typography,
     TextField as TextFieldMaterial,
     Button,
     FormControl as FormControlMaterial,
     Stepper as StepperMaterial,
     Step as StepMaterial,
     StepLabel as StepLabelMaterial
     
     
 } from '@material-ui/core';
 
 import { Slide as SlideReact } from "react-awesome-reveal";
 
 /**
  * @desc Iconos de material.
  */
 import { 
     InsertEmoticon as InsertEmoticonIcon,
     SentimentSatisfied as SentimentSatisfiedIcon,
     SentimentVeryDissatisfied as SentimentVeryDissatisfiedIcon
 } from '@material-ui/icons';
 
 /**
  * @desc Raiz
  */
 export const Container = styled( ContainerMaterial )`  
    width: 100%;
    height: calc(100vh - 60px);
    display: flex !important;
    align-items: center;    
 `;
 
 /**
  * @desc Card
  */
 export const Slide = styled( SlideReact )`  
    ${
        props => props.show === false &&
            css`
                display: none;
            `
    }
     width: 100%;
     background-color:white;     
     border-radius: 50px;   
     box-shadow: 7px 4px 35px black;  
 `;
 
 /**
  * @desc Contianer de la pregunta
  */
 export const QuestionContainer = styled( GridMaterial )`  
     padding: 24px 15px 0px;
     display: flex;
     justify-content: center;
     height: 65px;
 `;
 
 /**
  * @desc Texto de la pregunta
  */
 export const Question = styled( Typography )`  
    &.MuiTypography-root{
        font-size: 1.4rem;

    }
 `;
 
 /**
  * @desc Contianer de los iconos
  */
 export const IconsContainer = styled( GridMaterial )`  
     padding: 5px;
     display: flex;
     justify-content: center;
 `;
 
 /**
  * @desc Contianer de las respuestas
  */
 export const AnswerContainer = styled( GridMaterial )`       
    height: 73px; 
    display:flex;    
    flex-direction: column;
    align-items: center;     
 `;

  /**
  * @desc Respuesta
  */
export const Answer = styled( GridMaterial )`  
   display:flex;    
   flex-direction: column;
   align-items: center;  
   width: 100px; 
   cursor: pointer;   
`;


 
 /**
  * @desc Emoticon de "Muy bueno"
  */
 export const VeryGoodIcon = styled( InsertEmoticonIcon )`      
     font-size: 3rem !important;
     color: #c59d5f;
 `;
 
 /**
  * @desc Emoticon de "Aceptable"
  */
 export const Acceptable = styled( SentimentSatisfiedIcon )`      
     font-size: 3rem !important;
     color: #c59d5f;
 `;
 
 /**
  * @desc Emoticon de "Debe mejorar"
  */
 export const MustImprove = styled( SentimentVeryDissatisfiedIcon )`      
     font-size: 3rem !important;
     color: #c59d5f;
 `;
 
 /**
  * @desc Texto debajo de los iconos
  */
 export const IconText = styled( Typography )`      
     font-size: 0.9rem !important;    
     margin-top: 5px !important;
     flex-direction: column !important;
 `;
 
 /**
  * @desc Container del input
  */
 export const FormControl = styled(FormControlMaterial)`
 &.MuiFormControl-root{
     margin: 3px;
    
 }
`;

 /**
  * @desc Textarea de sugerencias
  */
 export const TextField = styled( TextFieldMaterial )`      
     width: 90%;
     margin-bottom: 10px !important;
 `;
 
 /**
  * @desc Textarea de sugerencias
  */
 export const SendButton = styled( Button )`      
     margin: 10px !important;
     background-color: #c59d5f !important;
     height: 40px;
     min-width: 150px !important;
     font-weight: bold !important;
 `;

 /**
 * @desc Mensaje de salida
 */
export const Output = styled( GridMaterial )`
    color:red;
`

/**
 * @desc Mensaje de salida
 */
export const StepperContainer = styled( GridMaterial )`
    display: flex;
    justify-content: center;
`

 /**
 * @desc Pasos
 */
export const StepperCircles = styled( StepperMaterial )`
    &.MuiStepper-root{
        padding: 0px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    & .MuiStep-horizontal{
        padding: 0px 8px 0px 8px;
    }
    & .MuiStepIcon-root.MuiStepIcon-active{
        color: #c59d5f;
    }
    & .MuiStepIcon-root.MuiStepIcon-completed{
        color: #c59d5f;
    }
    & .MuiStepIcon-root{
        font-size: 1.2rem;
    }
    
`

 /**
 * @desc Paso
 */
  export const Circle = styled( StepMaterial )`
  
`
 
 /**
 * @desc Paso texto
 */
  export const StepLabel = styled( StepLabelMaterial )`
  
`

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 