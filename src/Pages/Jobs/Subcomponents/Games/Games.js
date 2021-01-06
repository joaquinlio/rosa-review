/**
 * @desc Dependencias
 */
import React, { useState, useEffect } from "react";

/**
 * @desc Material-ui
 */
import {
  Grid,
  Card,
  Dialog,
  Slide,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  Typography,
  CircularProgress,
  withStyles,
  Badge,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";

/**
 * @desc Iconos
 */
import { CheckCircleOutline } from "@material-ui/icons";

/**
 * @desc Estilos
 */
import { Root, LolCard, ValorantCard, CsgoCard, Title, BannerButton, SummonerCard, AvatarIcon, IconContainer, RankedIcon} from "./Games.styles";

/**
 * @desc Componentes
 */

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const StyledBadge = withStyles((theme) => ({
  badge: {        
    fontWeight: 'bold',  
    right: "27%"  
  }
}))(Badge);

const summonerTest = {
    "id": "_eTb37SFRPhUM6NknI0omuy1yo-IbzroBYH74ti9nN4",
    "accountId": "5xG6vr5jG8kdDOaU1DnWQtDlp10QhusVP4qMyN6zMw",
    "name": "Newgate",
    "iconId": 508,
    "level": 183,
    "rankeds": [
        {
            "queueType": "RANKED_FLEX_SR",
            "tier": "PLATINUM",
            "rank": "III",
            "points": 0,
            "wins": 26,
            "losses": 20
        },
        {
            "queueType": "RANKED_SOLO_5x5",
            "tier": "PLATINUM",
            "rank": "IV",
            "points": 20,
            "wins": 29,
            "losses": 38
        }
    ]
}

export const Games = (props) => {

  // Estado de input del nombre de invocador
  const [summonerName, setSummonerName] = useState("Newgate");

  // Estado del dialog
  const [openDialog, setOpenDialog] = useState(false);

  // Estado de busqueda del invocador
  const [loadingSummoner, setLoadingSummoner] = useState(false);

  // Datos del invocador 
  const [summoner, setSummoner] = useState(summonerTest)

  // Maneja el estado del dialog de producto
  const handleClickDialog = (item) => {
    // Se setea el estado del dialog
    setOpenDialog(!openDialog);
  };

  const handleChangeSummonerName = (e) => {
    setSummonerName(e.target.value)
  }


  const {
    // Trae los datos del invocador
    getSummonerData = () => {}

  } = props;

  const getData = async () => {

    try {
      
      // Evento de carga
      setLoadingSummoner(true);

      // Se cierra el modal
      handleClickDialog();

      // Trae los datos del invocador
      const summonerData = await getSummonerData( summonerName );
      
      // Evento de carga
      setLoadingSummoner(false);

      console.log(summonerData)
      setSummoner(summonerData)
      

      return true;

    } catch (error) {
      console.log(error)
      return false
    }
  }

  // Card de carga
  const loadingCard = () => {
    return (                                       
      <Grid style={{ background: '#06c', minHeight: "80px", minWidth:"480px", display: "flex" }} justify={ "center" } alignItems={ "center" }>
          <CircularProgress  color="secondary"  />
          <Typography variant={ "h6" } style={{ color: 'white', padding: '10px' }}>{"Buscando invocador.."}</Typography>      
      </Grid>
    )
  }
  return (
    <Root container>
      {/* League of Legends */}
      
        <Title>League of Legends</Title>
        
        {
          summoner &&
          <SummonerCard container>
            
            <IconContainer item xs={2}>              
              <StyledBadge
                color="error"
                badgeContent={summoner.level}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}                
                overlap="circle"
                max={2000}
              > 
                <AvatarIcon alt="avatarIcon" src={`http://ddragon.leagueoflegends.com/cdn/10.21.1/img/profileicon/${summoner.iconId}.png`}/>  
              </StyledBadge>
              
              
            </IconContainer>
            
            <Grid item xs={4}>
              <Typography style={{ color: "white", fontWeight: "bold", fontSize: "1.1rem"}}>
                  {summoner.name}
              </Typography>    
              <Typography style={{ color: "#FFFF", fontWeight: "bold", fontSize: "0.8rem",  paddingTop: "10px", paddingLeft: "10px" }}>Ranked Solo/Duo</Typography>         
            </Grid>
            <Grid item xs={2}>
              <RankedIcon alt="avatarIcon" src={`assets/img/lol/emblems/${summoner.rankeds[0].tier}.png`} />              
            </Grid>
            <Grid item xs={4}>
              
              <Typography style={{ color: "#3c7877", fontWeight: "bold", fontSize: "1.1rem", paddingTop: "5px" }}>{`${summoner.rankeds[0].tier} ${summoner.rankeds[0].rank}`}</Typography>
              <Typography style={{ color: "#FFFF", fontWeight: "bold", fontSize: "0.8rem" }}>{`${summoner.rankeds[0].points} LP`}</Typography>
              <Typography style={{ color: "#FFFF", fontWeight: "bold", fontSize: "0.8rem" }}>{`${summoner.rankeds[0].wins}W  ${summoner.rankeds[0].losses}L `}</Typography>
            </Grid>
            
          </SummonerCard>
        }

        {
          !loadingSummoner && !summoner &&                       
            <LolCard container>
              <BannerButton onClick={() => handleClickDialog()}>Añadir cuenta</BannerButton>
            </LolCard>
        }
        { loadingSummoner && loadingCard() }
    
      
        <Title>Valorant</Title>
        <ValorantCard container>
          <BannerButton onClick={() => handleClickDialog()}>Añadir cuenta</BannerButton>
        </ValorantCard>

        <Title>Counter Strike</Title>
        <CsgoCard container>
          <BannerButton onClick={() => handleClickDialog()}>Añadir cuenta</BannerButton>
        </CsgoCard>

      {/* Modal de añadir summoner */}
      <Dialog
          open={openDialog}
          onClose={handleClickDialog}
          TransitionComponent={Transition}
        >
          <DialogTitle >{"Añadir cuenta de League of Legends"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <TextField value={summonerName} label="Summoner Name" onChange={ (e) => handleChangeSummonerName(e)}/>
            </DialogContentText>  
          </DialogContent>
          <DialogActions>
            <Button  color="primary" onClick={ () => getData()}>
              Guardar
            </Button>
          </DialogActions>
      </Dialog>

    </Root>
  );
};
