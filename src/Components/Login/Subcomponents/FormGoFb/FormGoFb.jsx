/**
 * @desc Dependencias
 */
import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { GoogleLogin } from 'react-google-login';
//import FacebookLogin from 'react-facebook-login';

/**
 * @desc Material-ui
 */
import {
    TextField,
} from "@material-ui/core"

/**
 * @desc Estilos
 */
import { 
    ContentForm,
} from "./FormGoFb.styles";


/**
 * @desc Formulario del login
 */
export default ({ ...props }) => {

    // Alias de las propiedades
    let {
        // Estado del error
        formError,

        // Evento que registra al usuario
        loginWithGoogle = () => {},
        
    } = props;


    const onSignInGoogle = async (googleUser) => {

        let profile = googleUser.getBasicProfile();
        
        loginWithGoogle(profile.getName(), profile.getEmail(), profile.getId(), profile.getImageUrl() )
        
        return true;
    }

    /* const onSignInFacebook = (facebookUser) => {
        console.log("asdasd")
        let { name, email, id } = facebookUser;

        if( formType === 'login' ){
            login( email, id);
        }

        if( formType === 'register' ){
            register( name, email, id );
        }
    } */

    return (                           
        <ContentForm>
            <GoogleLogin
                clientId="451484826261-ikjp38abd25tfc63tphambprf3c38nbk.apps.googleusercontent.com"
                buttonText={`Login with google`}
                onSuccess={onSignInGoogle}
                onFailure={onSignInGoogle}
                cookiePolicy={'single_host_origin'}
            />

            {/* <FacebookLogin
                appId="710103106610799"                       
                fields="name,email,picture"                                    
                callback={onSignInFacebook}
                textButton={`${ formType === 'login' ? 'Sign in' : 'Create account'} with facebook`} 
                size='small'
            /> */}    

        </ContentForm>                                         
    );

};