import React, { Component } from 'react'
// import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch } from "react-router-dom";
import {FRONTEND_ROUTES} from "../../constants";
import styles from "./styles";
import "./styles.css";
class App extends Component {
    renderFrontRoutes = () => {
        let xhtml = null;
        xhtml = FRONTEND_ROUTES.map(route=> {
            return 
        })
        return xhtml;
    }
    render() {
        return (
            <BrowserRouter>
              <Switch>
                  {this.renderFrontRoutes()}
              </Switch>
            </BrowserRouter>
          
        )
    }
}

// export default withStyles(styles)(App);
export default App;