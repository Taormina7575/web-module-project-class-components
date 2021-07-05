import React from "react";

import Todo from "./Todo";

const TodoList = props => {
    console.log(props.ToDoItems)
  return (
    <div>
      {props.ToDoItems.map(item => (
        <Todo key={item.id} toggleComplete={props.toggleComplete} item={item} />
      ))}
    </div>
  );
};

export default TodoList;


