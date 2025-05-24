"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
require("../content/content.css");
const consts_1 = require("../../../consts/consts");
const Content = (props) => {
    const { titles, activeTab } = props;
    if (!titles)
        return null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "content_menu", children: [(0, jsx_runtime_1.jsx)("h2", { children: titles[activeTab] }), (0, jsx_runtime_1.jsx)("p", { children: (0, consts_1.randomTextGenerator)() })] }));
};
Content.propTypes = {
    titles: prop_types_1.default.array.isRequired,
    activeTab: prop_types_1.default.number.isRequired
};
exports.default = Content;
