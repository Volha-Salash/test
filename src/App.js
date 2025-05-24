import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/slices/productsSlice";
import Header from "./components/header/Header";
import NavigationMenu from "./components/navigationMenu/NavigationMenu";
import MainTemplate from "components/mainTemplate/mainTemplate";
import Footer from "components/footer/footer";
import { colors } from "./consts/types";
function App() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    if (loading)
        return _jsx("div", { className: "loading", children: "Loading..." });
    if (error)
        return _jsxs("div", { className: "error", children: ["\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445: ", error] });
    const navItems = [...new Set(products.map((product) => product.category))]
        .filter((category) => !!category)
        .map((category, index) => ({
        name: category,
        newColor: colors[index % colors.length],
    }));
    const menuItems = Array.from(new Set(products
        .map((product) => product.brand)
        .filter((brand) => !!brand && brand.trim() !== "")));
    const bannerData = products
        .map((product) => {
        var _a, _b;
        return ({
            text: product.description,
            link: "#!",
            image: (_b = (_a = product.images) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : ""
        });
    })
        .filter((banner) => !!banner.text.trim() && !!banner.image.trim());
    return (_jsxs("div", { className: "App", children: [_jsx(Header, {}), _jsx(NavigationMenu, { navItems: navItems }), _jsx(MainTemplate, { menuItems: menuItems, bannerData: bannerData, titles: [] }), _jsx(Footer, {})] }));
}
export default App;
