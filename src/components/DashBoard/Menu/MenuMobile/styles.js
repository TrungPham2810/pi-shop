const styles = (theme) => ({
  menuArea: {
    background: "white",
  },
  childLink: {
    background: theme.background.color.white,
    padding: 10,
    display: "block",
  },
  menuLinkactive: {
    background: "#e7e7e7",
  },

  menuMobile: {
    "& > li > a": {
      display: "block",

      color: "#333",
      background: theme.background.color.white,
    },
    "& > li ": {
      padding: "6px 0",
      width: "100%",
      "& > ul": {
        width: "100%",
      },
    },
    "& > li > ul > li": {
      display: "block",
      width: "100%",
    },
  },
  dropdownMenu: {
    display: "inline-block",
    cursor: "pointer",
  },
});

export default styles;
