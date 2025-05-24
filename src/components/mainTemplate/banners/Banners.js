"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../banners/banners.css");
const Banners = ({ bannerData }) => {
    if (!bannerData || bannerData.length === 0)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", { className: "banners", children: bannerData.map((banner, index) => ((0, jsx_runtime_1.jsx)("a", { href: banner.link, className: "banner", children: banner.text }, index))) }));
};
exports.default = Banners;
