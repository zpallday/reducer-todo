export const initialState = {
  todos: [
    {
      task: "Water",
      id: 15288,
      completed: false
    }
  ]
};

export function todoListReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      const newTodo = {
        task: action.payload,
        id: Date.now(),
        completed: false
      };



      console.log(newTodo);
       return {
        ...state,
        todos: [...state.todos, newTodo]
      };


    case "TOGGLE_TASK":
      return {
        ...state,
        todos: state.todos.map(todo => {
         if (todo.id === action.payload) {
          return {
          ...todo,
          completed: !todo.completed
   };
  } else {
return todo;
          }
        })
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };





    default: return state;
  }
}
