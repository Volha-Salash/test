import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectNavItem } from "../../redux/slices/productsSlice";
import { Menu as MuiMenu, MenuItem, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./navigationMenu.css";
const NavigationMenu = (props) => {
    const { navItems } = props;
    const [navItem, setNavItem] = useState(null);
    const dispatch = useDispatch();
    const openPopup = (event) => {
        setNavItem(event.currentTarget);
    };
    const closePopup = () => {
        setNavItem(null);
    };
    const handleClick = (item) => {
        dispatch(selectNavItem(item.name));
        document.documentElement.style.setProperty("--bg-color", item.newColor);
        closePopup();
    };
    if (!navItems || navItems.length === 0)
        return null;
    return (_jsx("div", { className: "nav", children: _jsx("div", { className: "container", children: _jsxs("nav", { className: "nav_menu", "aria-label": "Menu Navigation", children: [_jsx(Button, { className: "nav_menu_btn", onClick: openPopup, "aria-haspopup": "true", "aria-expanded": Boolean(navItem), "aria-controls": "navigation_menu", title: "Menu", children: _jsx(MenuIcon, { color: "action" }) }), _jsx("h2", { children: "Menu" }), _jsx(MuiMenu, { id: "navigation_menu", anchorEl: navItem, open: Boolean(navItem), onClose: closePopup, className: "nav_menu_dropdown", children: _jsx("ul", { className: "nav_menu-list", children: navItems.map((item, index) => (_jsx("li", { children: _jsx(MenuItem, { onClick: () => handleClick(item), className: "nav_menu-item", role: "button", component: "div", children: item.name }) }, index))) }) })] }) }) }));
};
export default NavigationMenu;
