import { jsx as _jsx } from "react/jsx-runtime";
import "../banners/banners.css";
const Banners = (props) => {
    const { bannerData } = props;
    if (!bannerData || bannerData.length === 0)
        return null;
    return (_jsx("div", { className: "banners", children: bannerData.map((banner, index) => (_jsx("a", { href: banner.link, className: "banner", children: _jsx("img", { src: banner.image, alt: banner.text, className: "banner-image" }) }, index))) }));
};
export default Banners;
