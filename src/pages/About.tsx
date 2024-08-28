import { SxProps, Box, Typography } from "@mui/material";
import { TextualHeroImage, Line, Navbar } from "../components/layout";
import { IconCard, InfoSection } from "../components/miscellaneous";
import { aboutPageIconCards, aboutPageInfoSection } from "../../public/data";
import {
  defaultFlexColStyles,
  defaultPaddingY,
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

  const iconCardContainerStyles: SxProps = {
    display: "grid",
    gridTemplateColumns: {
      sm: "1fr 1fr",
      xs: "1fr",
    },
    gap: "2.5rem",
    maxWidth: "800px",
  };

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
    <Box sx={{ ...defaultFlexColStyles, pb: defaultPaddingY }}>
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
      <TextualHeroImage
        title={HERO_IMAGE_TITLE}
        paragraph={HERO_IMAGE_PARAGRAPH}
        gradient={true}
      />
      {aSpaceForStudentsTo}
      {infoSection}
    </>
  );
};

export default About;
