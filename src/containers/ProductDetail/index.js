import React, { Component } from "react";
import Details from "./../../components/ProductionDetail/Details";
import Infomation from "./../../components/ProductionDetail/Infomation";
import RecommendProduct from "./../../components/ProductionDetail/RecommendProduct";
import Review from "./../../components/ProductionDetail/Review";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import * as productActions from "../../actions/product";
class ProductDetail extends Component {
  componentDidMount() {
    const { productActionCreators } = this.props;
    const productId = this.props.match.params.id;
    const { fetchProductDetail } = productActionCreators;
    fetchProductDetail(productId);
  }

  render() {
    const { classes, id, statexx, currentProduct } = this.props;
    const productId = this.props.match.params.id;
    console.log(currentProduct);
    console.log(productId);
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 ">
              <h1>left filter</h1>
            </div>
            <div className="col-sm-9 padding-right">
              <Infomation currentProduct={currentProduct} />

              <div className="category-tab shop-details-tab">
                {/* <!--category-tab--> */}
                <div className="col-sm-12">
                  <ul className="nav nav-tabs">
                    <li>
                      <a href="#details" data-toggle="tab">
                        Details
                      </a>
                    </li>

                    <li>
                      <a href="#recommend_product" data-toggle="tab">
                        You may so like
                      </a>
                    </li>
                    <li className="active">
                      <a href="#reviews" data-toggle="tab">
                        Reviews (5)
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <Details currentProduct={currentProduct} />
                  <RecommendProduct currentProduct={currentProduct} />
                  <Review currentProduct={currentProduct} />
                </div>
              </div>
              {/* <!--/category-tab--> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    statexx: state,
    currentProduct: state.productList.currentProduct,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    productActionCreators: bindActionCreators(productActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
);
