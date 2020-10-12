import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import configureStore from "../../redux/configureStore";
import { Provider } from "react-redux";
import theme from "../../commons/Theme/index";
import { FRONTEND_ROUTES } from "../../constants";
import LayoutRoute from "../../commons/layout/frontend/LayoutRoute";
import Header from "../../components/DashBoard/Header";
import Footer from "../../components/DashBoard/Footer";
import styles from "./styles";
import "./styles.css";

const store = configureStore();

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
      <Provider store={store}>
        <BrowserRouter basename="/">
          <ThemeProvider theme={theme}>
            <Header />
            <Switch>{this.renderFrontRoutes()}</Switch>
            <Footer />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

// export default withStyles(styles)(App);
export default withStyles(styles)(App);
