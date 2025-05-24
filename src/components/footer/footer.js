import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./footer.css";
import { BtnGitHub, BtnTelegram, BtnLinkdin } from "../../consts/consts";
const Footer = () => {
    return (_jsx("footer", { className: "footer", children: _jsx("div", { className: "container", children: _jsx("div", { className: "footer__wrapper", children: _jsxs("ul", { className: "social", children: [_jsx("li", { className: "social__item", children: _jsx(BtnLinkdin, { link: "https://www.linkedin.com/in/volha-salash" }) }), _jsx("li", { className: "social__item", children: _jsx(BtnTelegram, { link: "https://t.me/Kursonechka" }) }), _jsx("li", { className: "social__item", children: _jsx(BtnGitHub, { link: "https://github.com/Volha-Salash" }) })] }) }) }) }));
};
export default Footer;
