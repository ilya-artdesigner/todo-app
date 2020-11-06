import React, {Component} from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    this.setState(({done}) => {
      return { done: !done }
    });
  };

  onMarkImportant = () => {
    this.setState( ({important}) => {
      return { important: !important }
    });
  };

  render() {

    const { label, onDeleted } = this.props;
    const { done, important } = this.state;


    let classNames = "todo-list-item";
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important'
    }

    return (
      <>
        <span className={classNames}
              onClick={ this.onLabelClick }>
          {label}
        </span>
        <section className="d-flex justify-content-between items-controls">
          <button className="btn btn-outline-danger" onClick={onDeleted}><i className="fas fa-trash"></i></button>
          <button className="btn btn-outline-success" onClick={this.onMarkImportant}><i className="fas fa-exclamation"></i></button>
        </section>
      </>
    );
  }
}