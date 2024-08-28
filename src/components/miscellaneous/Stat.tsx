import { StatProps } from "../../utils/interfaces/props";
import {Card, SxProps, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { ReactElement } from "react";
import CountUp from "react-countup";

const Stat = ({ stat, statName, subtitle }: StatProps) => {
  // Styles
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
    flex: 1,
    minWidth: "200px"
  };

  /**
   * Returns whether or not a stat, which is a string, has a one character suffix which is NOT a digit.
   * Stat is supposed to be a number in string form and possibly have a suffix. I.e "38" returns false but "73+" returns true.
   * @param stat the numerical stat to check.
   * @returns boolean true if the stat has a suffix.
   */
  const hasSuffix = (stat: string): boolean => {
    const lastChar = stat.slice(-1);
    return isNaN(parseInt(lastChar, 10));
  };

  /**
   * Returns the custom countup that we will use in the `Stat` component with all of our default settings.
   * @param end the end of the `CountUp`.
   * @returns ReactElement `CountUp` component with the `end` set as parameter `end`.
   */
  const customCountup = (end: number): ReactElement => {
    return (
      <CountUp start={0} duration={2.75} end={end} enableScrollSpy={true} />
    );
  };

  return (
    <Card sx={statContainerStyles}>
      {hasSuffix(stat) ? (
        <Typography variant="h2">
          {customCountup(parseInt(stat.slice(0, -1)))}
          {stat.slice(-1)}
        </Typography>
      ) : (
        <Typography variant="h2">{customCountup(parseInt(stat))}</Typography>
      )}
      <Typography variant="body1">{statName}</Typography>
      {subtitle ? <Typography variant="body2">{subtitle}</Typography> : null}
    </Card>
  );
};

export default Stat;
