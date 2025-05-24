import React from "react";
import "./leftMenu.css";

interface LeftMenuProps {
  menuItems: string[];
  activeTab: number;
  handleChange: (index: number) => void;
}

const LeftMenu = (props : LeftMenuProps) => {
  const { menuItems, activeTab, handleChange } = props;
  if (!menuItems || menuItems.length === 0 || !handleChange) return null;

  return (
    <div className="menu">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className={`tab ${activeTab === index ? "active" : ""}`}
          onClick={() => handleChange(index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default LeftMenu;
