import { Link, Stack, Typography, Card, Box } from "@mui/material";
import { Navbar, Footer } from "../components/layout";

import {
  defaultFlexStyles,
  defaultFlexRowStyles,
  defaultFlexColStyles,
  getDefaultOverlayStyles,
  purpleMeshStyles,
  purpleInlineText
} from "../utils/constants/styles";
import { useTheme } from "@mui/material/styles";
import generalMemberIcon from "/images/join_us_page/generalMember.png";
import partnerClubIcon from "/images/join_us_page/partnerClub.png";
import externalSponsorIcon from "/images/join_us_page/externalSponsor.png";
import citrisImage from "/images/icons/Citris.png";
import linkHealthImage from "/images/icons/LinkHealth.png";
import berIcon from "/images/icons/BER.png";
import saasIcon from "/images/icons/Saas.png";
import berkeleyProjectIcon from "/images/icons/BerkeleyProject.png";
import bprIcon from "/images/icons/BPR.png";
import bridgeIcon from "/images/icons/Bridge.png";
import dpeIcon from "/images/icons/DPE.png";

const waysToJoin = ["General Member", "Partner Club", "External Sponsor"];

const JoinUs = () => {
  const PCS_GMAIL = "pcs.berkeley@gmail.com";
  const PCS_INSTAGRAM = "https://www.instagram.com/pcs_berkeley/";
  const theme = useTheme();

  const purpleCardStyle = {
    // bgcolor: theme.palette.secondary.light,
    backgroundImage: purpleMeshStyles,
    py: 1,
    px: 4,
  };
  const greyBox = { borderRadius: "6px", bgcolor: "#D9D9D9", width: "50%" };
  const bold = { fontWeight: 'bold' };

  const inlineLink = {
    ...bold,
    ...purpleInlineText(theme),
    textDecoration: "none",
  };
  const leftIcon = (src) => (
    <Box
      sx={{ alignItems: "top", borderRadius: "12px" }}
      component="img"
      src={src}
      width={150}
    />
  );
  const clubImage = (src) => (
    <Box component={"img"} sx={{ height: "80px" }} src={src} />
  );
  const purpleCard = (text: string) => (
    <Card id={text} sx={purpleCardStyle}>
      <Typography variant="h6" sx={bold}>
        {text.split(" ")[0]}
      </Typography>
      <Typography variant="h6" sx={bold}>
        {text.split(" ")[1]}
      </Typography>
    </Card>
  );
  const overview = (
    <>
      <Box
        component={"div"}
        sx={{ ...defaultFlexStyles, pt: "8vh", pb: "2vh" }}
      >
        <Typography variant="h1" component="p">
          {" "}
          {
            <Typography
              variant="h1"
              component="p"
              sx={{ ...purpleInlineText(theme)}}
            >
              {" "}
              Join Us{" "}
            </Typography>
          }{" "}
          as a ...
        </Typography>{" "}
      </Box>
      <Stack direction="row" spacing={10} sx={defaultFlexRowStyles}>
        {waysToJoin.map(purpleCard)}
      </Stack>
    </>
  );

  const generalMember = (
    <Stack
      direction="row"
      spacing={4}
      sx={{
        ...defaultFlexRowStyles,
        px: 5,
        pt: 10,
        pb: 3,
        alignItems: "start",
      }}
    >
      {leftIcon(generalMemberIcon)}
      <Box sx={{ width: "40rem" }}>
        <Typography variant="h6"> General Member </Typography>
        <Typography>
          {" "}
          New members are accepted twice a year during Fall and Spring
          recruitment cycles. More details on the current process can be found
          [here].{" "}
        </Typography>
        <Stack direction="row" padding={1} spacing={2}>
          <Box sx={greyBox}>
            <Stack spacing={1} padding={1}>
              <Typography variant="h6">Who Can Join?</Typography>
              <Typography sx={bold}>
                Current UC Berkeley undergraduate & graduate students.
              </Typography>
              <Typography>
                Note: While we are a majority undergrad club, our community and
                conversations are enriched by our non-traditional, transfer, and
                graduate level members.
              </Typography>
            </Stack>
          </Box>

          <Box sx={greyBox}>
            <Stack spacing={1} padding={1}>
              <Typography variant="h6">How Do I Join?</Typography>
              <Typography>
                The recruitment process may change slightly between cycles but
                generally consists of two stages:
                <ol>
                  <li>Brief application</li>
                  <li> Short, in-person interview.</li>
                </ol>
                Applicants who advance past both steps are invited to join the
                club.
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>{" "}
    </Stack>
  );

  const partnerClub = (
    <Stack
      direction="row"
      spacing={4}
      sx={{ ...defaultFlexRowStyles, px: 3, py: 3, alignItems: "start" }}
    >
      {leftIcon(partnerClubIcon)}
      <Box sx={{ width: "40rem" }}>
        <Typography variant="h6"> Partner Club </Typography>
        <Typography>
          {" "}
          PCS collaborates with other student orgs on projects, socials, and
          other events. Reach out via{" "}
          {
            <Typography
              sx={inlineLink}
              component={Link}
              href={`mailto:${PCS_GMAIL}`}
            >
              email
            </Typography>
          }{" "}
          or{" "}
          {
            <Typography sx={inlineLink} component={Link} href={PCS_INSTAGRAM}>
              Instagram
            </Typography>
          }{" "}
          and let’s create something together!
        </Typography>
        {/* <ImageCloud /> */}
        <Stack direction="row" pt={2}>
          <Box component={"img"} sx={{ height: "40px" }} src={saasIcon} />
          <Box component={"img"} sx={{ height: "40px" }} src={bprIcon} />
        </Stack>
        <Stack direction="row">
          {clubImage(berkeleyProjectIcon)}
          {clubImage(berIcon)}
          {clubImage(bridgeIcon)}
          {clubImage(dpeIcon)}
        </Stack>
      </Box>
    </Stack>
  );

  const externalSponsor = (
    <Stack
      direction="row"
      spacing={4}
      sx={{ ...defaultFlexRowStyles, px: 3, py: 3, alignItems: "start" }}
    >
      {leftIcon(externalSponsorIcon)}
      <Box sx={{ width: "40rem" }}>
        <Typography variant="h6"> External Sponsor </Typography>
        <Typography>
          {" "}
          Whether you’re looking for support on an {<Typography component={Link} sx={inlineLink} href={"/what-we-do/projects"}>existing project</Typography>} or want to
          explore a new research area, PCS members bring interdisciplinary
          skillsets, creative solutions, and meaningful results to our
          partnerships with external organizations.{" "}
        </Typography>
        <Stack direction="row" pt={2} spacing={2}>
          {clubImage(citrisImage)}
          {clubImage(linkHealthImage)}
        </Stack>
      </Box>{" "}
    </Stack>
  );

  const emailForm = ""; /*TODO*/

  return (
    <>
      <Navbar />
      {overview}
      {generalMember}
      {partnerClub}
      {externalSponsor}
      {emailForm}
      <Footer />
    </>
  );
};

export default JoinUs;
