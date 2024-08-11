import { StatProps } from "../../utils/interfaces/props";
import {Card, SxProps, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const Stat = ({ stat, statName, subtitle }: StatProps) => {
  const theme = useTheme();
  const statContainerStyles: SxProps = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    textAlign: "center",
    p: "2rem",
    borderRadius: 5,
    border: `0.5px solid ${theme.palette.secondary.light}`,
    backgroundColor: theme.palette.primary.light,
    flex: 1
  };
  return (
    <Card sx={statContainerStyles}>
      <Typography variant="h2">{stat}</Typography>
      <Typography variant="body1">{statName}</Typography>
      {subtitle ? <Typography variant="body2">{subtitle}</Typography> : null}
    </Card>
  );
};

export default Stat;
