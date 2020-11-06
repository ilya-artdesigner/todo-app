import React, {Component} from 'react';
import './app-footer.css';

export default class AppFooter extends Component {

  randomId(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  makeItem() {
      const result = {};
      const input = document.querySelector('form')['task'];

      result.label = input.value;
      result.id = this.randomId(1, 100);
      result.important = false;

      input.value = "";
      return result;
  }

  render() {
    return (
      <footer>
        <form className="d-flex align-items-center justify-space-between"> 
          <button className="btn btn-outline-primary" onClick = {(e) => {
            e.preventDefault(); 
            this.props.addTask(this.makeItem());
          }}>Add Task</button>
          <input className="col form-control" name="task" type="text" placeholder="add new task to list" />
        </form>
      </footer>
    );
  }
}