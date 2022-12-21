import React, { useState } from "react";

const TodoForm = () => {
  const [todoInput, setTodoInput] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setTodoInput(e.target.value)}
        type="text"
        placeholder="insert a todo"
        value={todoInput}
      />
      <button>Add</button>
    </div>
  );
};

export default TodoForm;
