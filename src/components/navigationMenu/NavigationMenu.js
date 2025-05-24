"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
require("./navigationMenu.css");
const NavigationMenu = ({ navItems }) => {
    const [navItem, setNavItem] = (0, react_1.useState)(null);
    const openPopup = (event) => {
        setNavItem(event.currentTarget);
    };
    const closePopup = () => {
        setNavItem(null);
    };
    const handleClick = (item) => {
        document.documentElement.style.setProperty("--bg-color", item.newColor);
        closePopup();
    };
    if (!navItems || navItems.length === 0)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", { className: "nav", children: (0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)("nav", { className: "nav_menu", "aria-label": "Menu Navigation", children: [(0, jsx_runtime_1.jsx)(material_1.Button, { className: "nav_menu_btn", onClick: openPopup, "aria-haspopup": "true", "aria-expanded": Boolean(navItem), "aria-controls": "navigation_menu", title: "Menu", children: (0, jsx_runtime_1.jsx)(Menu_1.default, { color: "action" }) }), (0, jsx_runtime_1.jsx)("h2", { children: "Menu" }), (0, jsx_runtime_1.jsx)(material_1.Menu, { id: "navigation_menu", anchorEl: navItem, open: Boolean(navItem), onClose: closePopup, className: "nav_menu_dropdown", children: (0, jsx_runtime_1.jsx)("ul", { className: "nav_menu-list", children: navItems.map((item, index) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(material_1.MenuItem, { onClick: () => handleClick(item), className: "nav_menu-item", role: "button", children: item.name }) }, index))) }) })] }) }) }));
};
exports.default = NavigationMenu;
