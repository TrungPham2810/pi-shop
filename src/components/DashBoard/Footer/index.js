import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faFlickr,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import payments from "../../../assets/images/payments.png";
import logo2 from "../../../assets/images/logo2.png";
import cn from "classnames";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        {/* <!-- Footer Top --> */}
        <div className="footer-top section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-6 col-12">
                {/* <!-- Single Widget --> */}
                <div className={cn(classes.singleFooter, classes.about)}>
                  <div className={classes.logo}>
                    <Link to="/">
                      <img src={logo2} alt="#" />
                    </Link>
                  </div>
                  <p className={classes.text}>
                    Praesent dapibus, neque id cursus ucibus, tortor neque
                    egestas augue, magna eros eu erat. Aliquam erat volutpat.
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
                    luctus, metus.
                  </p>
                  <p className={classes.call}>
                    Got Question? Call us 24/7
                    <span>
                      <a className={classes.telephone} href="tel:123456789">
                        +0123 456 789
                      </a>
                    </span>
                  </p>
                </div>
                {/* <!-- End Single Widget --> */}
              </div>
              <div className="col-lg-2 col-sm-6 col-12">
                {/* <!-- Single Widget --> */}
                <div className={cn(classes.singleFooter, classes.links)}>
                  <h4 className={classes.title}>Information</h4>
                  <ul>
                    <li>
                      <Link className={classes.linkContact} to="/">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className={classes.linkContact} to="/">
                        Faq
                      </Link>
                    </li>
                    <li>
                      <Link className={classes.linkContact} to="/">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link className={classes.linkContact} to="/">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link className={classes.linkContact} to="/">
                        Help
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Single Widget --> */}
              </div>
              <div className="col-lg-2 col-sm-6 col-12">
                {/* <!-- Single Widget --> */}
                <div className={cn(classes.singleFooter, classes.links)}>
                  <h4 className={classes.title}>Customer Service</h4>
                  <ul>
                    <li>
                      <Link className={classes.linkContact} to="/">
                        Payment Methods
                      </Link>
                    </li>
                    <li>
                      <Link className={classes.linkContact} to="/">
                        Money-back
                      </Link>
                    </li>
                    <li>
                      <Link className={classes.linkContact} to="/">
                        Returns
                      </Link>
                    </li>
                    <li>
                      <Link className={classes.linkContact} to="/">
                        Shipping
                      </Link>
                    </li>
                    <li>
                      <Link className={classes.linkContact} to="/">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Single Widget --> */}
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                {/* <!-- Single Widget --> */}
                <div className={cn(classes.singleFooter, classes.social)}>
                  <h4 className={classes.title}>Get In Tuch</h4>
                  {/* <!-- Single Widget --> */}
                  <div className="contact">
                    <ul>
                      <li>NO. 342 - London Oxford Street.</li>
                      <li>012 United Kingdom.</li>
                      <li>info@eshop.com</li>
                      <li>+032 3456 7890</li>
                    </ul>
                  </div>
                  {/* <!-- End Single Widget --> */}
                  <ul className={classes.listIcon}>
                    <li>
                      <Link className={classes.icon} to="/">
                        {" "}
                        <FontAwesomeIcon icon={faFacebookF} />
                      </Link>
                    </li>
                    <li>
                      <Link className={classes.icon} to="/">
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </li>
                    <li>
                      <Link className={classes.icon} to="/">
                        <FontAwesomeIcon icon={faFlickr} />
                      </Link>
                    </li>
                    <li>
                      <Link className={classes.icon} to="/">
                        <FontAwesomeIcon icon={faInstagram} />
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Single Widget --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Footer Top --> */}
        <div className={classes.coppyRight}>
          <div className="container">
            <div className={classes.inner}>
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className={classes.left}>
                    <p>
                      Copyright © 2020{" "}
                      <Link to="http://www.wpthemesgrid.com" target="_blank">
                        Wpthemesgrid
                      </Link>{" "}
                      - All Rights Reserved.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className={classes.right}>
                    <img src={payments} alt="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default withStyles(styles)(Footer);
