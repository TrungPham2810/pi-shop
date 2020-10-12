import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../actions/product";
import * as cartActions from "../../actions/cart";
import * as categoryActions from "../../actions/category";
import PropTypes from "prop-types";
import BreadCrumb from "../../components/BreadCrumb";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import SideBar from "../../components/SideBar";
import ProductList from "../../components/ProductList";
import ProductItem from "../../components/ProductItem";

class ProductListPage extends Component {
  componentDidMount() {
    const { productActionCreators, categoryActionCreator, filter } = this.props;
    const { fetchListProduct } = productActionCreators;
    const { fetchListCategory } = categoryActionCreator;
    fetchListProduct(filter);
    fetchListCategory();
  }

  handleFilter = (filterRequest, status = true) => {
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
        case "limit":
          filter["limit"] = filterRequest.value;
          break;
        case "sort":
          filter["sort"] = filterRequest.value;
        default:
      }
    }

    fetchListProduct(filter, status);
  };
  render() {
    const { classes, listProduct, listCategory, filter, statexx } = this.props;
    return (
      <div className={classes.productListPage}>
        <BreadCrumb />
        <section className={classes.productArea}>
          <div className="container">
            <div className="row">
              <SideBar
                listCategory={listCategory}
                filter={filter}
                onClickFilter={this.handleFilter}
              />
              <ProductList
                listProduct={listProduct}
                filter={filter}
                onClickFilter={this.handleFilter}
              >
                {" "}
                {this.showProducts(listProduct)}
              </ProductList>
            </div>
          </div>
        </section>
      </div>
    );
  }
  showProducts = (listProduct) => {
    var result = null;
    const { cartActionsCreator } = this.props;
    const { actAddToCart } = cartActionsCreator;
    if (listProduct.length > 0) {
      result = listProduct.map((product, index) => {
        return (
          <ProductItem
            product={product}
            key={index}
            onAddToCart={actAddToCart}
          />
        );
      });
    }
    return result;
  };
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
    cartActionsCreator: bindActionCreators(cartActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
);
