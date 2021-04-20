/**
 * @desc Dependencias
 */
import styled from "styled-components";

/**
 * @desc Material design
 */
import { 
    Grid as GridMaterial,
    Container as ContainerMaterial,
    Typography,
    TextField as TextFieldMaterial,
    Button,
    AppBar as AppBarMaterial
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
    min-height: 100vh;
    display: flex !important;
    align-items: center;    
`;

/**
 * @desc Card
 */
export const Slide = styled( SlideReact )`  
    width: 100%;
    background-color:white;
    
    border-radius: 50px;     
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
     
`;

/**
 * @desc Contianer de los iconos
 */
export const IconsContainer = styled( GridMaterial )`  
    padding: 5px;
    display: flex;
    justify-content: center;
    min-height: 120px;
`;

/**
 * @desc Contianer de los iconos
 */
export const IconContainer = styled( GridMaterial )`  
    display:flex;    
    flex-direction: column;
    align-items: center;     
`;

/**
 * @desc Emoticon de "Muy bueno"
 */
export const VeryGoodIcon = styled( InsertEmoticonIcon )`      
    font-size: 3rem !important;
    color: #18B9F2;
`;

/**
 * @desc Emoticon de "Aceptable"
 */
export const Acceptable = styled( SentimentSatisfiedIcon )`      
    font-size: 3rem !important;
    color: #18B9F2;
`;

/**
 * @desc Emoticon de "Debe mejorar"
 */
export const MustImprove = styled( SentimentVeryDissatisfiedIcon )`      
    font-size: 3rem !important;
    color: #18B9F2;
`;

/**
 * @desc Texto debajo de los iconos
 */
export const IconText = styled( Typography )`      
    font-size: 0.9rem !important;    
    margin-top: 5px !important;
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
    background-color: #18B9F2 !important;
    height: 40px;
    min-width: 150px !important;
    font-weight: bold !important;
`;

/**
 * @desc Navbar
 */
export const AppBar = styled(AppBarMaterial)`
    &.MuiAppBar-colorPrimary{        
        background-color: #101010;
    }
    & .MuiToolbar-root{
        justify-content: center;
    }
    
`;

/**
 * @desc Footer
 */
 export const Footer = styled( GridMaterial )`    
    margin-top: 0px;
    background-color: #191919;
    padding: 20px;
`;

/**
 * @desc Footer toolbar
 */
export const Title = styled(Typography)`
    &.MuiTypography-root{
        color: #7a7a7a;        
        font-size: 1.5rem;
        font-weight: bold;
    }

`;

/**
 * @desc Footer info
 */
 export const Info = styled(Typography)`

    &.MuiTypography-root{
        color: #7a7a7a;
        font-size: 0.8rem;        
    }

`;
















