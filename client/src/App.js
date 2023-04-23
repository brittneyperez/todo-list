import './App.css';
import NewTaskForm from './components/NewTaskForm';
import TodoListDisplay from './components/TodoListDisplay';

function App() {
  
  return (
    <div className="App">
      <h1>Hello World</h1>
      <NewTaskForm />
      <TodoListDisplay />
    </div>
  );
}

export default App;
