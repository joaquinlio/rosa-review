/**
 * @desc Dependencias
 */
import styled, { css } from "styled-components";

/**
 * @desc Material-ui
 */
import { Grid, Card as CardMaterial  } from "@material-ui/core";
/**
 * @desc Icons
 */
import { AccountCircle as AccountCircleMaterial, Group as GroupMaterial } from '@material-ui/icons';

export const Container = styled(Grid)`
    width:100%;
`;

export const ContainerCategory = styled(Grid)`
    display: flex;
    justify-content: space-evenly;
    width:100%;
    flex-wrap: wrap;
    flex-direction: row;
`;

export const Card = styled(CardMaterial)`
    display: flex;  
    justify-content: center;
    width: 30%;
    max-height: 200px;     
    margin: 10px 0px 0px 0px;   
    @media( max-width: 425px ){
        width:50%;
        margin:10px auto;
    }
`;

export const AccountCircle = styled(AccountCircleMaterial)`
    &.MuiSvgIcon-root{
        font-size: 13rem;
    }
`;

export const Group = styled(GroupMaterial)`
    &.MuiSvgIcon-root{
        font-size: 13rem;
    }
`;

export const CardForm = styled(CardMaterial)`
    margin: 10px 20px 0px 20px;  
`;


