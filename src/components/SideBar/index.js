import React, { Component } from "react";
import "react-input-range/lib/css/index.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FILTER_PRICE } from "./../../constants";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        min: 0,
        max: 300,
      },
    };
  }

  changeRange = (event) => {
    // preventDefault();
    this.setState({ value: event });
  };
  handleChangeFilterPrice = (event) => {
    const { onClickFilter } = this.props;
    var target = event.target;
    var filterPrice = {
      label: "price",
      value: target.value,
    };
    onClickFilter(filterPrice);
  };
  renderListFilterPrice = () => {
    const { filter } = this.props;

    const html = FILTER_PRICE.map((price) => {
      let check = false;

      if (filter["price"] !== undefined && filter["price"] == price.value) {
        check = true;
      }
      return (
        <li key={price.value}>
          <label className="checkbox-inline">
            <input
              name="filter-price"
              id="1"
              checked={check}
              type="checkbox"
              value={price.value}
              onChange={this.handleChangeFilterPrice}
            />
            {price.label}
          </label>
        </li>
      );
    });

    return html;
  };
  renderListCategory = () => {
    const { listCategory, onClickFilter } = this.props;
    const html = listCategory.map((category) => {
      var filter = {
        label: "category",
        value: category,
      };
      return (
        <li onClick={() => onClickFilter(filter)} key={category.id}>
          {category.name}
        </li>
      );
    });
    return html;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="col-lg-3 col-md-4 col-12">
        <div className={classes.sideBar}>
          {/* <!-- Single Widget --> */}
          <div className={classes.singlewidget}>
            <h3 className={classes.titleFilter}>Categories</h3>
            <ul className={classes.categoryList}>
              {this.renderListCategory()}
            </ul>
          </div>
          {/* <!--/ End Single Widget --> */}
          {/* <!-- Shop By Price --> */}
          <div className={classes.singlewidget}>
            <h3 className={classes.titleFilter}>Shop by Price</h3>
            {/* filter by range price */}
            {/* <form className="form">
							<div className={classes.filterRange}>
							<InputRange
								// draggableTrack
								labelContainer = {false}
								draggableTrack={false}
								allowSameValues={false}
                                maxValue={300}
                                minValue={0}
                                onChange={this.changeRange}
                                value={this.state.value}
                            />
							</div>
							<div className={classes.priceFilter}>
								<div className={classes.valuePrice}>
									{`Range : €${this.state.value.min} - €${this.state.value.max}`}
								</div>
								<button type="submit" className={classes.buttonPriceFilter}>Find</button>
							</div>
                        
                        </form> */}
            {/* End filter by range price */}
            <ul className={classes.checkboxPriceList}>
              {this.renderListFilterPrice()}
            </ul>
          </div>
          {/* <!--/ End Shop By Price --> */}
          <div className={classes.singlewidget}>
            <h3 className="title">Manufacturers</h3>
            <ul className={classes.manufacturerList}>
              <li>
                <Link to="/">Louis Vuitton</Link>
              </li>
              <li>
                <Link to="/">D&G</Link>
              </li>
              <li>
                <Link to="/">Pumma</Link>
              </li>
              <li>
                <Link to="/">Adidas</Link>
              </li>
              <li>
                <Link to="/">Zara</Link>
              </li>
            </ul>
          </div>
          {/* <!--/ End Single Widget --> */}
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(SideBar);
