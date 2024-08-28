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

const purpleMeshStyles = `radial-gradient(at 82% 26%, hsla(281,100%,90%,1) 0px, transparent 50%), radial-gradient(at 16% 66%, hsla(263,83%,84%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(266,100%,80%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(256,100%,85%,1) 0px, transparent 50%);`;
const purpleGradientStylesToBottomRight = `linear-gradient(135deg, rgba(245,234,255,1) 0%, rgba(199,131,255,1) 150%);`;
const defaultPaddingY = "6rem";
const defaultBorderRadius = {
  md: 5,
  xs: 4,
};
const defaultBoxShadow = "#E9E9E9 0px 0px 20px 10px";
const biggerBoxShadow = "#C9C9C9 0px 0px 30px 15px";


/* For purple text displayed inline with other non-purple text */
const purpleInlineText = (theme) => ({
  color: theme.palette.secondary.dark,
  display: "inline",
});

export {
  defaultFlexStyles,
  defaultFlexRowStyles,
  defaultFlexColStyles,
  getDefaultEmphasisTextStyles,
  displayOnMobileStyles,
  displayOnDesktopStyles,
  getDefaultOverlayStyles,
  purpleMeshStyles,
  purpleGradientStylesToBottomRight,
  defaultPaddingY,
  defaultBorderRadius,
  defaultBoxShadow,
  biggerBoxShadow,
  purpleInlineText
};

