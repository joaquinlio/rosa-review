import React from "react"

/**
 * @desc Material-ui
 */
import { 
    Toolbar,      
  } from "@material-ui/core";

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
} from "./NavBar.styles";


import Logo from "../../../../assets/img/logo.png"

function NavBar({ ...props }) {

        
    return (
      <AppBar position="fixed">
          <Toolbar variant={ "dense" }>          
          <a href="https://www.pastarossa.com.ar/">
              <img src={Logo} alt="logo"/>
          </a>
          </Toolbar>
      </AppBar>
    )
}

export default NavBar
