import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import LeftMenu from "./leftMenu/LeftMenu";
import Content from "./content/Content";
import Banners from "./banners/Banners";
import { randomTextGenerator } from "../../consts/consts";
import "./mainTemplate.css";
const MainTemplate = (props) => {
    const { menuItems, bannerData, titles } = props;
    const [activeTab, setActiveTab] = useState(0);
    if (!menuItems || !bannerData || !titles)
        return null;
    return (_jsxs("div", { className: "main_template", children: [_jsx(LeftMenu, { menuItems: menuItems, activeTab: activeTab, handleChange: setActiveTab }), _jsx(Content, { titles: titles, activeTab: activeTab, randomTextGenerator: randomTextGenerator }), _jsx(Banners, { bannerData: bannerData })] }));
};
export default MainTemplate;
