"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./leftMenu.css");
const LeftMenu = ({ menuItems, activeTab, handleChange }) => {
    if (!menuItems || menuItems.length === 0 || !handleChange)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", { className: "menu", children: menuItems.map((item, index) => ((0, jsx_runtime_1.jsx)("button", { className: `tab ${activeTab === index ? "active" : ""}`, onClick: () => handleChange(index), children: item }, index))) }));
};
exports.default = LeftMenu;
