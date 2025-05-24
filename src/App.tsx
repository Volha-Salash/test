import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/slices/productsSlice";
import { RootState, AppDispatch } from "./redux/store";
import Header from "./components/header/Header";
import NavigationMenu from "./components/navigationMenu/NavigationMenu";
import MainTemplate from "components/mainTemplate/mainTemplate";
import Footer from "components/footer/footer";
import { colors } from "./consts/types";
import { NavItem, Product } from "./consts/types";

function App(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error, selectedNavItem } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const getNavItems = (products: Product[], colors: string[]): NavItem[] => {
    return [...new Set(
      products
        .filter((product) => product.category && product.brand)
        .map((product) => product.category)
    )]
      .filter((category): category is string => !!category.trim())
      .map((category, index) => ({
        name: category,
        newColor: colors[index],
      }));
  };

  return (
    <div className="App">
      <Header />
      <NavigationMenu navItems={getNavItems(products, colors)} />
      <MainTemplate
        selectedNavItem={selectedNavItem}
        products={products}
      />
      <Footer />
    </div>
  );
}

export default App;
