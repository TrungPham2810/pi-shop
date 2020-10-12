const styles = (theme) => ({
  singleBar: {
    marginRight: 25,
  },
  singleIcon: {
    position: "relative",
    fontSize: 20,
    color: "#333",
    "&:hover": {
      color: theme.color.icon,
    },
  },
  totalCount: {
    position: "absolute",
    top: -6,
    left: 10,
    color: theme.background.color.white,
    width: 20,
    height: 20,
    textAlign: "center",
    lineHeight: "20px",
    fontSize: 12,
    background: theme.color.icon,
    borderRadius: "100%",
  },
  iconCart: {
    "&:hover + div": {
      opacity: 1,
      marginTop: 0,
      zIndex: 99,
    },
  },
  shopping: {
    position: "relative",
  },
  shoppingItem: {
    opacity: 0,
    zIndex: "-99",
    // visibility: "hidden",
    position: "absolute",
    marginTop: 50,
    transition: "opacity 0.6s, margin-top 0.6s",
    width: 300,
    right: 0,
    padding: "20px 25px",
    background: "#92ef2b",

    "&:hover": {
      // visibility: "unset",
      opacity: 1,
      marginTop: 0,
      zIndex: 99,
    },
  },
  dropDowmCart: {
    display: "flex",
    fontSize: 15,
    fontWeight: 700,
    justifyContent: "space-between",
    paddingBottom: 15,
    borderBottom: "1px solid #ececec",
    textTransform: "uppercase",
    fontFamily: "sans-serif",
  },
  shoppingList: {
    "& > li": {
      position: "relative",
      paddingBottom: 15,
      marginBottom: 15,
      borderBottom: "1px solid #ececec",
    },
    "& >li > h4 > a ": {
      fontWeight: 600,
      fontSize: 13,
      color: "#333",
    },
  },
  cartImg: {
    float: "right",
    width: 70,
    height: 70,
    "& > img": {
      width: "100%",
      height: "100%",
    },
  },
  remove: {
    position: "absolute",
    bottom: 15,
    border: " 1px solid #ededed",
    width: 20,
    color: "#222",
    textAlign: "center",
    height: 20,
    fontSize: 12,
    cursor: "pointer",
  },
  quantity: {
    paddingBottom: 15,

    fontSize: 13,
  },
  total: {
    display: "flex",
    justifyContent: "space-between",
    textTransform: "uppercase",
    fontWeight: 600,
    paddingBottom: 15,
  },
  checkOut: {
    display: "block",
    background: "#333",
    color: theme.background.color.white,
    textAlign: "center",
    padding: "10px 20px",
  },
});

export default styles;
