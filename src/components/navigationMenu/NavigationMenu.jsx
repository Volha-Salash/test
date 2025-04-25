import React, { useState } from 'react';
import { Menu as MuiMenu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './navigationMenu.css';
import _ from 'lodash';


const NavigationMenu = ( props ) => {
    const { menuItems } = props;
    const [menuAnchor, setMenuAnchor] = useState(null);
  
    const openMenu = (event) => {
      setMenuAnchor(event.currentTarget);
    };
  
    const closeMenu = () => {
      setMenuAnchor(null);
    };

    if(_.isNil(menuItems)) return;
    return (
      <div className="nav">
        <div className="container">
          <nav className="nav_menu" aria-label="Main Navigation">
            {/* Кнопка для открытия меню */}
            <Button
              className="nav_menu_btn"
              onClick={openMenu}
              aria-haspopup="true"
              aria-expanded={Boolean(menuAnchor)}
              aria-controls="navigation_menu"
              title='Menu'
            >
              <MenuIcon color='info'></MenuIcon>
            </Button>
            <div className='nav_menu_title'>Menu</div>
            {/* Горизонтальное выпадающее меню */}
            <MuiMenu
              id="navigation_menu"
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={closeMenu}
              className="nav_menu_dropdown"
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <ul className="nav_menu-list">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <MenuItem
                      onClick={closeMenu}
                      className="nav_menu-item"
                      role="button"
                    >
                      {item}
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