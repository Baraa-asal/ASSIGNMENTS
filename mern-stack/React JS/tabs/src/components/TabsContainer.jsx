import React from "react";
import Tab from "./Tab";

const TabsContainer = (props) => {
  return (
    <div className="tabContainer">
      {/* the callback of map function takes two parameters, the element and index, the index is optional to use */}
      {props.tabsTitles.map((element, i) => {
        return (
          <Tab
            key={element.replace(" ", "-")} //not recommended to use the index as keys
            title={element}
            index={i}
            tabWasClicked={props.tabWasClicked}
            isSelected={props.selectedTab === i}
          />
        );
      })}
    </div>
  );
};

export default TabsContainer;
