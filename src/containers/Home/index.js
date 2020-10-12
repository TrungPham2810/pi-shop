import React, { Component } from "react";
import BannerSlide from "../../components/BannerSlide/";
import SmallBanner from "../../components/SmallBanner/";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.banner}>
          <BannerSlide />
          <SmallBanner className={classes.smallBanner} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
