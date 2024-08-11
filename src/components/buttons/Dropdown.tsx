import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropdownProps } from "../../utils/interfaces/props";
import { Box, Button, Menu, MenuItem, SxProps } from "@mui/material";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Dropdown = ({
  dropdownName,
  dropdownItems,
  selectSetter,
  selectedItem,
}: DropdownProps) => {
  /**
   * Styles
   */
  // Styles for the button itself
  const buttonStyles: SxProps = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "3.5rem",
    py: "0.75rem",
    px: "1.25rem",
    width: "100%",
    backgroundColor: "#EEEEEE",
  };

  const menuItemStyles: SxProps = {
    width: "100%",
    py: "0.75rem"
  };

  const menuStyles: SxProps = {
    transform: "translate(0px, 3rem)"
  }

  const containerStyles: SxProps = {
    width: {
        md: "auto",
        xs: "100%"
    }
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const items = [dropdownName];

  return (
    <Box sx={containerStyles}>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={buttonStyles}
      >
        <span>{selectedItem ? selectedItem : dropdownName}</span>
        <FontAwesomeIcon icon={faCaretDown} />
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
        sx={menuStyles}
      >
        {items.concat(dropdownItems).map((item) => (
          <MenuItem
            sx={menuItemStyles}
            onClick={() => {
              selectSetter(item);
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Dropdown;
