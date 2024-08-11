import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      dark: `rgba(0, 0, 0, 0.5)`,
      main: "#000000",
      light: "#FFFFFF",
    },
    secondary: {
      light: "#A381BD",
      main: "#662D91",
    },
  },
});

theme.typography.h1 = {
    [theme.breakpoints.up("md")]: {
      fontSize: "3.5rem",
      fontWeight: "bold",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.75rem",
      fontWeight: "bold",
    },
  };

theme.typography.h2 = {
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
};
theme.typography.h5 = {
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
    fontWeight: "normal"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    fontWeight: "normal"
  }
}

theme.typography.h6.fontWeight = "none"

theme.typography.button.textTransform = "none";

export default theme;
