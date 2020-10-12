import React, { Component } from "react";
import { faEye, faHeart, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import logo from "../../assets/images/logo.png";
class ProductItem extends Component {
  handleAddToCart = (product) => {
    const { onAddToCart } = this.props;
    onAddToCart(product, 1);
  };
  render() {
    const { classes, product } = this.props;
    return (
      <div className="col-lg-4 col-sm-6 col-12">
        <div className={classes.productItem}>
          <div className={classes.productImg}>
            <Link to={`/product-detail/${product.id}`} product={product}>
              <img
                className={classes.image}
                src={require("../../assets/images/products/" +
                  product.image_path)}
                alt="#"
              />

              {/* <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" /> */}
            </Link>

            <div className={classes.buttonhead}>
              <div
                className={classes.addToCart}
                data-product-id={product.id}
                id={"product-" + product.id}
                onClick={() => this.handleAddToCart(product)}
              >
                Add to cart
              </div>
              <div className={classes.productAction}>
                <Tooltip
                  placement="top-end"
                  classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
                  arrow
                  title={
                    <span className={classes.tooltipContent}>Quick Shop</span>
                  }
                  className={classes.tooltipStyle}
                >
                  <div>
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                </Tooltip>
                <Tooltip
                  placement="top-end"
                  classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
                  arrow
                  title={
                    <span className={classes.tooltipContent}>
                      Add to Wishlist
                    </span>
                  }
                  className={classes.tooltipStyle}
                >
                  <div>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </Tooltip>

                <Tooltip
                  placement="top-end"
                  classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
                  arrow
                  title={
                    <span className={classes.tooltipContent}>
                      Add to Compare
                    </span>
                  }
                  className={classes.tooltipStyle}
                >
                  <div>
                    <FontAwesomeIcon icon={faChartBar} />
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className={classes.productContent}>
            <div className={classes.nameProduct}>
              <Link to={`/product-detail/${product.id}`}></Link>
              <a href="product-details.html">{product.name}</a>
            </div>
            <div className={classes.productPrice}>
              <span>${product.price}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(ProductItem);
