/**
 * @desc Dependencias
 */
import styled from "styled-components";

/**
 * @desc Material-ui
 */
import { Grid } from "@material-ui/core";

export const Container = styled.main`
  display:flex;
  min-height:100%;
  margin:0% auto;
  flex-wrap:wrap;  
  padding-top:40px;
  width:100%;
  
`;

/**
 * @desc card de empleo
 */
export const Job = styled.div`
    margin: 50px;
    background:white;    
    height: 200px;
    max-height:95vh;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,.1);
    padding: 20px;
`;

/**
 * @desc card de los filtros
 */
export const Filters = styled.div`
    margin: 10px;
    background:white;    
    height: 100%;
    max-height:95vh;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,.1);
    padding: 20px;
`;
