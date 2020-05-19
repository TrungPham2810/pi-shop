import React, { Component } from "react";
import banner1 from "../../assets/images/banner/banner1.jpg";
import banner2 from "../../assets/images/banner/banner2.jpg";
import banner3 from "../../assets/images/banner/banner3.jpg";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class BannerSlide extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="container-fluid" style={{ padding: 0 }}>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* <!-- Indicators --> */}
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          {/* <!-- Wrapper for slides --> */}
          <div className="carousel-inner">
            <div className="item active">
              <img
                className={classes.slideImg}
                src={banner1}
                alt="Los Angeles"
                style={{ width: "100%" }}
              />
              <div className={classes.textBanner}>
                <h1 className={classes.title}>
                  <span>UP TO 50% OFF </span>
                  <br /> Shirt For Man
                </h1>
                <p className={classes.content}>
                  Maboriosam in a nesciung eget magnae <br /> dapibus disting
                  tloctio in the find it pereri <br /> odiy maboriosm.
                </p>
                <div className="button">
                  <Link className="btn btn-primary" to="/product-list">
                    Shop Now!
                  </Link>
                </div>
              </div>
            </div>
            <div className="item">
              <img
                className={classes.slideImg}
                src={banner2}
                alt="Chicago"
                style={{ width: "100%" }}
              />
              <div className={classes.textBanner}>
                <h1 className={classes.title}>
                  <span>UP TO 60% OFF </span>
                  <br /> Shirt For Man
                </h1>
                <p className={classes.content}>
                  Maboriosam in a nesciung eget magnae <br /> dapibus disting
                  tloctio in the find it pereri <br /> odiy maboriosm.
                </p>
                <div className="button">
                  <Link className="btn btn-primary" to="/product-list">
                    Shop Now!
                  </Link>
                </div>
              </div>
            </div>

            <div className="item">
              <img
                className={classes.slideImg}
                src={banner3}
                alt="New York"
                style={{ width: "100%" }}
              />
              <div className={classes.textBanner}>
                <h1 className={classes.title}>
                  <span>UP TO 90% OFF </span>
                  <br /> Shirt For Man
                </h1>
                <p className={classes.content}>
                  Maboriosam in a nesciung eget magnae <br /> dapibus disting
                  tloctio in the find it pereri <br /> odiy maboriosm.
                </p>
                <div className="button">
                  <Link className="btn btn-primary" to="/product-list">
                    Shop Now!
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Left and right controls --> */}
          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(BannerSlide);
