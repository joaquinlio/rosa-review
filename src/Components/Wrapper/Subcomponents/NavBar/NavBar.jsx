import React, { useContext, useState } from "react"

/**
 * @desc Material-ui
 */
import { 
    Toolbar,  
    Grid,
    Avatar
  } from "@material-ui/core";

/**
 * @desc Estilos
 */
import {
    IconButton,
    AppBar,
    ButtonLogin,
    Menu,
    MenuItem
} from "./NavBar.styles";


function NavBar({ ...props }) {

    // Alias de las propiedades
    let {  
        
        // Estado de apertura del menu
        setOpenLogin = () => {}

    } = props;

    const { user, Logout } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    // Desloguea al usuario y cierra el menu
    const handleClose = () => {
      setAnchorEl(null);
      Logout();
    };

    // Redirecciona a la url y cierra el menu
    const redirect = (url) =>{
      
      props.history.push(url)
      setAnchorEl(null);

    }

    return (
      <AppBar position="fixed">
        <Toolbar variant={ "dense" }>

          { /* Lateral izquierdo */ }
          <Grid container item xs={ 12 } direction="row" justify="flex-start" alignItems="center">

                   
          </Grid>

          { /* Lateral derecho */ }
          <Grid container item xs={ 12 } direction="column" alignItems="flex-end">
             {
               user &&
               <>
                <Avatar src={user.avatar} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={ () => setAnchorEl(null)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  elevation={0}
                  getContentAnchorEl={null}
                >
                  <MenuItem onClick={ () => redirect("/profile")}>Perfil</MenuItem>  
                  <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>                  
                </Menu>
               </>

             } 

             {
               !user &&
               <ButtonLogin variant="outlined" onClick={ () => setOpenLogin()}>Ingresar</ButtonLogin>
             }               
            
            
          </Grid>

        </Toolbar>
      </AppBar>
    )
}

export default NavBar
