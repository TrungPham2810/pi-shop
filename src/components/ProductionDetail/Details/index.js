import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class Detail extends Component {
  render() {
    return (
      <div className="tab-pane fade" id="details">
        <div className="col-sm-3">
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img src="images/home/gallery1.jpg" alt="" />
                <h2>$56</h2>
                <p>Easy Polo Black Edition</p>
                <button type="button" className="btn btn-default add-to-cart">
                  <i className="fa fa-shopping-cart"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-sm-3">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <img
                                src="images/home/gallery2.jpg"
                                alt=""
                            />
                            <h2>$56</h2>
                            <p>
                                Easy Polo Black
                                Edition
                            </p>
                            <button
                                type="button"
                                className="btn btn-default add-to-cart"
                            >
                                <i className="fa fa-shopping-cart"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <img
                                src="images/home/gallery3.jpg"
                                alt=""
                            />
                            <h2>$56</h2>
                            <p>
                                Easy Polo Black
                                Edition
                            </p>
                            <button
                                type="button"
                                className="btn btn-default add-to-cart"
                            >
                                <i className="fa fa-shopping-cart"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <img
                                src="images/home/gallery4.jpg"
                                alt=""
                            />
                            <h2>$56</h2>
                            <p>
                                Easy Polo Black
                                Edition
                            </p>
                            <button
                                type="button"
                                className="btn btn-default add-to-cart"
                            >
                                <i className="fa fa-shopping-cart"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
      </div>
    );
  }
}

export default withStyles(styles)(Detail);
