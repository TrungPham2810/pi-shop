import React, { Component } from "react";
import InputRange from "react-input-range";
import Button from "@material-ui/core/Button";
import "react-input-range/lib/css/index.css";
import { Link } from "react-router-dom";
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
  render() {
    const { classes } = this.props;
    return (
      <div className="col-lg-3 col-md-4 col-12">
        <div className={classes.sideBar}>
          {/* <!-- Single Widget --> */}
          <div className={classes.singlewidget}>
            <h3 className={classes.titleFilter}>Categories</h3>
            <ul className={classes.categoryList}>
              <li>
                <Link to="/product-list?type=t-shirts">T-shirts</Link>
              </li>
              <li>
                <Link to="/product-list?type=jacket">Jacket</Link>
              </li>
              <li>
                <Link to="/product-list?type=jeans">Jean</Link>
              </li>
              <li>
                <Link to="/product-list?type=sweatshirts">SweatShirts</Link>
              </li>
              <li>
                <Link to="/product-list?type=kitwears">Kitwears</Link>
              </li>
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
              <li>
                <label className="checkbox-inline">
                  <input name="filter-price" id="1" type="checkbox" />
                  $20 - $50
                </label>
              </li>
              <li>
                <label className="checkbox-inline">
                  <input name="filter-price" id="2" type="checkbox" />
                  $50 - $100
                </label>
              </li>
              <li>
                <label className="checkbox-inline">
                  <input name="filter-price" id="3" type="checkbox" />
                  $100 - $250
                </label>
              </li>
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
