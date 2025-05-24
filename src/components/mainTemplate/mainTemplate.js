"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const LeftMenu_1 = __importDefault(require("./leftMenu/LeftMenu"));
const Content_1 = __importDefault(require("./content/Content"));
const Banners_1 = __importDefault(require("./banners/Banners"));
const consts_1 = require("../../consts/consts");
require("./mainTemplate.css");
const MainTemplate = ({ menuItems, bannerData, titles }) => {
    const [activeTab, setActiveTab] = (0, react_1.useState)(0);
    if (!menuItems || !bannerData || !titles)
        return null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "main_template", children: [(0, jsx_runtime_1.jsx)(LeftMenu_1.default, { menuItems: menuItems, activeTab: activeTab, handleChange: setActiveTab }), (0, jsx_runtime_1.jsx)(Content_1.default, { titles: titles, activeTab: activeTab, randomTextGenerator: consts_1.randomTextGenerator }), (0, jsx_runtime_1.jsx)(Banners_1.default, { bannerData: bannerData })] }));
};
exports.default = MainTemplate;
