/**
 * @desc Dependencias
 */
import styled, { css } from "styled-components";

/**
 * @desc Material design
 */
import { 
   AppBar as AppBarMaterial 
} from '@material-ui/core';

/**
  * @desc Navbar
  */
 export const AppBar = styled(AppBarMaterial)`
     &.MuiAppBar-colorPrimary{        
         background-color: #101010;
     }
     & .MuiToolbar-root{
         justify-content: center;
     }
  
 `;
