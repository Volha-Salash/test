import React, { useState } from 'react';
import LeftMenu from './leftMenu/LeftMenu';
import Content from './content/Content';
import Banners from './banners/Banners';
import { randomTextGenerator } from '../../consts/consts';
import PropTypes from 'prop-types';
import './mainTemplate.css';

const MainTemplate = ({ menuItems, bannerData, titles }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!menuItems || !bannerData || !titles) return null;
  return (
    <div className="main_template">
      <LeftMenu
        menuItems={menuItems}
        activeTab={activeTab}
        handleChange={setActiveTab}
      />
      <Content
        titles={titles}
        activeTab={activeTab}
        randomTextGenerator={randomTextGenerator}
      />
      <Banners bannerData={bannerData} />
    </div>
  );
};

MainTemplate.propTypes = {
  menuItems: PropTypes.array.isRequired,
  bannerData: PropTypes.array.isRequired,
  titles: PropTypes.array.isRequired,
};

export default MainTemplate;
