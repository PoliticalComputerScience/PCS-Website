import { Navbar } from "../components/layout";
import { Box, Button, SxProps, Typography, Card } from "@mui/material";
import groupPhoto from "/images/group_photo.jpg";
import dssCirclePhoto from "/images/dss_circle_photo.jpg";
import { useTheme } from "@mui/material/styles";

import {
  defaultFlexStyles,
  defaultFlexRowStyles,
  defaultFlexColStyles,
  getDefaultOverlayStyles,
  purpleMeshStyles,
} from "../utils/constants/styles";
import { Stat } from "../components/miscellaneous";
import { stats } from "../../public/data";
import Footer from "../components/layout/Footer";

const Home = () => {
  /**
   * Constants
   */
  const overlayTitle = "POLITICAL \n COMPUTER SCIENCE";
  const overlaySubtitle = "A community built for diverse thought.";
  const joinUsButtonText = "JOIN US!";
  const whoWeAreTitle = "Who We Are:";
  const whoWeAreParagraph = `Political Computer Science @ Berkeley is a club dedicated to exploring interdisciplinary 
  work connecting the technology and political fields. We have plenty of individuals with a 
  strong tech background and host several web development/data science project each semester, 
  but we also have room individuals who explore non-technical projects relating to tech policy, 
  and even code tools to help inform others about government.`;

  const recruitmentTimelineTitle = "Recruitment Timeline:";

  /**
   * Styles
   */
  const theme = useTheme();
  const defaultOverlayStyles = getDefaultOverlayStyles(theme);
  const heroImageStyles: SxProps = {
    height: "100vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundImage: `url(${groupPhoto})`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    py: "15vh",
    px: "10%",
  };
  const statContainerStyles: SxProps = {
    ...defaultFlexRowStyles,
    backgroundImage: purpleMeshStyles,
    alignItems: "stretch",
    flexWrap: "wrap",
    gap: "3rem",
    py: "5rem",
    px: "15%",
  };
  const whoWeAreStyles: SxProps = {
    ...defaultFlexStyles,
    flexDirection: {
      md: "row",
      xs: "column",
    },
    width: "100%",
    overflowX: "hidden",
    justifyContent: "center",
    alignItems: "start",
    px: "3rem",
    pt: "5rem",
    gap: "2rem",
  };

  const recruitmentTimelineStyles: SxProps = {
    ...defaultFlexStyles,
    flexDirection: {
      md: "column",
      xs: "column",
    },
    // width: "100%",
    // overflowX: "hidden",
    // justifyContent: "center",
    alignItems: "start",
    px: "3rem",
    // py: "5rem",
    gap: "2rem",
  };

  const heroImage = (
    <Box sx={heroImageStyles}>
      <Box sx={{ ...defaultOverlayStyles, borderRadius: 5 }}>
        <Typography variant="h1" component="div">
          {overlayTitle}
        </Typography>
        <Typography variant="body1" component="div">
          {overlaySubtitle}
        </Typography>
      </Box>
      <Box sx={{ ...defaultOverlayStyles, borderRadius: 5 }}>
        <Button href="/join-us">
          <Typography variant="h2" sx={{ color: theme.palette.primary.light }}>
            {joinUsButtonText}
          </Typography>
        </Button>
      </Box>
    </Box>
  );

  const clubStats = (
    // TODO replace with a grid with padding?
    <Box sx={statContainerStyles}>
      {stats.map((stat) => (
        <Stat {...stat} />
      ))}
    </Box>
  );

  const whoWeAre = (
    // TODO convert the flex fuckery to a grid layout?
    <Box sx={whoWeAreStyles}>
      <Box
        sx={{
          ...defaultFlexColStyles,
          flex: 1,
          alignItems: "start",
          justifyContent: "start",
          gap: "1rem",
        }}
      >
        <Typography variant="h2">{whoWeAreTitle}</Typography>
        <Typography variant="body1" sx={{ lineHeight: 2.5 }}>
          {whoWeAreParagraph}
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Box
          component="img"
          src={dssCirclePhoto}
          sx={{ maxWidth: "80%", borderRadius: 5 }}
        />
      </Box>
    </Box>
  );

  return (
    <div>
      <Navbar />
      {heroImage}
      {clubStats}
      {whoWeAre}
      <Footer />
    </div>
  );
};

export default Home;
