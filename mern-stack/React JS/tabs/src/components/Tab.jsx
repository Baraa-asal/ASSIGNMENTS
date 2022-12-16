import React from "react";

const Tab = (props) => {
  const handleTab = () => {
    props.tabWasClicked(props.index);
  };
  return (
    <button className={`button-89 ${props.isSelected ? "selected" : ""}`} onClick={handleTab}>
      <span>{props.title}</span>
    </button>
  );
};

export default Tab;
