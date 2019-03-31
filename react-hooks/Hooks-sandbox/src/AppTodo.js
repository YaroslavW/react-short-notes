import React, { useState } from 'react'
import './AppTodo.css'

function TodoForm({ addTodos }) {
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodos(value)
    setValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="input"
        onChange={e => setValue(e.target.value)}
        placeholder="What do you want to accomplish?"
      />
    </form>
  )
}

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>x</button>
    </div>
  )
}

function AppTodo() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Understand the Logic',
      isCompleted: false
    },
    {
      text: 'Be the best',
      isCompleted: false
    }
  ])
  const addTodos = text => {
    const NewTodos = [...todos, { text }]
    setTodos(NewTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }
  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodos={addTodos} />
      </div>
    </div>
  )
}
export default AppTodo
