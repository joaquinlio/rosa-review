/**
 * @desc Dependencias
 */
import React from "react";

/**
 * @desc styles
 */
import { Container } from "./Home.styles";

/**
 * @desc Compomnentes
 */
import { GamesFilter } from "./Subcomponents/GamesFilter/GamesFilter"

/**
 * @desc controlador
 */
import HomeUI from "./HomeUI";
import Jobs from "./Subcomponents/Jobs/Jobs";

export default class Home extends HomeUI {
  render() {
    return (
      <Container>
        <GamesFilter/>
        <Jobs/>
      </Container>
    );
  }
}
