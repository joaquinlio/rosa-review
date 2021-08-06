/**
 * @desc Dependencias
 */
import React, { Component } from 'react';

/**
 * @desc Material design
 */
import CssBaseline from '@material-ui/core/CssBaseline';

/**
 * @desc Componentes
 */
import NavBar from './Subcomponents/NavBar/NavBar';

/**
 * @desc Estilos
 */
import {
  Root,
  Main,
  Footer,
  Title,
  Info,
  Copyright,
  LinkedIn
} from "./Wrapper.styles"



/**
 * Componente
 */
class Wrapper extends Component {

  /**
	 * @desc Constructor
	 *
	 * @param { Object } props
	 *
	 * @return { void }
	 */
	constructor(props) {

  super(props)

    this.state = {
      
    }
  }

 
  render() {

    return (      
        <Root>
          <CssBaseline />

          {/* NavBar */}
          <NavBar/>
                       
          <Main>
            {
              this.props.children
            }
          </Main>

          {/* Footer */}
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
        </Root>
    )
  }
}


export default Wrapper;
