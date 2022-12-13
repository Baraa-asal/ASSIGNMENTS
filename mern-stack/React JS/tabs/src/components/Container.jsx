import React from "react";
import TabsContainer from "./TabsContainer";
import View from "./View";
import { useState } from "react";
const tabsData = [
  { title: "Tab 1", content: "THIS IS TAB 1" },
  { title: "Tab 2", content: "THIS IS TAB 2" },
  { title: "Tab 3", content: "THIS IS TAB 3" },
];

const Container = (props) => {
  const [index, setIndex] = useState(0);

  const changeContent = (index) => {
    setIndex(index);
  };

  return (
    <div>
      <TabsContainer
        tabsTitles={tabsData.map((data) => data.title)}
        changeContent={changeContent}
      ></TabsContainer>

      <View content={tabsData[index].content}></View>
    </div>
  );
};

export default Container;
