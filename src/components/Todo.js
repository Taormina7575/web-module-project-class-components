import React from 'react';
import './Todo.css'

const Todo = props => {
    


    const handleClick = () => {
        props.toggleComplete(props.item.id)
    }


  return (
    <div onClick={handleClick} className={`item${props.item.completed ? "Complete" : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;