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
    const { products, loading, error, selectedNavItem } = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    if (loading)
        return _jsx("div", { className: "loading", children: "Loading..." });
    if (error)
        return _jsxs("div", { className: "error", children: ["Error: ", error] });
    const getNavItems = (products, colors) => {
        return [...new Set(products
                .filter((product) => product.category && product.brand)
                .map((product) => product.category))]
            .filter((category) => !!category.trim())
            .map((category, index) => ({
            name: category,
            newColor: colors[index],
        }));
    };
    return (_jsxs("div", { className: "App", children: [_jsx(Header, {}), _jsx(NavigationMenu, { navItems: getNavItems(products, colors) }), _jsx(MainTemplate, { selectedNavItem: selectedNavItem, products: products }), _jsx(Footer, {})] }));
}
export default App;
