import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/slices/productsSlice";
import { RootState, AppDispatch } from "./redux/store";
import Header from "./components/header/Header";
import NavigationMenu from "./components/navigationMenu/NavigationMenu";
import MainTemplate from "components/mainTemplate/mainTemplate";
import Footer from "components/footer/footer";
import { colors } from "./consts/types";
import { ProductsResponse, NavItem, BannerItem, Product } from "./consts/types";

function App(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Ошибка загрузки данных: {error}</div>;

  const navItems: NavItem[] = [...new Set(
    products.map((product: { category: string; }) => product.category as string)
  )]
    .filter((category): category is string => !!category)
    .map((category, index) => ({
      name: category,
      newColor: colors[index % colors.length],
    }));
  

    const menuItems: string[] = Array.from(new Set(
      products
        .map((product: Product) => product.brand)
        .filter((brand: string): brand is string => !!brand && brand.trim() !== "")
    ));
    
  

  const bannerData: BannerItem[] = products
  .map((product: Product) => ({
    text: product.description,
    link: "#!",
    image: product.images?.[0] ?? ""
  }))
  .filter((banner: BannerItem): banner is BannerItem =>
    !!banner.text.trim() && !!banner.image.trim()
  );

  
  return (
    <div className="App">
      <Header />
      <NavigationMenu navItems={navItems} />
      <MainTemplate 
        menuItems={menuItems} 
        bannerData={bannerData} 
        titles={[]}
      />
      <Footer />
    </div>
  );
}

export default App;
