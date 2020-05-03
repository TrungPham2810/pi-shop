const styles = (theme) => ({
  productItem: {
    marginTop: 50,
  },
  productImg: {
    position: "relative",
    "&:hover >div": {
      bottom: 0,
      // transition: "all 0.3s",
    },
  },
  image: {
    width: "100%",
  },
  buttonhead: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 0",
    background: theme.background.color.white,
    position: "absolute",
    width: "100%",
    bottom: "-52px",
    zIndex: 9,
    transition: "all 0.3s",
  },
  tooltipStyle: {
    marginLeft: 15,
    fontSize: 16,
    color: "#333",
    "&:hover": {
      color: theme.color.main,
      transition: "all 0.3s",
    },
  },
  tooltipContent: {
    background: theme.color.main,
    fontSize: 11,
  },

  tooltip: {
    color: theme.background.color.white,
    background: theme.color.main,
    padding: "7px 15px",
  },
  arrow: {
    color: theme.color.main,
  },
  productAction: {
    display: "flex",
  },
  productContent: {
    zIndex: 10,
    position: "relative",
    background: theme.background.color.white,
  },
  addToCart: {
    fontSize: 12,
    fontWeight: 600,
    textTransform: "uppercase",
  },
  nameProduct: {
    fontSize: 14,
    fontWeight: 500,
    margin: 0,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 500,
  },
});

export default styles;
