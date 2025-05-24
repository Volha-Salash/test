import React, { useState } from "react";
import LeftMenu from "./leftMenu/LeftMenu";
import Content from "./content/Content";
import Banners from "./banners/Banners";
import { randomTextGenerator } from "../../consts/consts";
import "./mainTemplate.css";

interface MainTemplateProps {
  menuItems: string[];
  bannerData: Array<{ text: string; link: string, image: string }>;
  titles: string[];
}

const MainTemplate = (props : MainTemplateProps) => {
  const { menuItems, bannerData, titles } = props;
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!menuItems || !bannerData || !titles) return null;

  return (
    <div className="main_template">
      <LeftMenu menuItems={menuItems} activeTab={activeTab} handleChange={setActiveTab} />
      <Content titles={titles} activeTab={activeTab} randomTextGenerator={randomTextGenerator} />
      <Banners bannerData={bannerData} />
    </div>
  );
};

export default MainTemplate;
