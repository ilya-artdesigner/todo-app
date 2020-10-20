import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({todos}) => {

  const list = todos.map( ({id, ...itemProps}) => {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center"
          key={id}>
        <TodoListItem { ...itemProps }/>
        <section className="d-flex justify-content-between items-controls">
          <button className="btn btn-outline-danger"><i className="fas fa-trash"></i></button>
          <button className="btn btn-outline-success"><i className="fas fa-exclamation"></i></button>
        </section>
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