import { jsx as _jsx } from "react/jsx-runtime";
import "./leftMenu.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const LeftMenu = (props) => {
    const { menuItems, activeTab, handleChange } = props;
    const { selectedNavItem } = useSelector((state) => state.products);
    useEffect(() => {
        handleChange(0);
    }, [selectedNavItem]);
    if (!menuItems || menuItems.length === 0 || !handleChange)
        return null;
    return (_jsx("div", { className: "menu", children: menuItems.map((item, index) => (_jsx("button", { className: `tab ${activeTab === index ? "active" : ""}`, onClick: () => handleChange(index), children: item }, index))) }));
};
export default LeftMenu;
