import React, {Component} from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {


  render() {

    const {label, important = false} = this.props;

    const style = {
      color: important && 'tomato'
    }

    return (
      <span className="todo-list-item"
            style={style}>
        {label}
      </span>
    );
  }
}