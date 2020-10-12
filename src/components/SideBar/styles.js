const styles = (theme) => ({
  sideBar: {
    background: theme.background.color.white,
  },
  singlewidget: {
    background: "#F6F7FB",
    padding: 30,
    marginBottom: 30,
  },
  titleFilter: {
    paddingBottom: 15,
    borderBottom: "1px solid #ddd",
    fontSize: 18,
    marginBottom: 20,
  },
  filterRange: {
    color: "red",
    padding: "20px 0",
  },

  buttonPriceFilter: {
    background: theme.color.main,
    border: "none",
    padding: "3px 5px",
    borderRadius: 4,
    color: "#fff",
    width: "30%",
  },

  valuePrice: {
    width: "70%",
    padding: "3px 0",
  },

  priceFilter: {
    display: "flex",
    marginBottom: 15,
  },
  categoryList: {
    "&>li": {
      padding: "5px 10px",
    },
  },
  checkboxPriceList: {
    "&>li": {
      padding: "5px 0",
    },
  },
  manufacturerList: {
    "&>li": {
      padding: "7px 0 5px 0",
    },
  },
  active: {
    color: "red",
    background: "#d9dde0",
  },
});

export default styles;
