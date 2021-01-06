/**
 * @desc Dependencias
 */
import React from "react";

/**
 * @desc styles
 */
import { Container, Game } from "./GamesFilter.styles";

/**
 * @desc Material-ui
 */
import {
    Grid
  } from "@material-ui/core";

/**
 * @desc Compomnentes
 */

/**
 * @desc Controlador
 */
export const GamesFilter = () => {
     return (
        <Container container>
            <Game game={"lol"}>
                  
            </Game> 
            <Game game={"valorant"}>
                  
            </Game>
            <Game game={"csgo"}>
                  
            </Game>       
        </Container>
     )
 }
 
