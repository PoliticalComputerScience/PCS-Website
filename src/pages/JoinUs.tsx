import { Link, Stack, Typography, Card, Box, Button } from "@mui/material";
import { Navbar, Footer } from "../components/layout";

import {
  defaultFlexStyles,
  purpleMeshStyles,
  purpleInlineText,
} from "../utils/constants/styles";
import { useTheme } from "@mui/material/styles";
import generalMemberIcon from "/images/join_us_page/generalMember.png";
import partnerClubIcon from "/images/join_us_page/partnerClub.png";
import externalSponsorIcon from "/images/join_us_page/externalSponsor.png";
import partnerClubIcons from "/images/partnerClubIcons.png";
import partnerOrgIcons from "/images/partnerOrgIcons.png";
import recruitmentTimeline from "/images/recruitmentTimeline2.png";

const waysToJoin = ["General Member", "Partner Club", "External Sponsor"];

const JoinUs = () => {
  const PCS_GMAIL = "pcs.berkeley@gmail.com";
  const PCS_INSTAGRAM = "https://www.instagram.com/pcs_berkeley/";
  const theme = useTheme();

  const purpleCardStyle = {
    // bgcolor: theme.palette.secondary.light,
    backgroundImage: purpleMeshStyles,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flex: 1,
    px: "7rem",
    py: "3rem",
  };
  const greyBox = {
    borderRadius: "6px",
    bgcolor: "#D9D9D9",
    flex: 1,
    p: "1rem",
  };
  const bold = { fontWeight: "bold" };

  const inlineLink = {
    ...bold,
    ...purpleInlineText(theme),
    textDecoration: "none",
  };
  const leftIcon = (src: string) => (
    <Box
      sx={{
        alignItems: "top",
        borderRadius: "12px",
        width: {
          md: "150px",
          xs: "100%",
        },
      }}
      component="img"
      src={src}
    />
  );

  const cardAndApplication = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        px: {
          md: "20%",
          xs: "7%",
        },
        width: "100%",
        pt: "20vh",
        pb: "8vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={recruitmentTimeline}
        sx={{
          width: {
            md: "60%",
            xs: "100%",
          },
          aspectRatio: 2/3
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "stretch",
          width: {
            md: "60%",
            xs: "100%",
          },
          gap: "0.5rem",
        }}
      >
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLScuHtC2gVWd3YcQw0WI2myL31_uYHj8dWU-WkExroT4wdaoIQ/viewform"
          target="_blank"
          sx={{
            flex: 1,
            width: "100%",
            backgroundColor: theme.palette.secondary.main,
            color: "white",
            "&:hover": {
              color: "black",
            },
            py: "0.5rem"
          }}
        >
          Application
        </Button>
        <Button
          href="https://pcs-fall2024.carrd.co/"
          target="_blank"
          sx={{
            flex: 1,
            width: "100%",
            backgroundColor: theme.palette.secondary.main,
            color: "white",
            "&:hover": {
              color: "black",
            },
            py: "0.5rem"
          }}
        >
          Recruitment Card
        </Button>
      </Box>
    </Box>
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
    <Box
      sx={{
        width: "100%",
        px: {
          md: "20%",
          xs: "7%",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Box
        component={"div"}
        sx={{
          ...defaultFlexStyles,
        }}
      >
        <Typography variant="h1" component="p">
          {" "}
          {
            <Typography
              variant="h1"
              component="p"
              sx={{ ...purpleInlineText(theme) }}
            >
              {" "}
              Join Us{" "}
            </Typography>
          }{" "}
          as a ...
        </Typography>{" "}
      </Box>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          flexDirection: {
            md: "row",
            xs: "column",
          },
          width: "100%",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {waysToJoin.map(purpleCard)}
      </Stack>
    </Box>
  );

  const generalMember = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        px: {
          md: "20%",
          xs: "7%",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            md: "row",
            xs: "column",
          },
          pt: 10,
          pb: 3,
          alignItems: "start",
          maxWidth: "100%",
          overflow: "hidden",
          gap: "2rem",
        }}
      >
        {leftIcon(generalMemberIcon)}
        <Box sx={{ width: "100%" }}>
          <Typography variant="h6"> General Member </Typography>
          <Typography>
            {" "}
            New members are accepted twice a year during Fall and Spring
            recruitment cycles. More details on the current process can be found
            [here].{" "}
          </Typography>
          <Stack
            sx={{
              flexDirection: {
                md: "row",
                xs: "column",
              },
            }}
            padding={1}
            spacing={2}
          ></Stack>
        </Box>{" "}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            md: "row",
            xs: "column",
          },
          width: "100%",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
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
              generally consists of three stages:
              <ol>
                <li>Brief application</li>
                <li>Short, in-person interview.</li>
                <li>Social Round</li>
              </ol>
              Applicants who advance past these steps are invited to join the
              club.
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );

  const partnerClub = (
    <Box
      sx={{
        maxWidth: "100%",
        overflow: "hidden",
        px: {
          md: "20%",
          xs: "7%",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            md: "row",
            xs: "column",
          },
          pt: 10,
          pb: 3,
          alignItems: "start",
          maxWidth: "100%",
          overflow: "hidden",
          gap: "2rem",
        }}
      >
        {leftIcon(partnerClubIcon)}
        <Box>
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
            and let's create something together!
          </Typography>
          {/* <ImageCloud /> */}
        </Box>
      </Box>
      <Box>
        <Box component="img" src={partnerClubIcons} sx={{ width: "100%" }} />
      </Box>
    </Box>
  );

  const externalSponsor = (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        px: {
          md: "20%",
          xs: "7%",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            md: "row",
            xs: "column",
          },
          pt: 10,
          pb: 3,
          alignItems: "start",
          maxWidth: "100%",
          overflow: "hidden",
          gap: "2rem",
        }}
      >
        {leftIcon(externalSponsorIcon)}
        <Box>
          <Typography variant="h6"> External Sponsor </Typography>
          <Typography>
            {" "}
            Whether you're looking for support on an{" "}
            {
              <Typography
                component={Link}
                sx={inlineLink}
                href={"/what-we-do/projects"}
              >
                existing project
              </Typography>
            }{" "}
            or want to explore a new research area, PCS members bring
            interdisciplinary skillsets, creative solutions, and meaningful
            results to our partnerships with external organizations.{" "}
          </Typography>
        </Box>{" "}
      </Box>
      <Box component="img" src={partnerOrgIcons} sx={{ width: "100%" }} />
    </Box>
  );

  const emailForm = ""; /*TODO*/

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      <Navbar />
      {cardAndApplication}
      {overview}
      {generalMember}
      {partnerClub}
      {externalSponsor}
      {emailForm}
      <Footer />
    </Box>
  );
};

export default JoinUs;
