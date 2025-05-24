import React from "react";
import "../banners/banners.css";
import { BannerItem } from "../../../db/db";

interface BannersProps {
  bannerData: BannerItem[];
}

const Banners = (props : BannersProps) => {
    const { bannerData } = props;
  if (!bannerData || bannerData.length === 0) return null;

  return (
    <div className="banners">
      {bannerData.map((banner, index) => (
        <a key={index} href={banner.link} className="banner">
          {banner.text}
        </a>
      ))}
    </div>
  );
};

export default Banners;
