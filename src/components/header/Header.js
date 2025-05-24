"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./header.css");
function Header() {
    return ((0, jsx_runtime_1.jsx)("header", { className: "header", children: (0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsx)("div", { className: "header__row", children: "Header" }) }) }));
}
exports.default = Header;
