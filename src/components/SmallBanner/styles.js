const styles = (theme) => ({
  smallBanner: {
    marginTop: 30,
  },

  singleBanner: {
    position: "relative",
    marginBottom: 18,
    "& > img": {
      height: "100%",
      width: "100%",
    },
  },
  link: {
    color: "#333",
    fontSize: 12,
    fontWeight: 500,
    marginTop: 10,
    textTransform: "uppercase",
    borderBottom: "2px solid #333",
    display: "inline-block",
    "@media (min-width: 400px)": {
      fontSize: 14,
      marginTop: 15,
    },
    "@media (min-width: 568px)": {
      marginTop: 22,
    },
  },
  content: {
    position: "absolute",
    top: "20%",
    right: "65%",
    "& > p": {
      fontSize: 10,
      color: theme.color.main,
      fontWeight: 500,
      marginBottom: 5,
      textTransform: "capitalize",
    },
    "& > h3": {
      fontSize: 14,
      fontWeight: 700,
      textTransform: "capitalize",
    },
    "& > h3 > span": {
      color: theme.color.main,
    },
    "@media (min-width: 400px)": {
      top: "15%",
      right: "50%",
      left: 35,
      "& > p": {
        fontSize: 12,
      },

      "& > h3": {
        fontSize: 16,
      },
    },
    "@media (min-width: 568px)": {
      top: "25%",
      right: "65%",
      left: "unset",
      "& > p": {
        fontSize: 14,
      },

      "& > h3": {
        fontSize: 22,
      },
    },

    "@media (min-width: 768px)": {
      top: "18%",
      right: "50%",
      "& > p": {
        fontSize: 16,
      },

      "& > h3": {
        fontSize: 22,
      },
    },

    "@media (min-width: 992px)": {
      top: "18%",
      right: "50%",
      "& > p": {
        fontSize: 14,
      },
    },
    "@media (min-width: 1200px)": {
      left: 40,
    },
  },

  tabHeight: {
    "@media (min-width: 768px) and (max-width: 1200px)": {
      height: 400,
      "& > div": {
        top: "25%",
        right: "75%",
      },
    },
  },
});

export default styles;
