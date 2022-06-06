import React from 'react'
import { useState } from "react";

function Form({ todos, setTodos, todo }) {
  const [form, setForm] = useState('')
  const onChangeForm = (e) => { setForm(e.target.value) }

  const onSubmitTodo = (e) => {
    e.preventDefault();
    if (form === "") {
      alert("Area is Empty!")
      return false
    }
    setTodos([...todos, { text: form, completed: false, id: Math.random() * 1000 },]);
    setForm('')
  }
  return (
    <div>
      <header className='header'>
        <h1>todos</h1>
        <form >
          <input className='new-todo' value={form} placeholder="What needs to be done?" autoFocus
            onChange={onChangeForm} />
          <button className='addButton' onClick={onSubmitTodo}>Add Task</button>
        </form>
      </header>
    </div>
  )
}
export default Form;