import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import cn from "classnames";
import * as cartActions from "../../actions/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
library.add(faShoppingBag);

class ShortCart extends Component {
  removeCartProduct = (product) => {
    const { cartActionsCreator } = this.props;
    const { removeProductInCart } = cartActionsCreator;
    console.log(product);
    removeProductInCart(product);
  };
  render() {
    const { classes, cart } = this.props;
    console.log("cart");
    console.log(cart);
    var totalCount = "";
    if (cart.length > 0) {
      totalCount = cart.length;
    }
    return (
      <div className={cn(classes.singleBar, classes.shopping)}>
        <Link to="/" className={cn(classes.singleIcon, classes.iconCart)}>
          <FontAwesomeIcon icon="shopping-bag" />
          <span className={classes.totalCount}>{totalCount}</span>
        </Link>

        {/* <!-- Shopping Item --> */}
        <div className={classes.shoppingItem}>
          <div className={classes.dropDowmCart}>
            <span>{cart.length} Items</span>
            <a href="!#">View Cart</a>
          </div>
          <ul className={classes.shoppingList}>
            {this.showListCartItem(cart)}
          </ul>
          <div className={classes.cartBottom}>
            <div className={classes.total}>
              <span>Total</span>
              <span className={classes.totalAmount}>
                ${this.getTotalPrice(cart)}
              </span>
            </div>
            <Link to="/checkout" className={classes.checkOut}>
              Checkout
            </Link>
          </div>
        </div>
        {/* <!--/ End Shopping Item --> */}
      </div>
    );
  }
  getTotalPrice = (cart) => {
    var result = 0;
    cart.map((item, index) => {
      result = result + item.product.price * item.quantity;
    });

    return result;
  };
  showListCartItem = (cart) => {
    var result = null;
    const { classes } = this.props;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        console.log();
        return (
          <li key={index}>
            <div
              className={classes.remove}
              title="Remove this item"
              onClick={() => this.removeCartProduct(item.product)}
            >
              <FontAwesomeIcon icon="times" />
            </div>
            <Link to="/" className={classes.cartImg} href="!#">
              <img
                src={require("../../assets/images/products/" +
                  item.product.image_path)}
                alt="!#"
              />
            </Link>
            <h4>
              <Link to="/">{item.product.name}</Link>
            </h4>
            <p className={classes.quantity}>
              {item.quantity}x -{" "}
              <span className={classes.amount}>${item.product.price}</span>
            </p>
          </li>
        );
      });
    }
    return result;
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cartItem,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    cartActionsCreator: bindActionCreators(cartActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ShortCart)
);
