/**
 * @desc Dependencias
 */
import styled, { css } from "styled-components";

/**
 * @desc Material design
 */
import { 
    IconButton as IconButtonMaterial, AppBar as AppBarMaterial, Button, Menu as MenuMaterial, MenuItem as MenuItemMaterial
} from '@material-ui/core';

export const IconButton = styled(IconButtonMaterial)`

    &.MuiIconButton-root{
        margin-right: 25px;
    }                  
`;


export const AppBar = styled(AppBarMaterial)`
    &.MuiAppBar-colorPrimary{

        background-color: #0a192f;
    }
`;

export const ButtonLogin = styled(Button)`
    &.MuiButton-root{        
        
        color: #64ffda;
        font-weight: 600;
        &:hover{
            background-color: #133040; 
        }
    }
    &.MuiButton-outlined{
        border: 1px solid #64ffda;
    }
`;

export const Menu = styled( MenuMaterial )`

    

`;

export const MenuItem = styled( MenuItemMaterial )`

    

`;