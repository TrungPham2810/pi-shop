import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import cn from 'classnames';
import Collapsible from 'react-collapsible';
import { Link, NavLink } from 'react-router-dom';
import styles from './styles';

class MenuMobile extends Component {
    render() {
        var { classes, mobile } = this.props;
        return (
            <ul className={cn(classes.listMenu, classes.menuMobile)}  >

                <li>
                    <NavLink
                        to="/"
                        exact={true}
                        className={classes.linkMenu}
                        activeClassName={classes.menuLinkactive}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/product-list"
                        exact={true}
                        className={classes.linkMenu}
                        activeClassName={classes.menuLinkactive}
                    >
                        Product
                    </NavLink>
                </li>
                <li className={classes.dropdownMenu}>
                    <Collapsible trigger="Shop" transitionTime={300}>
                        <ul className={classes.dropdownContent}>
                            <li>
                                <NavLink
                                    to="/product-list"
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
                    </Collapsible>

                </li>

                <li>
                    <NavLink
                        to="/pages"
                        exact={true}
                        className={classes.linkMenu}
                        activeClassName={classes.menuLinkactive}
                    >
                        Pages
                    </NavLink>
                </li>

                <li className={classes.dropdownMenu}>
                    <Collapsible trigger="Blog" transitionTime={300}>
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
                    </Collapsible>


                </li>

                <li>
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
export default withStyles(styles)(MenuMobile);
