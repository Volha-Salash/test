import React, { useState } from "react";
import { Menu as MuiMenu, MenuItem, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./navigationMenu.css";
import { NavItem } from "../../consts/types";

interface NavigationMenuProps {
  navItems: NavItem[];
}

const NavigationMenu = (props: NavigationMenuProps) => {
  const { navItems } = props;
  const [navItem, setNavItem] = useState<HTMLElement | null>(null);

  const openPopup = (event: React.MouseEvent<HTMLButtonElement>) => {
    setNavItem(event.currentTarget);
  };

  const closePopup = () => {
    setNavItem(null);
  };

  const handleClick = (item: NavItem) => {
    document.documentElement.style.setProperty("--bg-color", item.newColor);
    closePopup();
  };

  if (!navItems || navItems.length === 0) return null;

  return (
    <div className="nav">
      <div className="container">
        <nav className="nav_menu" aria-label="Menu Navigation">
          <Button
            className="nav_menu_btn"
            onClick={openPopup}
            aria-haspopup="true"
            aria-expanded={Boolean(navItem)}
            aria-controls="navigation_menu"
            title="Menu"
          >
            <MenuIcon color="action" />
          </Button>
          <h2>Menu</h2>
          <MuiMenu
            id="navigation_menu"
            anchorEl={navItem}
            open={Boolean(navItem)}
            onClose={closePopup}
            className="nav_menu_dropdown"
          >
            <ul className="nav_menu-list">
              {navItems.map((item, index) => (
                <li key={index}>
                  <MenuItem
                    onClick={() => handleClick(item)}
                    className="nav_menu-item"
                    role="button"
                  >
                    {item.name}
                  </MenuItem>
                </li>
              ))}
            </ul>
          </MuiMenu>
        </nav>
      </div>
    </div>
  );
};

export default NavigationMenu;
