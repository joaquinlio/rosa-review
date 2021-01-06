/**
 * @desc Dependencias
 */
import { Grid } from "@material-ui/core";
import React from "react";

/**
 * @desc Material-ui
 */
import {
    TextField,
    InputLabel,
    Select,
    MenuItem
} from "@material-ui/core"

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from '@material-ui/pickers';
  
import DateFnsUtils from '@date-io/date-fns';
  
/**
 * @desc Estilos
 */
import { 
    ContentForm,
    ButtonContent,
    Button,
    FormControl,
    Avatar,
    Output
} from "./Form.styles";


/**
 * @desc Formulario del login
 */
export const Form = ({ ...props }) => {

    // Alias de las propiedades
    let {
        // Estado del error
        formError,
        // Paises 
        countrys,
        // Perfil
        profile,
        // Evento para cambiar datos del perfil
        changeProfileData,
        // Evento para guardar los datos
        updateProfile,
        // Datos del usuario
        user
    } = props;
    
    const handleDateChange = (date) => {
        changeProfileData( "birthdate", date);
    };

    return (        
        <Grid container>

            <Grid item={ true } xs={12} >
                <ContentForm>

                    <FormControl  fullWidth>
                        {
                            user &&
                                <Avatar src={user.avatar} />
                        }
                    </FormControl>
                    
                    
                    { /* Nombre */ }
                    <FormControl  fullWidth>
                        <TextField                                                            
                            value={ profile.name.value }  
                            onChange={ evt => changeProfileData( "name", evt.target.value ) } 
                            label="Nombre"                            
                        />  
                        {
                            profile.name.empty &&
                                <Output>El nombre es requerido</Output>
                        }                 
                    </FormControl>
                    <FormControl  fullWidth>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"                               
                                label="Fecha de nacimiento"
                                value={ profile.birthdate.value }
                                onChange={ handleDateChange }
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        {
                            profile.birthdate.empty &&
                                <Output>Seleccionar una fecha</Output>
                        }
                    </FormControl>
                    <FormControl  fullWidth>
                        <InputLabel>Sexo</InputLabel>
                        <Select                     
                            value={profile.gender.value}
                            onChange={ (event) => changeProfileData( "gender", event.target.value)}
                        >
                            <MenuItem value={"Hombre"}>Hombre</MenuItem>
                            <MenuItem value={"Mujer"}>Mujer</MenuItem>
                            <MenuItem value={"Otro"}>Otro</MenuItem>
                        </Select>  
                        {
                            profile.gender.empty &&
                                <Output>Seleccionar un genero</Output>
                        }          
                    </FormControl>           
                    <FormControl  fullWidth>
                        <TextField                                                            
                            value={ profile.phone.value }  
                            onChange={ evt => changeProfileData("phone", evt.target.value ) } 
                            label="Telefono"                            
                        /> 
                        {
                            profile.phone.empty &&
                                <Output>El telefono es requerido</Output>
                        }                  
                    </FormControl>                    
                    {
                        countrys &&
                        <FormControl  fullWidth>
                            <InputLabel>Pais</InputLabel>
                            <Select  
                                value={profile.country.value}          
                                onChange={(event) => changeProfileData( "country", event.target.value)}
                            >
                                {
                                    countrys.map( (country,key) => {                                       
                                        return <MenuItem key={key} value={country.id}>{country.name}</MenuItem>                                        
                                    })
                                }                                                                
                            </Select>    
                            {
                                profile.country.empty &&
                                    <Output>Seleccionar un pais</Output>
                            } 
                        </FormControl>
                    }           
                    <Button style={{ marginTop: "15px"}} onClick={ () => updateProfile()}>Guardar</Button>                                                                                                  
                </ContentForm>                            
            </Grid>

        </Grid>
      
    );

};