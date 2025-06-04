import React, { useEffect, useState } from "react";
import LeftMenu from "./leftMenu/LeftMenu";
import Content from "./content/Content";
import Banners from "./banners/Banners";
import { randomTextGenerator } from "../../consts/consts";
import { Product, BannerItem } from "consts/types";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import "./mainTemplate.css";

interface MainTemplateProps {
  selectedNavItem: string,
  products: Product[]
}

const MainTemplate = (props: MainTemplateProps) => {
  const { products, selectedNavItem } = props;
  const [activeTab, setActiveTab] = useState<number>(0);
  const [bannerData, setBannerData] = useState<BannerItem[]>([]);
  const { cachedImages } = useSelector((state: RootState) => state.products);

  const menuItems: string[] = Array.from(
    new Set(
      products
        .filter(({ category }) => category === (selectedNavItem || "beauty"))
        .map(({ brand }) => brand)
        .filter((brand): brand is string => !!brand?.trim())
    )
  );

      useEffect(() => {
        if (!products.length) return; 
      
        const filteredBanners: BannerItem[] = products
          .filter((product) => !selectedNavItem || product.category === selectedNavItem) 
          .slice(0, 5) 
          .map((product) => ({
            text: product.description,
            link: "#!",
            image: cachedImages?.[product.id] ?? ""
          }))
          .filter((banner): banner is BannerItem =>
            !!banner.text.trim() && !!banner.image.trim()
          );
      
        setBannerData(filteredBanners);
      }, [selectedNavItem, products, cachedImages]);
      
      
      

      const titles: string[] = products
      .filter((product) => product.brand && !selectedNavItem || product.category === selectedNavItem)
      .sort((a, b) => a.brand.localeCompare(b.brand))
      .slice(0, 5)
      .map((product) => product.title)
      .filter((title): title is string => !!title.trim());

  if (!cachedImages || (!menuItems.length && !bannerData.length)) return null;

  return (
    <div className="main_template">
      <LeftMenu menuItems={menuItems} activeTab={activeTab} handleChange={setActiveTab} />
      <Content titles={titles} activeTab={activeTab} randomTextGenerator={randomTextGenerator} />
      <Banners bannerData={bannerData} />
    </div>
  );
};

export default MainTemplate;

