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
} from "@mui/material";

import { purpleMeshStyles } from "../../utils/constants/styles";

import InstagramIcon from "/images/icons/instagram.svg";
import LinkedinIcon from "/images/icons/linkedin.svg";
import MediumIcon from "/images/icons/medium.svg";
import GithubIcon from "/images/icons/github.svg";

const pages = [
  { name: "Home", relativePath: "/" },
  { name: "About Us", relativePath: "/about" },
  {
    name: "Projects",
    relativePath: "/what-we-do/projects",
  },
  { name: "Join Us", relativePath: "/join-us" },
];

const socials = [
  {
    name: "instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/pcs_berkeley/",
  },
  {
    name: "linkedin",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/company/political-computer-science/",
  },
  {
    name: "medium",
    icon: MediumIcon,
    url: "https://medium.com/@pcsberkeley",
  },
  {
    name: "github",
    icon: GithubIcon,
    url: "https://github.com/PoliticalComputerScience",
  },
];

const PCS_GMAIL = "pcs.berkeley@gmail.com";
const PCS_ADDRESS = "University of California, Berkeley";

const bold_no_underline: SxProps = {
  fontWeight: "bold",
  textDecoration: "none",
};

const getSvgIcon = (Icon: string) => {
  return (
    // <SvgIcon>
    <Box
      component={"img"}
      sx={{ px: 1, py: 0 }}
      src={Icon}
      height={60}
      width={60}
    ></Box>
    // </SvgIcon>
  );
};

const PADDING = 30;

const Footer = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const pageListing = (
    <Stack spacing={2} sx={{ flex: "1", pl: 2, width: "100%" }}>
      {pages.map((page) => (
        <div>
          <Typography
            component={Link}
            sx={bold_no_underline}
            href={page.relativePath}
          >
            {page.name}
          </Typography>
        </div>
      ))}
      <Typography>{""}</Typography>
    </Stack>
  );

  const iconArray = (
    <Stack direction={"row"}>
      {" "}
      {socials.map(({ icon, url }) => (
        <Link href={url}>{getSvgIcon(icon)}</Link>
      ))}
    </Stack>
  );

  const contactUs = (
    <Stack spacing={2} alignItems="right" sx={{ pr: PADDING, pl: 2 }}>
      <Typography sx={bold_no_underline}>Contact</Typography>
      <Typography
        component={Link}
        sx={{ textDecoration: "none" }}
        href={`mailto:${PCS_GMAIL}`}
      >
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
        pt: "5rem",
        backgroundImage: purpleMeshStyles,
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction={mobile ? "column" : "row"}>
          {pageListing}
          {contactUs}
        </Grid>
        <a href="https://www.ocf.berkeley.edu">
          <img
            src="http://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin.svg"
            alt="Hosted by the OCF"
            style={{ border: 0, maxWidth: "200px" }}
          />
        </a>
      </Container>
      <Typography variant="body1" sx={{p: "1rem", pt: "2rem"}}>
        We are a student group acting independently of the University of
        California. We take full responsibility for our organization and this
        web site.
      </Typography>
    </Box>
  );
};

export default Footer;
