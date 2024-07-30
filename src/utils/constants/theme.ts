import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      light: "#A381BD",
      main: "#662D91",
    },
  },
});

theme.typography.h1 = {
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
};

theme.typography.button.textTransform = "none";
theme.typography.button.hover;

export default theme;
