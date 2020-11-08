import React from 'react';
import './todo-list-item.css'

const TodoListItem  = ({ label, onDeleted, onImportant, onDone, done, important }) => {

    let classNames = "todo-list-item";

    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important'
    }

    return (
      <>
        <span type="button" className={classNames} onClick={onDone}>
          {label}
        </span>
        <section className="d-flex justify-content-between items-controls">
          <button className="btn btn-outline-danger" onClick={onDeleted}><i className="fas fa-trash"></i></button>
          <button className="btn btn-outline-success" onClick={onImportant}><i className="fas fa-exclamation"></i></button>
        </section>
      </>
    );

}

export default TodoListItem;