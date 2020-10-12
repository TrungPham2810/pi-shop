import React, { Component } from "react";
import * as cartActions from "../../../actions/cart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import {
  faEnvelope,
  faHeadphones,
  faMapMarkerAlt,
  faClock,
  faUser,
  faPowerOff,
  faSearch,
  faHeart,
  faUserCircle,
  faShoppingBag,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import logo from "../../../assets/images/logo.png";
import cn from "classnames";
import Menu from "../Menu";

library.add(
  fab,
  faEnvelope,
  faHeadphones,
  faMapMarkerAlt,
  faClock,
  faUser,
  faPowerOff,
  faSearch,
  faHeart,
  faUserCircle,
  faShoppingBag,
  faTimes
);
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: 10,
    };
  }

  handleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes, cartItem } = this.props;
    var countCartItem = cartItem.length;

    const { searchType } = this.state;
    return (
      <header className={classes.header}>
        {/* <!-- Topbar --> */}

        <div className={classes.topbar}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                {/* <!-- Top Left --> */}
                <div className={classes.topLeft}>
                  <ul className={classes.listMain}>
                    <li>
                      <FontAwesomeIcon
                        className={classes.icon}
                        icon="headphones"
                      />{" "}
                      +060 (800) 801-582
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className={classes.icon}
                        icon="envelope"
                      />{" "}
                      support@shophub.com
                    </li>
                  </ul>
                </div>
                {/* <!--/ End Top Left --> */}
              </div>
              <div className="col-lg-8 col-md-6 col-12">
                {/* <!-- Top Right --> */}
                <div className={classes.topRight}>
                  <ul className={classes.listMain}>
                    <li>
                      <FontAwesomeIcon
                        className={classes.icon}
                        icon="map-marker-alt"
                      />
                      <Link to="/" className={classes.link}>
                        Store location
                      </Link>
                    </li>
                    <li>
                      <FontAwesomeIcon className={classes.icon} icon="clock" />{" "}
                      <Link to="/" className={classes.link}>
                        Daily deal
                      </Link>
                    </li>
                    <li>
                      <FontAwesomeIcon className={classes.icon} icon="user" />{" "}
                      <Link to="/" className={classes.link}>
                        My account
                      </Link>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className={classes.icon}
                        icon="power-off"
                      />{" "}
                      <Link to="/" className={classes.link}>
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Top Right --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Topbar --> */}
        <div className={classes.middleInner}>
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-2 col-12">
                {/* <!-- Logo --> */}
                <div className={classes.logo}>
                  <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
                {/* <!--/ End Logo --> */}
                <div className="mobile-nav"></div>
              </div>

              <div className="col-md-8 col-sm-7 col-12">
                <div className={classes.searchBarTop}>
                  <div className={classes.searchBar}>
                    <FormControl className={classes.searchType}>
                      <Select
                        native
                        value={searchType}
                        onChange={this.handleChange}
                        name="searchType"
                        className={classes.formControl}
                      >
                        <option value={10}>All Category</option>
                        <option value={20}>Watch</option>
                        <option value={30}>Mobile</option>
                        <option value={40}>Kid’s item</option>
                      </Select>
                    </FormControl>
                    <div className={classes.search}>
                      <form className={classes.searchForm}>
                        <input
                          type="text"
                          placeholder="Search here..."
                          name="search"
                        />
                        <button value="search" type="submit">
                          <FontAwesomeIcon
                            className={classes.iconSearch}
                            icon="search"
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-3 col-12">
                <div className={classes.rightBar}>
                  {/* <!-- Search Form --> */}
                  <div className={classes.singleBar}>
                    <Link to="/" className={classes.singleIcon}>
                      <FontAwesomeIcon icon="heart" />
                    </Link>
                  </div>
                  <div className={classes.singleBar}>
                    <Link to="/" className={classes.singleIcon}>
                      <FontAwesomeIcon icon="user-circle" />
                    </Link>
                  </div>

                  <div className={cn(classes.singleBar, classes.shopping)}>
                    <Link
                      to="/"
                      className={cn(classes.singleIcon, classes.iconCart)}
                    >
                      <FontAwesomeIcon icon="shopping-bag" />
                      {countCartItem ? (
                        <span className={classes.totalCount}>
                          {countCartItem}
                        </span>
                      ) : (
                        ""
                      )}
                    </Link>

                    {/* <!-- Shopping Item --> */}
                    <div className={classes.shoppingItem}>
                      <div className={classes.dropDowmCart}>
                        <span>{countCartItem} Items</span>
                        <a href="!#">View Cart</a>
                      </div>
                      <ul className={classes.shoppingList}>
                        {this.renderCartItem(cartItem)}
                      </ul>
                      <div className={classes.cartBottom}>
                        <div className={classes.total}>
                          <span>Total</span>
                          <span className={classes.totalAmount}>
                            ${this.renderTotalAmount(cartItem)}
                          </span>
                        </div>
                        <Link to="/" className={classes.checkOut}>
                          Checkout
                        </Link>
                      </div>
                    </div>
                    {/* <!--/ End Shopping Item --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Menu />
      </header>
    );
  }
  renderTotalAmount = (cartItem) => {
    var html = cartItem.reduce(function (tot, item) {
      // return the sum with previous value
      return tot + item.quantity * item.product.price;

      // set initial value as 0
    }, 0);

    return html;
  };

  handleRemoveItemCart = (item) => {
    const { cartActionsCreator } = this.props;
    const { removeProductInCart } = cartActionsCreator;
    removeProductInCart(item.product);
  };
  renderCartItem = (cartItems) => {
    const { classes } = this.props;
    const html = cartItems.map((item) => {
      return (
        <li key={item.product.id}>
          <div
            className={classes.remove}
            onClick={() => this.handleRemoveItemCart(item)}
            title="Remove this item"
          >
            <FontAwesomeIcon icon="times" />
          </div>
          <Link to="/" className={classes.cartImg} href="!#">
            <img
              className={classes.image}
              src={require("../../../assets/images/products/" +
                item.product.image_path)}
              alt="#"
            />
          </Link>
          <h4>
            <Link to="/">{item.product.name}</Link>
          </h4>
          <p className={classes.quantity}>
            {item.quantity}x -{" "}
            <span className={classes.amount}>
              ${item.quantity * item.product.price}
            </span>
          </p>
        </li>
      );
    });
    return html;
  };
}
// export default withStyles(styles)(Header);
const mapStateToProps = (state, ownProps) => {
  return {
    statexx: state,
    cartItem: state.cartItem,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    cartActionsCreator: bindActionCreators(cartActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
