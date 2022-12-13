import React from "react";
import Tab from "./Tab";

const TabsContainer = (props) => {
  let counter = -1;
  return (
    <div>
      {props.tabsTitles.map((element) => {
        counter++;
        return (
          <Tab
            key={counter}
            title={element}
            index={counter}
            changeContent={props.changeContent}
          ></Tab>
        );
      })}
    </div>
  );
};

export default TabsContainer;
