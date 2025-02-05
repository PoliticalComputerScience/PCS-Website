import { Navbar } from "../components/layout";
import RecruitmentTimeline from "../components/RecruitmentTimeline";
import { Divider, Box, Button, SxProps, Typography } from "@mui/material";
import groupPhoto from "/images/group_photo.jpg";
import dssCirclePhoto from "/images/dss_circle_photo.jpg";
import { useTheme } from "@mui/material/styles";
import pastClients from "/images/pastClients.png";
import whereMembersGo from "/images/whereMembersGo.png";

import useMediaQuery from "@mui/material/useMediaQuery";
import {
    defaultFlexStyles,
    defaultFlexRowStyles,
    defaultFlexColStyles,
    getDefaultOverlayStyles,
    purpleMeshStyles,
    purpleInlineText,
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
    const whoWeAreParagraph = `Political Computer Science @ Berkeley is a community of students who are passionate about using technology to solve social and political issues. We are a diverse group of students from various backgrounds and majors who come together to discuss and create solutions to real-world problems with the use of modern technologies.`;

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
        alignItems: "start",
        px: "3rem",
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
        <Box sx={statContainerStyles}>
            {stats.map((stat) => (
                <Stat {...stat} />
            ))}
        </Box>
    );

    const whoWeAre = (
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

    const recruitmentTimeline = (
        <Box sx={{ ...recruitmentTimelineStyles, p: 2 }}>
            <Typography variant="h2">{recruitmentTimelineTitle}</Typography>
            <RecruitmentTimeline />
        </Box>
    );

    const bigscreen = useMediaQuery(theme.breakpoints.up("sm"));

    const bragging = (
        <Box
            sx={{
                display: "flex",
                flexDirection: {
                    md: "row",
                    xs: "column",
                },
                width: "100%",
                overflow: "hidden",
                justifyContent: "center",
                alignItems: {
                    md: "start",
                    xs: "center",
                },
                gap: "3rem",
                p: "3rem",
            }}
        >
            <Box sx={{ ...defaultFlexColStyles, flex: 1 }}>
                <Typography variant={"h1"}>
                    {" "}
                    Our past{" "}
                    {
                        <Typography
                            variant={"h1"}
                            sx={{ ...purpleInlineText(theme), display: "inline" }}
                        >
                            clients
                        </Typography>
                    }{" "}
                </Typography>
                <Box component="img" src={pastClients} sx={{ width: "100%" }} />
                <Button
                    variant="contained"
                    sx={{ bgcolor: theme.palette.secondary.light, mt: 2, px: 2, py: 1 }}
                >
                    {" "}
                    <Typography sx={{ fontSize: "2.2em" }}> More Projects </Typography>
                </Button>
            </Box>
            <Divider
                variant={"inset"}
                orientation={bigscreen ? "vertical" : "horizontal"}
                flexItem
                sx={{ bgcolor: theme.palette.primary.main, borderRightWidth: 5 }}
            />
            <Box sx={{ ...defaultFlexColStyles, flex: 1 }}>
                <Typography variant="h1">Where do our members go? </Typography>
                <Box component="img" src={whereMembersGo} sx={{ width: "90%" }} />
            </Box>
        </Box>
    );

    return (
        <Box sx={{ overflow: "hidden", width: "100%" }}>
            <Navbar />
            {heroImage}
            {clubStats}
            {whoWeAre}
            {recruitmentTimeline}
            {bragging}
            <Footer />
        </Box>
    );
};

export default Home;
