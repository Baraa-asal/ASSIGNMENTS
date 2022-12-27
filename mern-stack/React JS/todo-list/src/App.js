import './App.css';
import React, { useState } from 'react';
import TodoListForm from './components/TodoListForm';
import TodoListTable from './components/TodoListTable';

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      task: "Study Python",
      complete: false
    },
    {
      task: "Watch Sunset",
      complete: true
    },
    {
      task: "Visit Mom",
      complete: false
    }
  ])

  // //// CREATE ///////////////////////////////////////////////////
  const addTask = (newTask) => {
    let newTodoList = [...todoList];
    newTodoList.push({
        task: newTask,
        complete: false
      }
    );
    setTodoList(newTodoList);
  }

  // //// UPDATE ///////////////////////////////////////////////////

  const handleCompleteChecked = (targetIdx, targetComplete) => {
    const newTodoList = [...todoList];
    newTodoList[targetIdx].complete = targetComplete;
    setTodoList(newTodoList);
  }

  // //// DELETE ///////////////////////////////////////////////////

  const deleteTask = (targetIdx) => {
    const filteredTodoList = todoList.filter ( (taskItem, idx) => idx !== targetIdx );
    setTodoList(filteredTodoList);
  }

  // //// OUTPUT ///////////////////////////////////////////////////
  return (
    <div className="App">
      <TodoListForm addTask={ addTask } />
      <TodoListTable  todoList={ todoList } 
                              handleCompleteChecked={ handleCompleteChecked }
                              deleteTask={ deleteTask } />
    </div >
  );
}

export default App;