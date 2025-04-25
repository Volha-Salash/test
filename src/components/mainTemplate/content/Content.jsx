import React from "react";
import PropTypes from "prop-types";
import '../content/content.css';
import { randomTextGenerator } from "../../../consts/consts";

const Content = (props) => {
  const { titles, activeTab } = props;

  if (!titles) return null;
  return (
    <div className="content_menu">
      <h2>{titles[activeTab]}</h2>
      <p>{randomTextGenerator()}</p>
    </div>
  );
};

Content.propTypes = {
  titles: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired
};

export default Content;