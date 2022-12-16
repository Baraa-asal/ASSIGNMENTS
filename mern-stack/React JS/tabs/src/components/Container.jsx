import React from "react";
import TabsContainer from "./TabsContainer";
import View from "./View";
import { useState } from "react";

const tabsData = [
  {
    title: "Tab 1",
    content:
      "TAB 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tempora recusandae mollitia et quam esse, cumque expedita repudiandae vero perspiciatis!",
  },
  {
    title: "Tab 2",
    content:
      "TAB 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tempora recusandae mollitia et quam esse, cumque expedita repudiandae vero perspiciatis!",
  },
  {
    title: "Tab 3",
    content:
      "I am coming from tab 4 to tell you that Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tempora recusandae mollitia et quam esse, cumque expedita repudiandae vero perspiciatis!",
  },
];

const Container = (props) => {
  const [index, setIndex] = useState(0);

  const tabWasClicked = (index) => {
    setIndex(index);
  };

  return (
    <div className="container">
      <TabsContainer
        tabsTitles={tabsData.map((data) => data.title)}
        tabWasClicked={tabWasClicked}
        selectedTab={index}
      ></TabsContainer>

      <View content={tabsData[index].content}></View>
    </div>
  );
};

export default Container;
