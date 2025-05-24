import { jsx as _jsx } from "react/jsx-runtime";
import './header.css';
function Header() {
    return (_jsx("header", { className: "header", children: _jsx("div", { className: "container", children: _jsx("div", { className: "header__row", children: "Header" }) }) }));
}
export default Header;
