import React, { Component } from "react";
import Slider from "react-slick";
import ReactImageMagnify from "react-image-magnify";
import "./../../../../node_modules/slick-carousel/slick/slick.css";
import "./../../../../node_modules/slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faShoppingCart);
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 100,
        height: 30,
        width: 30,
        background: "#FE980F",
        color: "#FFFFFF",
        padding: "5px 5px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 100,
        height: 30,
        width: 30,
        background: "#FE980F",
        color: "#FFFFFF",
        padding: "5px 5px",
      }}
      onClick={onClick}
    />
  );
}
class Infomation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      totalPrice: false,
      mainImage: "",
    };
    this.quantityRef = React.createRef();
  }

  updateQuantity = (event) => {
    const { currentProduct } = this.props;
    const newValue = event.target.value;
    this.setState({
      quantity: newValue,
      totalPrice: newValue * currentProduct.price,
    });
  };

  changeMainImage = (image) => {
    console.log(image.value);
    if (image.value != undefined) {
      this.setState({
        mainImage: require("../../../assets/images/gallery/" + image.value),
      });
    }
  };
  renderListImageGallery = (currentProduct) => {
    const { classes } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    let html = "";
    if (currentProduct.listImgGallery !== undefined) {
      const lists = currentProduct.listImgGallery;
      html = lists.map((image) => {
        return (
          <div
            className="item "
            key={image.id}
            onClick={() => this.changeMainImage(image)}
          >
            <img
              className={classes.imageSlide}
              src={require("../../../assets/images/gallery/" + image.value)}
              alt="First slide"
            />
          </div>
        );
      });
    }
    return <Slider {...settings}>{html}</Slider>;
  };
  render() {
    const { currentProduct, classes } = this.props;
    var instock = true;
    if (currentProduct.qty == 0) {
      instock = false;
    }
    let { totalPrice, mainImage } = this.state;
    if (mainImage == "") {
      mainImage = require("../../../assets/images/products/" +
        currentProduct.image_path);
    }
    var isNew = true;
    var today = new Date();
    var createdAt = new Date(currentProduct.created_at);
    if (today.getTime() > createdAt.getTime() + 24 * 60 * 60 * 60 * 1000) {
      isNew = false;
    }
    return (
      <div className="product-details">
        <div className="col-sm-5">
          <div className="view-product">
            <img className={classes.imageActive} src={mainImage} alt="#" />
          </div>
          <div className={classes.listGallery}>
            {this.renderListImageGallery(currentProduct)}
          </div>
        </div>
        <div className="col-sm-7">
          <div className={classes.productInfomation}>
            {/* <!--/product-information--> */}
            <img
              src="images/product-details/new.jpg"
              className="newarrival"
              alt=""
            />
            <h2>{currentProduct.name}</h2>
            <p>Web ID: {currentProduct.id}</p>
            <img src="images/product-details/rating.png" alt="" />
            <span>
              <span className={classes.price}>
                US $ {totalPrice ? totalPrice : currentProduct.price}
              </span>
              <label className={classes.quantity}>Quantity:</label>
              <input
                className={classes.inputQuantity}
                type="number"
                min="1"
                value={this.state.quantity}
                onChange={this.updateQuantity}
              />
              <div className={classes.addToCart}>
                <FontAwesomeIcon
                  className={classes.icon}
                  icon="shopping-cart"
                />
                Add to cart
              </div>
            </span>
            <p>
              <b>Availability:</b> {instock ? "In Stock" : "Out Stock"}
            </p>
            {isNew ? (
              <p>
                <b>Condition:</b> New
              </p>
            ) : (
              ""
            )}

            <p>
              <b>Brand:</b> E-SHOPPER
            </p>
          </div>
          {/* <!--/product-information--> */}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Infomation);
