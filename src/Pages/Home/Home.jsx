/**
 * @desc Dependencias
 */
 import React, { Component } from 'react';

 /**
  * @desc Material design
  */
 import { 
   Toolbar
 } from '@material-ui/core';
 
 
 // Componentes
 import BackgroundSlider from 'react-background-slider'
 import Stepper from '../Stepper/Stepper'
 
 /**
  * @desc Imagenes
  */
import slider from "../../assets/img/home-slider-1.jpg";
import slider1 from "../../assets/img/home-slider-3.jpg";
import slider2 from "../../assets/img/home-slider-4.jpg";
import slider3 from "../../assets/img/home-slider-5.jpg";
 

class Home extends Component {
    render() {
        return (
            <>  
                {/* Carrusel de imagenes */}                              
                <BackgroundSlider
                    images={[ slider,slider1, slider2, slider3]}
                    duration={3} transition={2} 
                />
            
                {/* Preguntas  */}
                <Stepper/>                                            
            </>
        )
    }
}

export default Home;
 