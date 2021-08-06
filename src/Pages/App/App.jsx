/**
 * @desc Dependencias
 */
import React, { Suspense, lazy } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
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


const App = ({ ...props }) => {
  
  return (
    <ThemeProvider theme={ ThemeDefault( ) }>
        <Wrapper { ...props }>
          <Switch>
              <Suspense fallback={<CircularProgress />}>

                {/* Rutas */}
						    <Route exact path="/" render={ ({ ...props }) => <HomePage {...props} /> } /> 
                            
              </Suspense>
          </Switch>
        </Wrapper>
    </ThemeProvider>
  );
};


export default withRouter( App );

