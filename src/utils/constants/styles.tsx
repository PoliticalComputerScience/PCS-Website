import { SxProps, Theme } from "@mui/material";

/**
 * Default styles for a row flexbox
 */
const defaultFlexStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  height: "100%",
  gap: 2,
};

/**
 * Default styles for a row flexbox
 */
const defaultFlexRowStyles: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  height: "100%",
  gap: 2,
};

/**
 * Default styles for a col flexbox
 */
const defaultFlexColStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  height: "100%",
  gap: 2,
};

/**
 * default styles for emphasized text - h1, purple, bold
 * @param theme requires the theme to access MUI theme constants
 * @returns SxProps which are default styles for emphasized text
 */
const getDefaultEmphasisTextStyles = (theme: Theme): SxProps => ({
  color: theme.palette.secondary.main,
  fontSize: theme.typography.h2.fontSize,
  fontWeight: theme.typography.h2.fontWeight,
});

/**
 * Default styles for a partially translucent overlay with a dark background
 * @param theme requires the theme to access MUI theme constants
 * @returns SxProps which are default styles for emphasized text
 */
const getDefaultOverlayStyles = (theme: Theme): SxProps => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "fit-content",
  py: 2,
  px: 6,
});

/**
 * Default styles to display only on mobile
 */
const displayOnMobileStyles: SxProps = {
  display: { md: "none", xs: "block" },
};

/**
 * Default styles to display only on desktop
 */
const displayOnDesktopStyles: SxProps = {
  display: { md: "block", xs: "none" },
};

const purpleMeshStyles = `radial-gradient(at 92% 97%, hsla(266,93%,81%,1) 0px, transparent 50%), radial-gradient(at 92% 14%, hsla(266,37%,72%,1) 0px, transparent 50%), radial-gradient(at 2% 88%, hsla(266,47%,73%,1) 0px, transparent 50%);`;

export {
  defaultFlexStyles,
  defaultFlexRowStyles,
  defaultFlexColStyles,
  getDefaultEmphasisTextStyles,
  displayOnMobileStyles,
  displayOnDesktopStyles,
  getDefaultOverlayStyles,
  purpleMeshStyles,
};
