import React from 'react';
import Todo from "./Todo";

const TodoList = ({list}) => {
    return(
        <div>
            {list.map(item => <Todo key={item.id} item={item} />)}
        </div>
    )
}

export default TodoList;