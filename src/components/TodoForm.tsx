import React, { useRef, useState } from 'react'

interface ITodoFormProps {
  onAdd(title: string): void
}

const TodoForm: React.FC<ITodoFormProps> = ({ onAdd }) => {
  const ref = useRef<HTMLInputElement>(null)

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (ref.current!.value === '') return

    if (e.key === 'Enter') {
      onAdd(ref.current!.value)
      ref.current!.value = ''
    }
  }

  return (
    <div className='input-field mt2'>
      <input ref={ref} id='title' type='text' onKeyPress={keyPressHandler} />
      <label htmlFor='title'>Enter task name</label>
    </div>
  )
}

export default TodoForm
