import React, {Component} from 'react';
import './app-status-filter.css';

export default class AppStatusFilter extends Component {


  buttons = [
    {name: "all", caption: "All"},
    {name: "active", caption: "Active"},
    {name: "done", caption: "Done"}
  ]

  render() {
    const {filter, onFilterChange} = this.props;

    const buttons = this.buttons.map(({name, caption}) => {
      const isActive = (filter === name) ? 'btn btn-outline-primary active' : 'btn btn-outline-primary';
      return (
      <button 
        className={isActive}
        key={name}
        onClick={() => onFilterChange(name)}
      >
        {caption}
      </button>
      );
    });

    return (
      <section className="d-inline flex-nowrap list-controls" onClick={this.changeFilter}>
        {buttons}
      </section>
    );
  }
}