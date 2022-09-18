import React from 'react'

export default function TodoItem(props) {
  // console.log(props)
  return (
    <div style={
      {
        backgroundColor: 'rgb(248,249,250)',
        margin : '12px 0',
        padding : '12px',
        borderRadius : '4px',
        border : '1px solid silver'
      }
    }>
      {/* <p>todo no. {props.todo.sno}</p> */}
      <h2 style = {{fontSize:'1.25rem', fontWeight:'normal'}}>{props.todo.title}</h2>
      <p>{props.todo.desc}</p>
      <button className="btn btn-danger btn-sm" style={{display : 'block', marginLeft : 'auto'}} onClick={() => { props.deleteTodo(props.todo) }}>Delete</button>
    </div>
  )
}
