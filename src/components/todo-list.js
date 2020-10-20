import React from 'react';
import TodoListItem from './todo-list-item';
import './todo-list-item.css';

const TodoList = ({todos}) => {

  const list = todos.map( ({id, ...itemProps}) => {
    return (
      <li className="list-group-item"
          key={id}>
        <TodoListItem { ...itemProps }/>
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { list }
    </ul>
  );
};

export default TodoList;