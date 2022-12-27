import React from "react";

const IsDone = (props) => {
  if (props.todoItem.complete) {
    return <s>{props.todoItem.task}</s>;
  } else {
    return <span>{props.todoItem.task}</span>;
  }
};

export default IsDone;
