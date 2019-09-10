import React from "react";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <div
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          className={todo.completed ? "completed" : ""}
        >
          {todo.task}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
