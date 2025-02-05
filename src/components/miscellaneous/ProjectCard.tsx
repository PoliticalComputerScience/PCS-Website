import { ReactElement } from "react";
import { ProjectCardProps } from "../../utils/interfaces/props";
import { Box, SxProps, Typography } from "@mui/material";
import { defaultBorderRadius } from "../../utils/constants/styles";
import { purpleMeshStyles, defaultBoxShadow, biggerBoxShadow } from "../../utils/constants/styles";

const ProjectCard = ({
    projectName,
    projectDescription,
    tags,
    landscapePhoto,
    portraitPhoto,
}: ProjectCardProps) => {
    /**
     * Styles
     */
    const screenBorderColor = "#F8F8F8";
    const containerStyles: SxProps = {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        gap: "2rem",
        p: "1rem",
        boxShadow: defaultBoxShadow,
        "&:hover": {
            boxShadow: biggerBoxShadow,
            transform: "scale(1.01)",
        },
        "&:hover .meshOverlay": {
            opacity: "0.15",
        },
        transition: "0.5s",
        borderRadius: defaultBorderRadius,
        width: "100%",
        height: "100%",
    };
    const squareMeshStyles: SxProps = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: purpleMeshStyles,
        aspectRatio: 1,
        width: "100%",
        borderRadius: 2,
        p: {
            md: "2rem",
            xs: "1rem",
        },
        position: "relative",
    };
    const meshOverlayStyles: SxProps = {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        opacity: 0,
        borderRadius: 2,
        transition: "0.5s",
    };
    const innerContainerStyles: SxProps = {
        aspectRatio: 3 / 2,
        borderRadius: defaultBorderRadius,
        width: "100%",
        position: "relative",
    };
    const landscapeContainerSyles: SxProps = {
        aspectRatio: 3 / 2,
        borderRadius: 2,
        boxShadow: "#D6C5E0 0px 0px 40px 10px",
        position: "absolute",
        width: portraitPhoto ? "95%" : "100%",
        top: 0,
        left: 0,
        backgroundImage: `url("${landscapePhoto}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: {
            md: `0.6rem solid ${screenBorderColor}`,
            xs: `0.3rem solid ${screenBorderColor}`,
        },
    };
    const portaitContainerSyles: SxProps = {
        aspectRatio: 1 / 1.9,
        borderRadius: 2,
        boxShadow: "#91879c 0px 0px 10px 2px",
        position: "absolute",
        height: "93%",
        bottom: 0,
        right: 0,
        display: portraitPhoto ? "flex" : "none",
        backgroundImage: `url("${portraitPhoto}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: {
            md: `0.5rem solid ${screenBorderColor}`,
            xs: `0.2rem solid ${screenBorderColor}`,
        },
    };
    const textContainerStyles: SxProps = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
        gap: "1rem",
        p: "0.5rem",
        flexGrow: 1,
    };
    const tagStyles: SxProps = {
        py: "0.3rem",
        px: "0.7rem",
        border: "1px solid gray",
        borderRadius: defaultBorderRadius,
    };
    const tagFlexStyles: SxProps = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "start",
        alignItems: "center",
        textAlign: "center",
        gap: "0.5rem",
    };

    /**
     * Returns a custom tag meant for this element.
     * @param tag the string for the tag.
     * @returns custom tag meant for this element.
     */
    const customTag = (tag: string): ReactElement => {
        return (
            <Box sx={tagStyles}>
                <Typography variant="body2">{tag}</Typography>
            </Box>
        );
    };

    return (
        <Box sx={containerStyles}>
            <Box sx={squareMeshStyles}>
                <Box sx={meshOverlayStyles} className="meshOverlay" />
                <Box sx={innerContainerStyles}>
                    <Box sx={landscapeContainerSyles}></Box>
                    <Box sx={portaitContainerSyles}></Box>
                </Box>
            </Box>
            <Box sx={textContainerStyles}>
                <Typography variant="h5">
                    <span style={{ fontWeight: "bold" }}>{projectName}</span>
                    {" - " + projectDescription}
                </Typography>
                <Box sx={tagFlexStyles}>{tags.map((tag) => customTag(tag))}</Box>
            </Box>
        </Box>
    );
};

export default ProjectCard;
