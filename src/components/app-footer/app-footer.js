import React, {Component} from 'react';
import './app-footer.css';

export default class AppFooter extends Component {

  state = {
    label: ''
  }

  onChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.label);
    this.setState({label: ''});
  }

  render() {
     return (
      <footer>
        <form className="d-flex align-items-center justify-space-between"
          onSubmit= {this.onSubmit}
        > 
          <button type="submit" className="btn btn-outline-primary">Add Task</button>
          <input className="col form-control"
                 name="task" 
                 type="text"
                 placeholder="Text of task"
                 onChange={this.onChange}
                 value={this.state.label}
          />
        </form>
      </footer>
    );
  }
}