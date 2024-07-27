import logo from "/images/logo.jpg";
import { useState } from "react";
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
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const theme = useTheme();
  const defaultEmphasisTextStyles = getDefaultEmphasisTextStyles(theme);

  interface LinkProps {
    name: string;
    buttonVariant: string;
    link: string;
    color?: string;
  }

  const navbarContainerStyles: SxProps = {
    ...defaultFlexRowStyles,
    px: 1.5,
    py: 1,
    justifyContent: "space-between",
    height: "4rem",
  };

  const imageStyles: SxProps = {
    height: "100%",
    objectFit: "contain",
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
      link: "/",
    },
    {
      name: "what we do",
      buttonVariant: "text",
      link: "/",
    },
    {
      name: "join us",
      buttonVariant: "contained",
      link: "/",
      color: "secondary",
    },
  ];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        {pages.map(({ name, buttonVariant, link, color }) =>
          color ? (
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
            <MenuItem>
              {
                // @ts-expect-error there is a known bug with MUI types where a string can be used by TypeScript is not
                // able to parse the autmoatic type conversion
                <Button href={link} variant={buttonVariant}>
                  {name}
                </Button>
              }
            </MenuItem>
          )
        )}
      </Menu>
    </Box>
  );

  const desktopNavLinks = (
    <Box sx={{ ...defaultFlexRowStyles, display: { md: "flex", xs: "none" } }}>
      {pages.map(({ name, buttonVariant, link, color }) =>
        color ? (
          // @ts-expect-error there is a known bug with MUI types where a string can be used by TypeScript is not
          // able to parse the autmoatic type conversion
          <Button href={link} variant={buttonVariant} color={color}>
            {name}
          </Button>
        ) : (
          // @ts-expect-error there is a known bug with MUI types where a string can be used by TypeScript is not
          // able to parse the autmoatic type conversion
          <Button href={link} variant={buttonVariant}>
            {name}
          </Button>
        )
      )}
    </Box>
  );

  const leftNavbar = (
    <Box sx={defaultFlexRowStyles}>
        <Box component="img" src={logo} sx={imageStyles} />
        <Typography variant="h1" component="div">
          <Box component="span" sx={defaultEmphasisTextStyles}>
            PCS{" "}
          </Box>
          @ Berkeley
        </Typography>
      </Box>
  )

  return (
    <Box sx={navbarContainerStyles}>
      {leftNavbar}
      {desktopNavLinks}
      {mobileNavLinks}
    </Box>
  );
};

export default Navbar;
