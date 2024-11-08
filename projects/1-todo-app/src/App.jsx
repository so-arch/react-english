import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/10/2024",
      time:"07:00",
    },
    {
      name: "Go to College",
      dueDate: "04/10/2024",
      time: '11:00',
    },
    {
      name: "Like this Video",
      dueDate: "04/10/2024",
      time: 'Right Now',
    },
  ]

  return (
  <center className="todo-container">
    <AppName />
    <AddTodo/>
    <TodoItems todoItems={todoItems}></TodoItems>
  </center>
  );
    
}

export default App