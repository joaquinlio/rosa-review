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
      storeInfo: {
        "AD": {
          title: "Adrogué",
          address: "Pellerano 754",
          schedule: "Lu 20 a 00 hs | Ma-Do 12 a 16hs | 20 a 00 hs.",
          phone: "11 4214-3437",
          whatsapp: "9 11 5461-2253",
          email: "adrogue@pastarossa.com.ar"
        },
        "LM": {
          title: "Las Lomitas",
          address: "Italia 545",
          schedule: "Lu 20 a 00 hs | Ma-Do 12 a 16hs | 20 a 00 hs.",
          phone: "11 4244-3558",
          whatsapp: "9 11 2390-5267",
          email: "lomas@pastarossa.com.ar"
        },
        "LN": {
          title: "Lanús",
          address: "Del Valle Iberlucea 2662",
          schedule: "Lu 20 a 00 hs | Ma-Do 12 a 16hs | 20 a 00 hs.",
          phone: "11 2144-9571",
          whatsapp: "9 11 2471-0303",
          email: "lanus@pastarossa.com.ar"
        },
        "CN": {
          title: "Canning",
          address: "Av. Castex 5323",
          schedule: "Lu-Do 12 a 16 | 20 a 00 hs.",
          phone: "11 6191-2257",
          whatsapp: "9 11 6191-2257",
          email: "canning@pastarossa.com.ar"
        },
        "RM": {
          title: "Ramos Mejía",
          address: "Necochea 402",
          schedule: "Ma-Do 12 a 16 | 20 a 00 hs.",
          phone: "",
          whatsapp: "9 11 3790-7587",
          email: "adrogue@pastarossa.com.ar"
        },
        "MR": {
          title: "Mercado San Nicolás",
          address: "Av. Córdoba y Callao",
          schedule: "Lu-Sá de 9 a 18 hs.",
          phone: "",
          whatsapp: "",
          email: ""
        }
      }
    }
  }

 
  render() {

    // Alias del estado
    const { storeInfo } = this.state;

    let url = new URL(window.location.href);
    let store = url.searchParams.get("s") || "AD";

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
                { storeInfo[store].title}
              </Title> 
              <Info>
                Dirección: { storeInfo[store].address}
              </Info> 
              <Info>
                  Horario: { storeInfo[store].schedule}
              </Info>                            
              <Info>                    
                  Teléfono: (+54) { storeInfo[store].phone} 
              </Info> 
              <Info>
                  WhatsApp: (+54) { storeInfo[store].whatsapp} 
              </Info> 
              <Info>
                  E-mail: { storeInfo[store].email}
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
