import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../actions/product";
import * as categoryActions from "../../actions/category";
import PropTypes from "prop-types";
import BreadCrumb from "../../components/BreadCrumb";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import SideBar from "../../components/SideBar";
import ProductList from "../../components/ProductList";

class ProductListPage extends Component {
  // constructor(props) {
  //   super(props);
  //   const { productActionCreators, filter } = this.props;
  // }
  componentDidMount() {
    const { productActionCreators, categoryActionCreator, filter } = this.props;
    const { fetchListProduct } = productActionCreators;
    const { fetchListCategory } = categoryActionCreator;
    fetchListProduct(filter);
    fetchListCategory();
  }
  // handleFilter = (param) => {
  //     const { filter } = this.props;
  //     if(!filter.includes(param) && Array.isArray(param)) {
  //       filter.push(param);
  //     }
  //  }

  handleFilter = (filterRequest) => {
    const { productActionCreators, filter } = this.props;
    const { fetchListProduct } = productActionCreators;

    if (Array.isArray(filter)) {
      switch (filterRequest.label) {
        case "category":
          filter["category_id"] = filterRequest.value.id;
          break;
        case "price":
          filter["price"] = filterRequest.value;
          break;
        default:
      }
    }

    fetchListProduct(filter);
  };
  render() {
    const { classes, listProduct, listCategory, statexx } = this.props;
    console.log(statexx);
    return (
      <div className={classes.productListPage}>
        <BreadCrumb />
        <section className={classes.productArea}>
          <div className="container">
            <div className="row">
              <SideBar
                listCategory={listCategory}
                onClickFilter={this.handleFilter}
              />
              <ProductList listProduct={listProduct} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    statexx: state,
    listProduct: state.productList.listProduct,
    listCategory: state.categoryList.listCategory,
    filter: state.productList.filter,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    productActionCreators: bindActionCreators(productActions, dispatch),
    categoryActionCreator: bindActionCreators(categoryActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
);
