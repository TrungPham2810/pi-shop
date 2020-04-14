const styles = (theme) => ({
  headerInner: {
    "@media (min-width: 768px)": {
      background: "#333",
    },
  },
  linkMenu: {
    color: "red",
  },
  menuArea: {
    background: "#ffffff00",
    // transform:'translateY(-60px)',
    marginTop: -69,
    "@media (min-width: 768px)": {
      // transform:'translateY(0)',
      marginTop: 0,
    },
  },
  menuLinkactive: {
    color: "blue",
  },
  childLink: {
    background: "#e8e6e6",
    padding: 10,
    display: "block",
  },
  navbarToggle: {
    position: "relative",
    float: "right",
    padding: "9px 10px",
    marginTop: 8,
    marginRight: 15,
    marginBottom: 8,
    backgroundColor: theme.background.color.white,
    border: "none",
    zIndex: 1000,
    "@media (min-width: 768px)": {
      display: "none",
    },
  },
  iconBar: {
    display: "block",
    width: 22,
    height: 2,
    borderRadius: 1,
    background: theme.color.icon,
    marginTop: 4,
  },
  menu: {
    display: "none",
    "@media (min-width: 768px)": {
      display: "block",
      "& > ul": {
        display: "flex",
      },
    },
  },
  menuMobile: {},
});

export default styles;
