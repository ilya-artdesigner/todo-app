import React from 'react';
import './todo-list.css'

const TodoListItem = ({label, important = false}) => {
  const style = {
    color: important && 'tomato'
  }

  return (
  <span className="todo-list-item"
        style={style}>
    {label}
  </span>
  );
};

export default TodoListItem;