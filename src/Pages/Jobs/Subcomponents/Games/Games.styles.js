/**
 * @desc Dependencias
 */
import styled from "styled-components";

/**
 * @desc Material-ui
 */
import { Card as CardMaterial, Typography as TypographyMaterial, Button as ButtonMaterial, Avatar, Grid } from "@material-ui/core";

/**
 * @desc Raiz
 */
export const Root = styled( Grid )`
    margin: 10px;
    
`;

/**
 * @desc Card del league of legends
 */
export const LolCard = styled(Grid)`
  
  background-image: url("assets/img/lol.jpg");
  background-repeat: no-repeat;
  background-position: 0%, 0%, 50%, 50%;
  background-size: auto, cover;
  min-height: 80px;
  background-color: #161e46 !important;
`;

/**
 * @desc Card del Valorant
 */
export const ValorantCard = styled(Grid)`
  
  background-image: url("assets/img/valorant.jpg");
  background-repeat: no-repeat;
  background-position: 0%, 0%, 50%, 50%;
  background-size: auto, cover;
  min-height: 80px;
background-color: #161e46 !important;
`;

/**
 * @desc Card del Valorant
 */
export const CsgoCard = styled(Grid)`
  
  background-image: url("assets/img/csgo.jpg");
  background-repeat: no-repeat;
  background-position: 0%, 0%, 50%, 50%;
  background-size: auto, cover;
  min-height: 80px;
  background-color: #161e46 !important;
`;


/**
 * @desc Titulo 
 */
export const Title = styled( TypographyMaterial )`
    color: #666;
    font-size: 1.5rem !important;
    margin-top: 10px;
    margin-bottom: 10px;
`

/**
 * @desc Boton 
 */
export const BannerButton = styled( ButtonMaterial )`
    color: #FFF !important;  
    font-size: 1.2rem !important;
    font-weight: bold !important;
    position: relative;
    left: 30px;
`;

/**
 * @desc Card de los datos del invocador 
 */
export const SummonerCard = styled(Grid)`
  
  height: 80px;
  background-color: #161e46 !important;  
`;

/**
 * @desc Icono del invocador 
 */
export const AvatarIcon = styled(Avatar)`      
  height: 60px !important;
  width: 60px !important;
  margin: 10px;
`;

/**
 * @desc Icono de clasificatoria
 */
export const RankedIcon = styled(Avatar)`        
  height: 80px !important;
  width: 80px !important;
`;
/**
 * @desc Container del icono
 */
export const IconContainer = styled(Grid)`      
  
`;


