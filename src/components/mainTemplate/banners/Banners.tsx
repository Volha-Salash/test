import React, { useState } from "react";
import { BannerItem } from "../../../consts/types";
import "../banners/banners.css";

interface BannersProps {
  bannerData: BannerItem[];
}

const Banners = (props: BannersProps) => {
  const { bannerData } = props;
  const [loadedImages, setLoadedImages] = useState<number>(0);

  if (!bannerData || bannerData.length === 0) return null;

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  return (
    <div className="banners">
      {bannerData.map((banner, index) => (
        <a key={index} href={banner.link} className="banner">
          <img
            src={banner.image}
            alt={banner.text}
            className="banner-image"
            onLoad={handleImageLoad}
            style={{
              opacity: loadedImages >= index + 1 ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
            loading="lazy"
          />
        </a>
      ))}
      {loadedImages < bannerData.length && <div className="loading">Loading...</div>}
    </div>
  );
};

export default Banners;
