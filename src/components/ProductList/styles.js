const styles = (theme) => ({
  productList: {},
  shopTop: {
    clear: "both",
    background: "#f6f7fb",
    padding: 20,
  },
  shopShorter: {
    display: "flex",
    padding: "",
  },
  singleShorter: {
    display: "flex",
    marginRight: 10,
  },
  shorter: {
    color: "#666",
    fontFamily: "sans-serif",
    fontSize: 15,
    fontWeight: 400,
    marginLeft: 5,
  },
  myControlClassName: {
    padding: "0 40px 0 10px",
  },
  myMenuClassName: {
    "& > div:hover": {
      background: theme.color.main,
      transition: "all 0.3s",
    },
  },
  myArrowClassName: {
    top: 9,
  },
  shorterOption: {
    "&:hover": {
      background: theme.color.main,
    },
  },
});

export default styles;
