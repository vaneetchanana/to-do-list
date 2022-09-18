import './App.css';
import Navbar from './Navbar';
import Todos from './Todos';
import Footer from './Footer';
import AddTodo from './AddTodo';
import { useState, useEffect } from 'react';

function App() {

  let initTodos;
  if (localStorage.getItem('todos') === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem('todos'))
  }

  const [todos, setTodos] = useState(initTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  function deleteTodo(todo) {
    setTodos(todos.filter((element) => {
      return element !== todo;
    }))

    // localStorage.setItem('todos', JSON.stringify(todos))
  }

  function addTodo(title, desc) {
    setTodos([...todos, {
      sno: todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1,
      title: title,
      desc: desc
    }])

    // localStorage.setItem('todos', JSON.stringify(todos));
  }


  return (
    <div style={{display : 'flex', flexDirection : 'column', height : '100vh'}}>
      <Navbar title="To-Do List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <Footer />
    </div>
  );
}

export default App;
