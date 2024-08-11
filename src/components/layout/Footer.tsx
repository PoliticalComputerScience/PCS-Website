import React from "react";

import { useTheme } from "@mui/material/styles";

import useMediaQuery from "@mui/material/useMediaQuery";

import {
    Stack,
    Box,
    Container,
    Grid,
    SxProps,
    Typography,
    Link,
    SvgIcon,
} from "@mui/material";

import InstagramIcon from "/images/icons/instagram.svg";
import LinkedinIcon from "/images/icons/linkedin.svg";
import MediumIcon from "/images/icons/medium.svg";
import GithubIcon from "/images/icons/github.svg";

const pages = [
    { name: "Home", relativePath: "/" },
    { name: "About Us", relativePath: "/about" },
    { name: "What We Do", relativePath: "/what-we-do" },
    { name: "Join Us", relativePath: "/join-us" },
];

const socials = [
    { name: "instagram", icon: InstagramIcon, url: "https://www.instagram.com/pcs_berkeley/" },
    { name: "linkedin", icon: LinkedinIcon, url: "https://www.linkedin.com/company/political-computer-science/" },
    { name: "medium", icon: MediumIcon, url: "https://medium.com/@pcsberkeley" },
    { name: "github", icon: GithubIcon, url: "https://github.com/PoliticalComputerScience" },
];

const PCS_GMAIL = "pcs.berkeley@gmail.com";
const PCS_ADDRESS = "University of California, Berkeley";

const bold: SxProps = { fontWeight: 600 };

const getSvgIcon = (Icon: string) => {
    return (
        // <SvgIcon>
        <Box component={'img'} sx={{px:1, py:0}} src={Icon} height={40} width={40}></Box>
        // </SvgIcon>
    );
};

const Footer = () => {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("md"))
    const pageListing = (
        <Stack spacing={2} sx={{ flex: "1" }}>
            {pages.map(({ name, relativePath }) => (
                <Typography component={Link} sx={bold} href={relativePath}>
                    {name}
                </Typography>
            ))}
        </Stack>
    );

    const iconArray = (
        <Stack direction={"horizontal"}>
            {" "}
            {socials.map(({ name, icon, url }) => <Link href={url}>{getSvgIcon(icon)}</Link> )}
        </Stack>
    );

    const contactUs = (
        <Stack spacing={2} alignItems="right" >
            <Typography sx={bold}>Contact</Typography>
            <Typography component={Link} href={`mailto:${PCS_GMAIL}`}>
                {PCS_GMAIL}
            </Typography>
            <Typography> {PCS_ADDRESS}</Typography>

            {iconArray}
        </Stack>
    );
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "secondary.light",
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction={mobile ? "column" : "row"}>
                    {pageListing}
                    {contactUs}
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
