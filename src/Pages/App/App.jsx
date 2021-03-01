/**
 * @desc Dependencias
 */
import React from 'react';

/**
 * @desc Material design
 */
import { 
  Toolbar 
} from '@material-ui/core';

import Imagen from "../../assets/img/logo.png"

/**
 * @desc Estilos
 */
import { Container, Slide, QuestionContainer, Question, IconsContainer, IconContainer, VeryGoodIcon, Acceptable, MustImprove, IconText, TextField, SendButton, AppBar, FormContainer } from "./App.styles"

const questions = [
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
]

const App = ({ ...props }) => {

  const [ visibleCard, setvisibleCard] = React.useState(0);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant={ "dense" }>          
          <img src={Imagen} alt="logo"/>  
        </Toolbar>
      </AppBar>
     
      <Container>      
      {
        questions.map( (question , key) => 
          <Slide style={{ display: visibleCard === key ? 'block' : 'none'}}>
            <>
              <QuestionContainer>
                <Question variant="h5">{ question.title }</Question>
              </QuestionContainer>
              <IconsContainer container>
                {
                  key < 5 &&
                  <>
                    
                    <IconContainer onClick={ () => setvisibleCard( visibleCard + 1 )} item xs="4">
                      <VeryGoodIcon />
                      <IconText>Muy bueno</IconText>             
                    </IconContainer>
                    <IconContainer onClick={ () => setvisibleCard( visibleCard + 1 )} item xs="4">
                    <Acceptable />
                      <IconText>Aceptable</IconText>             
                    </IconContainer>
                    <IconContainer onClick={ () => setvisibleCard( visibleCard + 1 )} item xs="4">
                      <MustImprove /> 
                      <IconText>Debe mejorar</IconText>             
                    </IconContainer> 
                    
                  </>                                     
                }   
                {
                  key === 5 &&
                  <>                    
                    <IconContainer onClick={ () => setvisibleCard( visibleCard + 1 )} item xs="6">
                      <VeryGoodIcon />
                      <IconText>Si</IconText>             
                    </IconContainer>
                    <IconContainer onClick={ () => setvisibleCard( visibleCard + 1 )} item xs="6">
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
                    />  
                    <TextField                      
                      label="Nombre y Apellido"                      
                      variant="outlined"
                    />
                    <TextField  
                      label="Dirección"                                                               
                      variant="outlined"
                    />
                    <TextField   
                      label="Fecha de cumpleaños"                                                              
                      variant="outlined"
                    />
                    <TextField  
                      label="Tel/Celular"                                                               
                      variant="outlined"
                    />
                    <TextField  
                      label="Email"                                                               
                      variant="outlined"
                    />
                    <SendButton variant="contained" color="primary" onClick={ () => setvisibleCard( visibleCard + 1 )}>Enviar</SendButton>
                  </> 
                } 
                {
                  key === 7 &&
                  <>                    
                    <SendButton variant="contained" color="primary" onClick={ () => setvisibleCard( 0 )}>Responder otra encuesta</SendButton>                    
                  </> 
                }                            
              </IconsContainer> 
            </>
          </Slide>    
        )
      }          
    </Container>
  
    </>
  );
};

export default App;
