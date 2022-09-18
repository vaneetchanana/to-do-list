import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  // console.log(props.todos)
  return (
    <div className='container' style={{
      maxWidth : '560px',
      padding : '12px'
  }}>
      {props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.sno} deleteTodo = {props.deleteTodo} />
      })}
    </div>
  )
}
