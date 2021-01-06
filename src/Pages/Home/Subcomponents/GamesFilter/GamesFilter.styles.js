/**
 * @desc Dependencias
 */
import styled, { css } from "styled-components";

/**
 * @desc Material-ui
 */
import { Grid, Card  } from "@material-ui/core";

export const Container = styled(Grid)`
    display: flex;
    justify-content: space-evenly;
    width:100%;
    flex-wrap: wrap;
    flex-direction: row;
    height: 350px;
    background-image: url("assets/img/backgroundFilter.jpg");        
    background-size: cover;
`;

export const Game = styled(Card)`
    display: flex;  
    width: 30%;
    max-height: 200px;     
    margin-top: 80px;
    ${
        props => 
            css`
                background-image: url("assets/img/${props.game}Background.png"); 
            `

    }    
    background-repeat: no-repeat;
    background-position: 0%, 0%, 50%, 50%;
    background-size: cover;
    @media( max-width: 425px ){
        width:70%;
        margin:10px auto;
    }
`;

