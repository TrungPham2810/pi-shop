import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./styles";

class MenuDesktop extends Component {
  render() {
    var { classes } = this.props;
    return (
      <ul className={cn(classes.listMenu, classes.MenuDesktop)}>
        <li className={classes.menuItem}>
          <NavLink
            to="/"
            exact={true}
            className={classes.linkMenu}
            activeClassName={classes.menuLinkactive}
          >
            Home
          </NavLink>
        </li>
        <li className={classes.menuItem}>
          <NavLink
            to="/product-list"
            exact={true}
            className={classes.linkMenu}
            activeClassName={classes.menuLinkactive}
          >
            Product
          </NavLink>
        </li>
        <li className={cn(classes.menuItem, classes.dropdownMenu)}>
          <div className={cn(classes.linkMenu, classes.labelDropdown)}>
            Shop<span>New</span>
          </div>

          <ul className={classes.dropdownContent}>
            <li>
              <NavLink
                to="/shop-grid"
                exact={true}
                className={classes.childLink}
                activeClassName={classes.menuLinkactive}
              >
                Shop Grid
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                exact={true}
                className={classes.childLink}
                activeClassName={classes.menuLinkactive}
              >
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/checkout"
                exact={true}
                className={classes.childLink}
                activeClassName={classes.menuLinkactive}
              >
                Checkout
              </NavLink>
            </li>
          </ul>
        </li>

        <li className={classes.menuItem}>
          <NavLink
            to="/pages"
            exact={true}
            className={classes.linkMenu}
            activeClassName={classes.menuLinkactive}
          >
            Pages
          </NavLink>
        </li>

        <li className={cn(classes.menuItem, classes.dropdownMenu)}>
          <div className={cn(classes.linkMenu, classes.labelDropdown)}>
            Blog
          </div>
          <ul className={classes.dropdownContent}>
            <li>
              <NavLink
                to="/blog/single-sidebar"
                exact={true}
                className={classes.childLink}
                activeClassName={classes.menuLinkactive}
              >
                Blog Single Sidebar
              </NavLink>
            </li>
          </ul>
        </li>

        <li className={classes.menuItem}>
          <NavLink
            to="/contact-us"
            exact={true}
            className={classes.linkMenu}
            activeClassName={classes.menuLinkactive}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    );
  }
}
export default withStyles(styles)(MenuDesktop);
