"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./footer.css");
const consts_1 = require("../../consts/consts");
const Footer = () => {
    return ((0, jsx_runtime_1.jsx)("footer", { className: "footer", children: (0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsx)("div", { className: "footer__wrapper", children: (0, jsx_runtime_1.jsxs)("ul", { className: "social", children: [(0, jsx_runtime_1.jsx)("li", { className: "social__item", children: (0, jsx_runtime_1.jsx)(consts_1.BtnLinkdin, { link: "https://www.linkedin.com/in/volha-salash" }) }), (0, jsx_runtime_1.jsx)("li", { className: "social__item", children: (0, jsx_runtime_1.jsx)(consts_1.BtnTelegram, { link: "https://t.me/Kursonechka" }) }), (0, jsx_runtime_1.jsx)("li", { className: "social__item", children: (0, jsx_runtime_1.jsx)(consts_1.BtnGitHub, { link: "https://github.com/Volha-Salash" }) })] }) }) }) }));
};
exports.default = Footer;
