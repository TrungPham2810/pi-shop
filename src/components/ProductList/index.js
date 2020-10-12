import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styles from "./styles";
import ProductItem from "../ProductItem";
import { OPTION_SORT_NUMBER, OPTION_SORT_TYPE } from "./../../constants";
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shorter: 9,
      sortBy: "name",
    };
  }
  handleSort = (event) => {
    console.log(event);
  };

  render() {
    const { classes, listProduct, children } = this.props;
    const optionShorter = OPTION_SORT_NUMBER;
    const defaultShoter = optionShorter[0];
    const optionSort = OPTION_SORT_TYPE;
    const defaultSort = optionSort[0];
    return (
      <div className="col-lg-9 col-md-8 col-12">
        <div className="row">
          <div className="col-12">
            {/* <!-- Shop Top --> */}
            <div className={classes.shopTop}>
              <div className={classes.shopShorter}>
                <div className={classes.singleShorter}>
                  <label>Show : </label>
                  <Dropdown
                    options={optionShorter}
                    className={classes.shorter}
                    onChange={this.handleSortxxx}
                    value={defaultShoter}
                    placeholderClassName="myPlaceholderClassName"
                    menuClassName={classes.myMenuClassName}
                    controlClassName={classes.myControlClassName}
                    arrowClassName={classes.myArrowClassName}
                    placeholder="Select an option"
                  />
                </div>
                <div className={classes.singleShorter}>
                  <label>Sort By : </label>
                  <Dropdown
                    options={optionSort}
                    className={classes.shorter}
                    onChange={this.handleSortxxx}
                    value={defaultSort}
                    placeholderClassName="myPlaceholderClassName"
                    menuClassName={classes.myMenuClassName}
                    controlClassName={classes.myControlClassName}
                    arrowClassName={classes.myArrowClassName}
                    placeholder="Select an option"
                  />
                </div>
              </div>
              {/* <ul className="view-mode">
								<li className="active"><a href="shop-grid.html"><i className="fa fa-th-large"></i></a></li>
								<li><a href="shop-list.html"><i className="fa fa-th-list"></i></a></li>
							</ul> */}
            </div>
            {/* <!--/ End Shop Top --> */}
          </div>
        </div>
        <div className="row">
          <div className={classes.productList}>
            {children}
            {/* {listProduct.map((product) => {
              return <ProductItem product={product} key={product.id} />;
            })} */}
            {/* <ProductItem /> */}
            {/* <ProductItem/>
						<ProductItem/>
						<ProductItem/>
						<ProductItem/>
						<ProductItem/> */}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(ProductList);
