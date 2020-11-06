import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({todos, onDeleted}) => {

  const list = todos.map( ({id, ...itemProps}) => {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center"
          key={id}>
        <TodoListItem 
          { ...itemProps} 
          onDeleted = {() => onDeleted(id)}/>
      </li>
    );
  });

  return (
    <ul className="list-group">
      { list }
    </ul>
  );
};

export default TodoList;