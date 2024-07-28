import { SxProps, Theme } from "@mui/material";

/**
 * Default styles for a row flexbox
 */
const defaultFlexRowStyles: SxProps = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    height: '100%',
    gap: 2
};

/**
 * default styles for emphasized text - h1, purple, bold
 * @param theme requires the theme to access MUI theme constants
 * @returns SxProps which are default styles for emphasized text
 */
const getDefaultEmphasisTextStyles = (theme: Theme): SxProps => ({
    color: theme.palette.secondary.main,
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.h1.fontWeight,
});

/**
 * Default styles to display only on mobile
 */
const displayOnMobileStyles: SxProps = {
    display: { md: 'none', xs: 'block' }
}

/**
 * Default styles to display only on desktop
 */
const displayOnDesktopStyles: SxProps = {
    display: { md: 'block', xs: 'none' }
}

export { defaultFlexRowStyles, getDefaultEmphasisTextStyles, displayOnMobileStyles, displayOnDesktopStyles };
