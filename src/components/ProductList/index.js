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
    const { onClickFilter, filter } = this.props;
    var sort = event.value;
    if (
      filter["sort"] == undefined ||
      (filter["sort"] !== undefined && filter["sort"] != sort)
    ) {
      var filterSort = {
        label: "sort",
        value: sort,
      };
      onClickFilter(filterSort);
    }
  };

  handleFilterSizer = (event) => {
    const { onClickFilter, filter } = this.props;
    var sizer = event.value;
    if (
      filter["limit"] == undefined ||
      (filter["limit"] !== undefined && filter["limit"] != sizer)
    ) {
      var filterLimit = {
        label: "limit",
        value: sizer,
      };
      onClickFilter(filterLimit);
    }
  };

  render() {
    const { classes, listProduct, filter } = this.props;

    var optionSizer = OPTION_SORT_NUMBER;
    var defaultSizer = optionSizer[0];
    optionSizer.map((limit) => {
      if (filter["limit"] !== undefined && limit["value"] == filter["limit"]) {
        defaultSizer = limit;
      }
    });

    var optionSort = OPTION_SORT_TYPE;
    var defaultSort = optionSort[0];
    optionSort.map((sortValue) => {
      if (
        filter["sort"] !== undefined &&
        sortValue["value"] == filter["sort"]
      ) {
        defaultSort = sortValue;
      }
    });
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
                    options={optionSizer}
                    className={classes.shorter}
                    onChange={this.handleFilterSizer}
                    value={defaultSizer}
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
                    onChange={this.handleSort}
                    value={defaultSort}
                    placeholderClassName="myPlaceholderClassName"
                    menuClassName={classes.myMenuClassName}
                    controlClassName={classes.myControlClassName}
                    arrowClassName={classes.myArrowClassName}
                    placeholder="Select an option"
                  />
                </div>
              </div>
            </div>
            {/* <!--/ End Shop Top --> */}
          </div>
        </div>
        <div className="row">
          <div className={classes.productList}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(ProductList);
