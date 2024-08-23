import { IconCardProps } from "../../utils/interfaces/props";
import { Box, SxProps, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  purpleGradientStylesToBottomRight,
  defaultBorderRadius,
  defaultBoxShadow
} from "../../utils/constants/styles";

/**
 * IconCard component - renders a card with a linear purple gradient background which is icon-based
 * @param title the title of the card
 * @param children the paragraph body of the card (usually a few short sentences)
 * @param icon the icon to go in the top left corner, of type {@link IconDefinition}.
 * @returns IconCard React component.
 */
const IconCard = ({ title, children, icon }: IconCardProps) => {
  const containerStyles: SxProps = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundImage: purpleGradientStylesToBottomRight,
    p: "1.5rem",
    borderRadius: defaultBorderRadius,
    boxShadow: defaultBoxShadow,
  };
  const topContainerStyles: SxProps = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    pb: "2rem",
  };
  return (
    <Box sx={containerStyles}>
      <Box sx={topContainerStyles}>
        <Typography variant="body2">{title}</Typography>
        <FontAwesomeIcon icon={icon} size="xl"></FontAwesomeIcon>
      </Box>
      <Typography variant="body1" sx={{ lineHeight: 2 }}>
        {children}
      </Typography>
    </Box>
  );
};

export default IconCard;
