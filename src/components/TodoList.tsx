import React from 'react'
import { ITodo } from '../interfaces'

interface ITodoListProps {
  todos: ITodo[]
  onToggle(id: number): void
  onRemove(event: React.MouseEvent, id: number): void
}

const TodoList: React.FC<ITodoListProps> = ({ todos, onToggle, onRemove }) => {
  if (!todos.length) {
    return <p className='center-align'>There are not any tasks</p>
  }

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li
            className={todo.completed ? 'todo completed' : 'todo'}
            key={todo.id}
          >
            <label>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className='material-icons red-text'
                onClick={(event) => onRemove(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList