/**
 * @desc Dependencias
 */
import styled, { css } from "styled-components";

/**
 * @desc Material design
 */
 import { 
    Grid as GridMaterial,
    Typography
 } from '@material-ui/core';

export const Root = styled.div`
    
`;

export const Main = styled.div`
    padding:0px;
    margin: 0px;
    display: flex;
    width: 100%;
    margin-top: 60px;
`;

/**
  * @desc Footer
  */
 export const Footer = styled( GridMaterial )`    
     margin-top: 0px;
     background-color: #191919;
     padding: 20px;
 `;
 
 /**
  * @desc Footer toolbar
  */
  export const Title = styled(Typography)`
  &.MuiTypography-root{
      color: #7a7a7a;        
      font-size: 1.5rem;
      font-weight: bold;
  }
 
 `;

 /**
  * @desc Footer info
  */
  export const Info = styled(Typography)`
 
     &.MuiTypography-root{
         color: #7a7a7a;
         font-size: 0.8rem;        
     }
 
 `;
 
 /**
  * @desc Footer Copyright
  */
  export const Copyright = styled(Typography)`
 
     &.MuiTypography-root{
         color: #7a7a7a;
         font-size: 0.8rem;    
         text-align: center;
         margin-top: 15px;    
     }
 
 `;
 
 
 /**
  * @desc Footer LinkedIn
  */
  export const LinkedIn = styled.a` 
     font-weight: bold;   
     color: #c59d5f;
     font-size: 0.8rem;
     text-decoration: none;          
 `;
