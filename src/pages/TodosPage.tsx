import React, { useState, useEffect } from 'react'

import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

import { ITodo } from '../interfaces'

declare var confirm: (quastion: string | undefined) => boolean

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]')
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title: title,
      completed: false,
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }),
    )
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    const answer = confirm('Do you really want to delete the task?')
    if (answer) {
      setTodos(todos.filter((todo) => todo.id !== id))
    }
  }

  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler} />

      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
    </React.Fragment>
  )
}

export default TodosPage
