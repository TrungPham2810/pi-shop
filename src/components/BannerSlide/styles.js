const styles = (theme) => ({
  textBanner: {
    width: "100%",
    color: "white",
    textAlign: "center",
    position: "absolute",
    top: "5%",
    right: 0,
    zIndex: 1000,
    "@media (min-width: 400px)": {
      top: "10%",
    },
    "@media (min-width: 568px)": {
      top: "15%",
    },
    "@media (min-width: 768px)": {
      top: "15%",
      right: "45%",
      width: "auto",
      textAlign: "left",
    },
    "@media (min-width: 992px)": {
      top: "10%",
      right: "55%",
      width: "auto",
      textAlign: "left",
    },
  },

  slideImg: {
    height: "auto",
    "@media (min-width: 768px)": {
      height: "600px !important",
    },
  },
  "@keyframes glowing ": {
    "0%": {
      backgroundColor: "#004A7F",
      boxShadow: " 0 0 3px #004A7F",
    },

    "50%": {
      backgroundColor: "#0094FF",
      boxShadow: "0 0 10px #0094FF",
    },
    "100%": {
      backgroundColor: "#004A7F",
      boxShadow: " 0 0 3px #004A7F",
    },
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: "#F7941D",
    margin: "10px 0",
    "@media (min-width: 568px)": {
      marginBottom: 10,
      fontSize: 30,
    },
    "@media (min-width: 768px)": {
      marginBottom: 20,
      fontSize: 47,
    },
    "@media (min-width: 992px)": {
      marginBottom: 20,
      fontSize: 60,
    },
    "& > span": {
      fontSize: 15,
      display: "inline-block",
      marginBottom: 5,
      color: "#f00",
      animation: `$glowing 1000ms ${theme.transitions.easing.easeInOut} infinite`,
      "@media (min-width: 568px)": {
        fontSize: 20,
        // display:'block',
        marginBottom: 12,
      },
      "@media (min-width: 992px)": {
        fontSize: 25,
        // display:'block',
        marginBottom: 15,
      },
    },
  },
  content: {
    fontSize: 12,

    "@media (min-width: 568px)": {
      fontSize: 14,
    },
    "@media (min-width: 992px)": {
      fontSize: 20,
    },
  },
});

export default styles;
