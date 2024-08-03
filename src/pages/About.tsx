import { SxProps, Box, Typography } from "@mui/material";
import { Line, Navbar } from "../components/layout";
import { IconCard, InfoSection } from "../components/miscellaneous";
import { aboutPageIconCards, aboutPageInfoSection } from "../../public/data";
import {
  defaultFlexColStyles,
  defaultPaddingY,
  purpleMeshStyles,
} from "../utils/constants/styles";

const About = () => {
  /**
   * Constants
   */
  const HERO_IMAGE_TITLE = "At the intersection of politics and tech.";
  const HERO_IMAGE_PARAGRAPH = `Political Computer Science strives to better understand the intersection of policy and
  technology. Our club recognizes the imperfections within the tech industry and fosters conversations 
  about how we can become better computer scientists, data scientists, lawyers, and people.`;
  const A_SPACE_FOR_STUDENTS_TO_TITLE = "A space for students to...";

  /**
   * Styles
   */
  const heroImageStyles: SxProps = {
    backgroundImage: purpleMeshStyles,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    px: "5%",
    pt: "30vh",
    pb: "20vh",
  };
  const heroImageTextStyles: SxProps = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    textAlign: "left",
  };
  const iconCardContainerStyles: SxProps = {
    display: "grid",
    gridTemplateColumns: {
      sm: "1fr 1fr",
      xs: "1fr",
    },
    gap: "2.5rem",
    maxWidth: "800px",
  };

  // Hero image for the page.
  const heroImage = (
    <Box sx={heroImageStyles}>
      <Box sx={heroImageTextStyles}>
        <Typography variant="h1" component="div" sx={{ lineHeight: 2 }}>
          {HERO_IMAGE_TITLE}
        </Typography>
        <Typography variant="h6" component="div" sx={{ lineHeight: 2.5 }}>
          {HERO_IMAGE_PARAGRAPH}
        </Typography>
      </Box>
    </Box>
  );

  // Section titled by "A space for students to..."
  const aSpaceForStudentsTo = (
    <Box sx={{ ...defaultFlexColStyles, py: defaultPaddingY, px: "2rem" }}>
      <Typography variant="h2" component="div" sx={{ pb: "4rem" }}>
        {A_SPACE_FOR_STUDENTS_TO_TITLE}
      </Typography>
      <Box sx={iconCardContainerStyles}>
        {aboutPageIconCards.map((card) => (
          <IconCard {...card} />
        ))}
      </Box>
    </Box>
  );

  const infoSection = (
    <Box sx={{...defaultFlexColStyles, pb: defaultPaddingY}}>
      {aboutPageInfoSection.map((info) => (
        <>
          <Line />
          <InfoSection {...info} />
        </>
      ))}
    </Box>
  );

  return (
    <>
      <Navbar />
      {heroImage}
      {aSpaceForStudentsTo}
      {infoSection}
    </>
  );
};

export default About;
