/**
 * @desc Dependencias
 */
import React from "react";
import { connect } from "react-redux";
/**
 * @desc Material-ui
 */
import {
  Grid
} from "@material-ui/core"

/**
 * @desc styles
 */
import { Container, ContainerCategory, Card, AccountCircle, Group, CardForm } from "./Profile.styles";

/**
 * @desc Compomnentes
 */
import { Form } from "./Subcomponents/Form/Form";
import { Games } from "./Subcomponents/Games/Games"

/**
 * @desc controlador
 */
import ProfileUi from "./ProfileUI";


class Profile extends ProfileUi {

  render() {

    // Alias del estado
    let {
      profile,
      countrys
    } = this.state;

    // Alias de las propiedades
    let {
      user
    } = this.props;

    return (
      <Container container>
        {
          profile.category.empty &&
            <ContainerCategory xs={12}>
              <Card onClick={ () => this.changeProfileData('category','player')}> 
                <AccountCircle/>
              </Card>
              <Card onClick={ () => this.changeProfileData('category','team')}> 
                <Group/>
              </Card>
            </ContainerCategory>
        }
        <Grid item xs={12}>
          <Container container>
            <Grid item xs={7}>
              <CardForm>
                <Form countrys={countrys} changeProfileData={this.changeProfileData} profile={profile} updateProfile={this.updateProfile} user={user}/>
              </CardForm>
            </Grid>
            <Grid item xs={5}>
              <CardForm>
                <Games  getSummonerData={ ( summonerName ) => this.getSummonerData( summonerName ) }></Games>
              </CardForm>
            </Grid>
          </Container>
        </Grid>
      </Container>
    );
  }
}

/**
 * @desc Puente a redux
 * 
 * @param { Object }
 * 
 * @return { Object }
 */
const mapStateToProps = store => {

	return {

		// Usuario logueado
		user: store.LoginReducer.user

	};

};
export default connect(mapStateToProps)(Profile);