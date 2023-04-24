import { useState } from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskForm';
import TodoListDisplay from './components/TodoListDisplay';

function App() {
  
  const [ todoList, setTodoList ] = useState([]); // here we are displaying an array of data
  
  return (
    <div className="App">
      <h3 className='my-4'>CORE Assignment #10: Todo List</h3>
      <NewTaskForm todoList={todoList} setTodoList={setTodoList} />
      <TodoListDisplay todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
