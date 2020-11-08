import React from 'react';
import './app-footer.css';

const AppFooter = ({addTask}) => {

  return (
    <footer>
      <form className="d-flex align-items-center justify-space-between"> 
        <button className="btn btn-outline-primary" onClick = {(e) => {
          e.preventDefault();

          const input = document.querySelector('form')['task'];
          addTask(input.value);
          input.value = "";
        }}>Add Task</button>
        <input className="col form-control" name="task" type="text" placeholder="add new task to list" />
      </form>
    </footer>
  );
}

export default AppFooter;