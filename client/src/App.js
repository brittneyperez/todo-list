import React, { useState, useEffect } from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskForm';
import TodoListDisplay from './components/TodoListDisplay';

function App() {
  const [ todoList, setTodoList ] = useState([]); // here we are displaying an array of data
  
  // * Sensei Bonus: Persist the todos list on page refreshes.
  // const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"));
  // useEffect(() => {
  //   if (tasksLocalStorage === null) {
  //     setTodoList([]);
  //   } else {
  //     setTodoList(tasksLocalStorage);
  //   }
  // }, []);
  
  return (
    <div className="App" style={{background: 'linear-gradient(to left top, #f0f8ff, #e6e6fa)', height:"100vh"}}>
      <h3 className='pt-4'>CORE Assignment #10: Todo List</h3>
      <NewTaskForm todoList={todoList} setTodoList={setTodoList} />
      <TodoListDisplay todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
