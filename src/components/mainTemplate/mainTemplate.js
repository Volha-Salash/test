import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import LeftMenu from "./leftMenu/LeftMenu";
import Content from "./content/Content";
import Banners from "./banners/Banners";
import { randomTextGenerator } from "../../consts/consts";
import { useSelector } from "react-redux";
import "./mainTemplate.css";
const MainTemplate = (props) => {
    const { products, selectedNavItem } = props;
    const [activeTab, setActiveTab] = useState(0);
    const [bannerData, setBannerData] = useState([]);
    const { cachedImages } = useSelector((state) => state.products);
    const menuItems = Array.from(new Set(products
        .filter(({ category }) => category === (selectedNavItem || "beauty"))
        .map(({ brand }) => brand)
        .filter((brand) => !!(brand === null || brand === void 0 ? void 0 : brand.trim()))));
    useEffect(() => {
        if (!products.length)
            return;
        const filteredBanners = products
            .filter((product) => !selectedNavItem || product.category === selectedNavItem)
            .slice(0, 5)
            .map((product) => {
            var _a;
            return ({
                text: product.description,
                link: "#!",
                image: (_a = cachedImages === null || cachedImages === void 0 ? void 0 : cachedImages[product.id]) !== null && _a !== void 0 ? _a : ""
            });
        })
            .filter((banner) => !!banner.text.trim() && !!banner.image.trim());
        setBannerData(filteredBanners);
    }, [selectedNavItem, products, cachedImages]);
    const titles = products
        .filter((product) => product.brand && !selectedNavItem || product.category === selectedNavItem)
        .sort((a, b) => a.brand.localeCompare(b.brand))
        .slice(0, 5)
        .map((product) => product.title)
        .filter((title) => !!title.trim());
    if (!cachedImages || (!menuItems.length && !bannerData.length))
        return null;
    return (_jsxs("div", { className: "main_template", children: [_jsx(LeftMenu, { menuItems: menuItems, activeTab: activeTab, handleChange: setActiveTab }), _jsx(Content, { titles: titles, activeTab: activeTab, randomTextGenerator: randomTextGenerator }), _jsx(Banners, { bannerData: bannerData })] }));
};
export default MainTemplate;
