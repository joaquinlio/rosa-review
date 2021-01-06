/**
 * @desc Dependencias
 */
import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux"
/**
 * @desc Theme
 */
import ThemeDefault from "../../Utils/theme";

// Layout
import Wrapper from "../../Components/Wrapper/Wrapper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ThemeProvider } from "@material-ui/core/styles";

// Componenetes
const HomePage    = lazy(() => import("../Home/Home"));
const ProfilePage = lazy(() => import("../Profile/Profile"));


const App = ({ ...props }) => {
  // Alias de las propiedades
  const { user = null } = props;
  return (
    <ThemeProvider theme={ ThemeDefault( ) }>
        <Wrapper { ...props }>
          <Switch>
              <Suspense fallback={<CircularProgress />}>

                {/* Rutas */}
						    <Route exact path="/" render={ ({ ...props }) => <HomePage {...props} /> } /> 
                <Route exact path="/profile" render={ ({ ...props }) => <ProfilePage {...props} /> } />  
            
              </Suspense>
          </Switch>
        </Wrapper>
    </ThemeProvider>
  );
};

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

export default withRouter(connect( mapStateToProps )( App ));

