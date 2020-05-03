import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../actions/product";
import PropTypes from "prop-types";
import BreadCrumb from "../../components/BreadCrumb";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import SideBar from "../../components/SideBar";
import ProductList from "../../components/ProductList";

class ProductListPage extends Component {
  componentDidMount() {
    const { productActionCreators } = this.props;
    const { fetchListProduct } = productActionCreators;
    fetchListProduct();
  }
  render() {
    const { classes, listProduct } = this.props;
    return (
      <div className={classes.productListPage}>
        <BreadCrumb />
        <section className={classes.productArea}>
          <div className="container">
            <div className="row">
              <SideBar />
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
    listProduct: state.productList.listProduct,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    productActionCreators: bindActionCreators(productActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
);
