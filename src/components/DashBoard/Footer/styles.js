const styles = (theme) => ({
  footer: {
    background: "#222",
    color: theme.background.color.white,
    padding: "20px 0",
  },
  telephone: {
    color: theme.color.main,
    fontSize: 20,
    fontWeight: 600,
    display: "block",
    "&:hover": {
      color: theme.color.main,
    },
  },
  singleFooter: {
    padding: "15px 0",
  },
  logo: {
    marginBottom: 20,
  },
  text: {
    marginBottom: 10,
  },
  title: {
    margin: 0,
    marginBottom: 30,
  },
  linkContact: {
    color: theme.background.color.white,
    transition: "all 0.4s ease",
    display: "block",
    lineHeight: 2.5,
    "&:hover": {
      color: theme.color.main,
      transform: "translateX(5px)",
    },
  },
  listIcon: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  icon: {
    fontSize: 16,
    color: theme.background.color.white,
    transition: "all 0.3s ease",
    marginRight: 30,
    "&:hover": {
      color: theme.color.main,
    },
  },
  inner: {
    borderTop: "1px solid #eeeeee3d",
    padding: "20px 0",
  },
  left: {
    textAlign: "center",
    "@media (min-width: 992px)": {
      float: "left",
    },
  },
  right: {
    textAlign: "center",
    "@media (min-width: 992px)": {
      float: "right",
    },
  },
});

export default styles;
