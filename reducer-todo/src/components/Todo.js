import React from 'react';
import "./Todo.css";



export default function Todo({item, props}){
    console.log("This is props in Todo", item)

    return(
    <div className={`task ${item.completed? ' Finished' : ''}`} 
        onClick={item}
         >
        <h1>{props.item.task}</h1>
        </div>

    )

}