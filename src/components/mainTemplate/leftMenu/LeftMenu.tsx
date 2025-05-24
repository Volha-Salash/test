import "./leftMenu.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

interface LeftMenuProps {
  menuItems: string[];
  activeTab: number;
  handleChange: (index: number) => void;
}

const LeftMenu = (props : LeftMenuProps) => {
  const { menuItems, activeTab, handleChange } = props;
  const { selectedNavItem } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    handleChange(0);
  }, [selectedNavItem]);

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
