import './App.css'
import todos from './assets/components/data/todos'
import TodoList from './assets/components/todoList/TodoList';

function App() {
  console.log(todos);
  return (
    <>
      <TodoList list={todos}/>
    </>
  )
}

export default App
