import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
class BreadCrumb extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.breadcrumbs}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Breadcrumbs
                className={classes.breadList}
                aria-label="breadcrumb"
              >
                <Link className={classes.breadItem} color="inherit" to="/">
                  Home
                </Link>

                <Typography className={classes.breadItem} color="textPrimary">
                  Shop Grid
                </Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(BreadCrumb);
