import { Footer, Navbar, TextualHeroImage } from "../components/layout";
import { ProjectCard } from "../components/miscellaneous";
import { projects } from "../../public/data";
import { Box, SxProps, Typography } from "@mui/material";
import { ProjectCardProps } from "../utils/interfaces/props";
import { Dropdown } from "../components/buttons";
import { useState } from "react";

const Projects = () => {
  /**
   * Constants
   */
  const HERO_IMAGE_TITLE = "Our work has an impact.";
  const HERO_IMAGE_PARAGRAPH = `We focus on delivering results that drive political, social, and economic change. We aim to positively 
  impact communities and demonstrate the power of data beyond software, bridging the gap between
  coding and the humanities.`;
  const ABOUT_OUR_PROJECTS_TITLE = "About our Projects";
  const ABOUT_OUT_PROJECTS_PARAGRAPH = `Each semester, we run 4 - 5 projects all with the goal of exploring the intersection between politics and technology. We truly
  believe, no matter your skill set, our projects have a place for everyone. Some are more technical and involve specific data 
  science domain knowledge or a web dev background, while others are introductory or involve lots of policy analysis. We 
  always have a mix of externally sourced project, and internally run ones which our members come up with!`;
  const FEATURED_PROJECTS_TEXT = "Featured Projects";

  const DROPDOWN_TEXT = "All Skills";
  /**
   * Given a list of projects of type {@link ProjectCardProps}, gets a list of all the skills.
   * @param projectInfo the list of projects.
   * @returns list of all skills in all projects.
   */
  const getAllSkills = (projectInfo: ProjectCardProps[]): string[] => {
    const skills: Set<string> = new Set();
    projectInfo.forEach((project) => {
      project.tags.forEach((tag) => {
        skills.add(tag);
      });
    });
    return Array.from(skills);
  };
  const [selectedDropdownItem, setSelectedDropdownItem] =
    useState(DROPDOWN_TEXT);

  const projectQualifiesViaFilter = (project: ProjectCardProps): boolean => {
    if (selectedDropdownItem === DROPDOWN_TEXT) {
      return true;
    }
    return project.tags.includes(selectedDropdownItem);
  };

  /**
   * Styles
   */
  const projectCardGap = {
    lg: "6rem",
    md: "4rem",
    xs: "2rem",
  };
  const projectGridContainerStyles: SxProps = {
    display: "grid",
    gridTemplateColumns: {
      md: "1fr 1fr",
      xs: "1fr",
    },
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "start",
    gap: projectCardGap,
    maxWidth: "1200px",
    pb: projectCardGap,
  };
  const projectFlexAlignmentContainer: SxProps = {
    display: "flex",
    flexDirection: "column",
    gap: {
      md: "4rem",
      xs: "2rem",
    },
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    px: "7%",
  };
  const featuredProjectsTitleContainer: SxProps = {
    display: "flex",
    flexDirection: {
      md: "row",
      xs: "column",
    },
    gap: "1rem",
    justifyContent: "space-between",
    alignItems: {
      md: "center",
      xs: "start",
    },
    width: "100%",
    maxWidth: "1200px",
  };

  return (
    <>
      <Navbar />
      <TextualHeroImage
        title={HERO_IMAGE_TITLE}
        paragraph={HERO_IMAGE_PARAGRAPH}
        gradient={true}
      />
      <TextualHeroImage
        title={ABOUT_OUR_PROJECTS_TITLE}
        paragraph={ABOUT_OUT_PROJECTS_PARAGRAPH}
      />
      <Box sx={projectFlexAlignmentContainer}>
        <Box sx={featuredProjectsTitleContainer}>
          <Typography variant="h1">{FEATURED_PROJECTS_TEXT}</Typography>
          <Dropdown
            dropdownName={DROPDOWN_TEXT}
            dropdownItems={getAllSkills(projects)}
            selectSetter={setSelectedDropdownItem}
            selectedItem={selectedDropdownItem}
          />
        </Box>
        <Box sx={projectGridContainerStyles}>
          {projects.filter(projectQualifiesViaFilter).map((project) => (
            <ProjectCard {...project} />
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Projects;
