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

import Logo from "../../assets/img/logo.png"

// Componentes
import BackgroundSlider from 'react-background-slider'
import Form from '../Form/Form'

/**
 * @desc Estilos
 */
import {  
  AppBar,
  Footer,
  Title,
  Info,
  Copyright,
  LinkedIn
} from "./App.styles"

// Imagenes de fondo
const images = [
  "https://www.pastarossa.com.ar/wp-content/uploads/2015/09/home-slider-1.jpg",
  "https://www.pastarossa.com.ar/wp-content/uploads/2015/09/home-slider-3.jpg",
  "https://www.pastarossa.com.ar/wp-content/uploads/2015/09/home-slider-4.jpg",
  "https://www.pastarossa.com.ar/wp-content/uploads/2015/09/home-slider-5.jpg",
];

const App = ({ ...props }) => {
   
  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant={ "dense" }>          
          <a href="https://www.pastarossa.com.ar/">
            <img src={Logo} alt="logo"/>
          </a>
        </Toolbar>
      </AppBar>

      <BackgroundSlider
        images={images}
        duration={3} transition={2} 
      />

      {/* Preguntas  */}
      <Form/>

      <Footer>       
          <Title>
            Adrogué
          </Title> 
          <Info>
            Dirección: Pellerano 754
          </Info> 
          <Info>
            Horario:
          </Info>
          <Info>
            Lu 20 a 00 hs.
          </Info>
          <Info>
            Ma-Do 12 a 16 | 20 a 00 hs.
          </Info>
          <Info>                    
            Teléfono: (+54) 11 4214-3437  
          </Info> 
          <Info>
            WhatsApp: (+54) 9 11 5461-2253 
          </Info> 
          <Info>
            E-mail: adrogue@pastarossa.com.ar
          </Info> 
          <Copyright>
            Copyright © 2016-2021 Pasta Rossa | Todos los derechos reservados | Desarrollado por <LinkedIn href="https://www.linkedin.com/in/joaquin-lio/" target="_blanck">Joaquin Lio</LinkedIn>
          </Copyright>
      </Footer>
    </>
  );
};

export default App;
