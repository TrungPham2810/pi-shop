import React, { Component } from "react";
import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../../commons/Theme/index";
import { BrowserRouter, Switch } from "react-router-dom";
import { FRONTEND_ROUTES } from "../../constants";
import LayoutRoute from "../../commons/layout/frontend/LayoutRoute";
import styles from "./styles";
import "./styles.css";
class App extends Component {
  renderFrontRoutes = () => {
    let xhtml = null;
    xhtml = FRONTEND_ROUTES.map((route) => {
      return (
        <LayoutRoute
          key={route.path}
          name={route.name}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      );
    });
    return xhtml;
  };
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Switch>{this.renderFrontRoutes()}</Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

// export default withStyles(styles)(App);
export default withStyles(styles)(App);
