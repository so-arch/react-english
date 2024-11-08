import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
    return (
      <div className="items-container">
        {todoItems.map((item, index) => (
          <TodoItem key={index} todoname={item.name} tododate={item.dueDate} todotime={item.time}> </TodoItem>
        ))}
      </div>
    );
};
export default TodoItems;