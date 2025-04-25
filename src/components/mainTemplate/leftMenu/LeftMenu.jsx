import './leftMenu.css';
import PropTypes from 'prop-types';

const LeftMenu = (props) => {
  const { menuItems, activeTab, handleChange } = props;

  if (!menuItems || !handleChange) return null;
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

LeftMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LeftMenu;
