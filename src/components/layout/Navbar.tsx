import logo from "/images/logo.jpg";
import { ReactElement, useState } from "react";
import {
  getDefaultEmphasisTextStyles,
  defaultFlexRowStyles,
  displayOnMobileStyles,
} from "../../utils/constants/styles";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  SxProps,
  Button,
  MenuItem,
  Menu,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const theme = useTheme();
  const defaultEmphasisTextStyles = getDefaultEmphasisTextStyles(theme);

  interface LinkProps {
    name: string;
    buttonVariant: string;
    link: string | LinkProps[];
    color?: string;
  }

  const navbarContainerStyles: SxProps = {
    ...defaultFlexRowStyles,
    flexDirection: {
      md: "row",
      sx: "column",
    },
    px: 1.5,
    py: 1.2,
    justifyContent: "space-between",
    height: "4.5rem",
    width: "100%",
    position: "fixed",
    zIndex: "100",
    backgroundColor: "rgba(256, 256, 256, 0.7)",
    backdropFilter: "blur(11px)",
  };

  const imageStyles: SxProps = {
    height: "100%",
    objectFit: "contain",
  };

  // Styles for a button in the dropdown
  const dropdownButtonStyles: SxProps = {
    width: "100%",
    height: "100%",
    padding: "0.5rem",
    position: "relative",
    zIndex: "200"
  };

  // Styles for the button itself
  const buttonStyles: SxProps = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
  };

  const menuItemStyles: SxProps = {
    margin: 0,
    padding: 0,
  };

  const pages: LinkProps[] = [
    {
      name: "home",
      buttonVariant: "text",
      link: "/",
    },
    {
      name: "about",
      buttonVariant: "text",
      link: "/about",
    },
    {
      name: "what we do",
      buttonVariant: "text",
      link: [
        {
          name: "projects",
          buttonVariant: "text",
          link: "/what-we-do/projects",
        },
        {
          name: "editorials",
          buttonVariant: "text",
          // link: "/what-we-do/editorials",
          link: "https://medium.com/@pcsberkeley"
        },
        // {
        //   name: "research",
        //   buttonVariant: "text",
        //   link: "/what-we-do/research",
        // },
        // {
        //   name: "external events",
        //   buttonVariant: "text",
        //   link: "/what-we-do/external-events",
        // },
      ],
    },
    {
      name: "join us",
      buttonVariant: "contained",
      link: "/join-us",
      color: "secondary",
    },
  ];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [whatWeDoAnchorEl, setWhatWeDoAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const open = Boolean(anchorEl);
  const whatWeDoOpen = Boolean(whatWeDoAnchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickWhatWeDo = (event: React.MouseEvent<HTMLElement>) => {
    setWhatWeDoAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseWhatWeDo = () => {
    setWhatWeDoAnchorEl(null);
  };

  const customDropdown = (name: string, link: LinkProps[]): ReactElement => {
    return (
      <Box>
        <Button
          id="demo-positioned-button"
          aria-controls={whatWeDoOpen ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={whatWeDoOpen ? "true" : undefined}
          onClick={handleClickWhatWeDo}
          sx={buttonStyles}
        >
          {name}
          <FontAwesomeIcon icon={faCaretDown} />
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={whatWeDoAnchorEl}
          open={whatWeDoOpen}
          onClose={handleCloseWhatWeDo}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {link.map((page) => (
            <MenuItem sx={menuItemStyles}>
              {
                // @ts-expect-error there is a known bug with MUI types where a string can be used by TypeScript is not
                // able to parse the autmoatic type conversion
                <Button
                  href={page.link}
                  variant={page.buttonVariant}
                  color={page.color ? page.color : "inherit"}
                  sx={dropdownButtonStyles}
                >
                  {page.name}
                </Button>
              }
            </MenuItem>
          ))}
        </Menu>
      </Box>
    );
  };

  const mobileNavLinks = (
    <Box sx={displayOnMobileStyles}>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {pages.map(({ name, buttonVariant, link, color = "inherit" }) =>
          typeof link === "string" ? (
            <MenuItem>
              {
                // @ts-expect-error there is a known bug with MUI types where a string can be used by TypeScript is not
                // able to parse the autmoatic type conversion
                <Button href={link} variant={buttonVariant} color={color}>
                  {name}
                </Button>
              }
            </MenuItem>
          ) : (
            customDropdown(name, link)
          )
        )}
      </Menu>
    </Box>
  );

  const desktopNavLinks = (
    <Box sx={{ ...defaultFlexRowStyles, display: { md: "flex", xs: "none" } }}>
      {pages.map(({ name, buttonVariant, link, color }) =>
        typeof link === "string" ? (
          // @ts-expect-error there is a known bug with MUI types where a string can be used by TypeScript is not
          // able to parse the autmoatic type conversion
          <Button href={link} variant={buttonVariant} color={color}>
            {name}
          </Button>
        ) : (
          customDropdown(name, link)
        )
      )}
    </Box>
  );

  const leftNavbar = (
    <Box sx={defaultFlexRowStyles}>
      <Box component="img" src={logo} sx={imageStyles} />
      <Typography variant="h2" component="div">
        <Box component="span" sx={defaultEmphasisTextStyles}>
          PCS{" "}
        </Box>
        @ Berkeley
      </Typography>
    </Box>
  );

  return (
    <Box sx={navbarContainerStyles}>
      {leftNavbar}
      {desktopNavLinks}
      {mobileNavLinks}
    </Box>
  );
};

export default Navbar;
