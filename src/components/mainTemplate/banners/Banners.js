import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "../banners/banners.css";
const Banners = (props) => {
    const { bannerData } = props;
    const [loadedImages, setLoadedImages] = useState(0);
    if (!bannerData || bannerData.length === 0)
        return null;
    const handleImageLoad = () => {
        setLoadedImages((prev) => prev + 1);
    };
    return (_jsxs("div", { className: "banners", children: [bannerData.map((banner, index) => (_jsx("a", { href: banner.link, className: "banner", children: _jsx("img", { src: banner.image, alt: banner.text, className: "banner-image", onLoad: handleImageLoad, style: {
                        opacity: loadedImages >= index + 1 ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                    }, loading: "lazy" }) }, index))), loadedImages < bannerData.length && _jsx("div", { className: "loading", children: "Loading..." })] }));
};
export default Banners;
