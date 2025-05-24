"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Header_1 = __importDefault(require("./components/header/Header"));
const NavigationMenu_1 = __importDefault(require("./components/navigationMenu/NavigationMenu"));
const footer_1 = __importDefault(require("./components/footer/footer"));
const mainTemplate_1 = __importDefault(require("./components/mainTemplate/mainTemplate"));
const db_1 = require("./db/db");
function App() {
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [data, setData] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const timer = setTimeout(() => {
            setData(db_1.db);
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    if (loading) {
        return (0, jsx_runtime_1.jsx)("div", { className: "loading", children: "Loading..." });
    }
    if (!data)
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    return ((0, jsx_runtime_1.jsxs)("div", { className: "App", children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(NavigationMenu_1.default, { navItems: data.navItems }), (0, jsx_runtime_1.jsx)(mainTemplate_1.default, Object.assign({}, data)), (0, jsx_runtime_1.jsx)(footer_1.default, {})] }));
}
exports.default = App;
