import React, { useState} from "react";

const TodoForm = ({ addTask, clearCompleted }) => {
  const [task, setTask] = useState("");

  const handleChange = event => setTask(event.target.value);

 
  const handleSubmit = event => {
    event.preventDefault();
    addTask(task);
    setTask("");
  };

  const handleClear = event => {
    event.preventDefault();
    clearCompleted();
};

  

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        name="newTodo"
        onChange={handleChange}
      />

      <button type="submit">Add Todo</button>

      <button>Clear Completed</button>
      {/* <button onClick={props.clearCompleted}>Clear Completed</button> */}
    </form>
  );
};


export default TodoForm;
