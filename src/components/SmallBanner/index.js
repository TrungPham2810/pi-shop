import React, { Component } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class SmallBanner extends Component {
  render() {
    const { classes } = this.props;
    return (
      <section className={classes.smallBanner}>
        <div className="container-fluid">
          <div className="row">
            {/* <!-- Single Banner  --> */}
            <div className="col-lg-4 col-sm-6 col-12">
              <div className={classes.singleBanner}>
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className={classes.content}>
                  <p>Man's Collectons</p>
                  <h3>
                    Summer travel <br /> collection
                  </h3>
                  <Link className={classes.link} to="/">
                    Discover Now
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- /End Single Banner  --> */}
            {/* <!-- Single Banner  --> */}
            <div className="col-lg-4 col-sm-6 col-12">
              <div className={classes.singleBanner}>
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className={classes.content}>
                  <p>Bag Collectons</p>
                  <h3>
                    Awesome Bag <br /> 2020
                  </h3>
                  <Link className={classes.link} to="/">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- /End Single Banner  --> */}
            {/* <!-- Single Banner  --> */}
            <div className="col-lg-4 col-sm-12 col-12">
              <div className={cn(classes.singleBanner, classes.tabHeight)}>
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className={classes.content}>
                  <p>Flash Sale</p>
                  <h3>
                    Mid Season <br /> Up to <span>40%</span> Off
                  </h3>
                  <Link className={classes.link} to="/">
                    Discover Now
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- /End Single Banner  --> */}
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(SmallBanner);
