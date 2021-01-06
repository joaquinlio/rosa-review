/**
 * @desc Dependencias
 */
import styled, { css } from "styled-components";

/**
 * @desc Material UI
 */
import { 
    Grid, Button as ButtonMaterial, FormControl as FormControlMaterial, Avatar as AvatarMaterial, Grid as GridMaterial
 } from '@material-ui/core';

 /**
 * @desc Contenido del formulario
 */
export const ContentForm = styled( Grid )`
   margin: 15px;
`;

/**
 * @desc Contenedor de botones
 */
export const ButtonContent = styled( Grid )`
    
    display:flex;    
    padding:5px;
    justify-content:space-between;
    flex-wrap:nowrap;
    flex-direction:row;
`;

export const Button = styled(ButtonMaterial)`
    &.MuiButton-root{        
        background-color: #17B159;
        color: white;
        font-weight: 600;
        &:hover{
            background-color: #3DBF74; 
        }
    }
`;

export const FormControl = styled(FormControlMaterial)`
    &.MuiFormControl-root{

       
    }
`;
export const Avatar = styled(AvatarMaterial)`
   &.MuiAvatar-root{
       width: 100px;
       height: 100px;
   }
`;

/**
 * @desc Mensaje de salida
 */
export const Output = styled( GridMaterial )`
    color:red;
`


