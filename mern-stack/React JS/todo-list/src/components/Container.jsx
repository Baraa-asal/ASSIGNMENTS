import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Container = () => {
    const [todoList, setTodoList] = useState([])
  return (
    <div>
        <TodoForm/>
    </div>
  )
}

export default Container