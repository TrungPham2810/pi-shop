import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import styles from './styles';

class Menu extends Component {
    render() {
        var { classes } = this.props;

        return (
            // <!-- Header Inner -->
            <div className={classes.headerInner}>
                <div className="container">
                    <div className="cat-nav-head">
                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <div className={classes.menuArea}>
                                    <nav className="navbar" role="navigation">
                                        <div className="container-fluid">
                                            <div className="navbar-header">
                                                <button
                                                    type="button"
                                                    className={classes.navbarToggle}
                                                    data-toggle="collapse"
                                                    data-target="#navbar-ex1-collapse"
                                                    onClick={this.changeCollapse}
                                                >
                                                    <span className={classes.iconBar}></span>
                                                    <span className={classes.iconBar}></span>
                                                    <span className={classes.iconBar}></span>
                                                </button>
                                            </div>
                                            <div id="navbar-ex1-collapse" className="collapse mobile-menu">
                                                <div className={classes.mobileMenu}>
                                                    <MenuMobile/>
                                                </div>
                                            </div>

                                            <div className={classes.menu}>
                                                <MenuDesktop />
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            /* <!--/ End Header Inner --> */
        );
    }
}
export default withStyles(styles)(Menu);
