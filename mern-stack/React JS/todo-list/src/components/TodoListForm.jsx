import React from "react";
import { useState } from "react";
const TodoListForm = (props) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(inputText);
    setInputText("");
  };

  return (
    <div style={{fontFamily: 'courier'}} className="bg-light mb-3 p-4 rounded">
      <h3>Add a Task:</h3>
      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'space-between', minHeight: 100}} className="row p-2" onSubmit={(e) => handleSubmit(e)}>
        <input
        style={{width: 300, height: 40}}
          className="col-md-5 rounded"
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <button style={{ color: "white"}} className="col-md-1 bg-success btn">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default TodoListForm;
