import { jsx as _jsx } from "react/jsx-runtime";
import "./leftMenu.css";
const LeftMenu = (props) => {
    const { menuItems, activeTab, handleChange } = props;
    if (!menuItems || menuItems.length === 0 || !handleChange)
        return null;
    return (_jsx("div", { className: "menu", children: menuItems.map((item, index) => (_jsx("button", { className: `tab ${activeTab === index ? "active" : ""}`, onClick: () => handleChange(index), children: item }, index))) }));
};
export default LeftMenu;
