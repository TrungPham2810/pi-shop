import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  background: {
    color: {
      white: "#FFFF",
    },
  },
  color: {
    primary: "#FF5252",
    secondary: "#4CAF50",
    error: "#FF5252",
    icon: "#F7941D",
    main: "#F7941D",
  },
  typography: {
    fontFamily: "Roboto",
  },

  shape: {
    borderRadius: 4,
    backgroundColor: "#FFFF",
    textColor: "#FF5252",
  },

  palette: {
    background: {
      paper: "#FFFF",
    },
    primary: {
      main: "#007bff",
    },
  },
});
export default theme;
