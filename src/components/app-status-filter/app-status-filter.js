import React, {Component} from 'react';
import { render } from 'react-dom';
import './app-status-filter.css';

export default class AppStatusFilter extends Component {
  render() {
    return (
      <section className="d-inline flex-nowrap list-controls">
          <button className="btn btn-outline-primary" data-active="true">All</button>
          <button className="btn btn-outline-primary">Active</button>
          <button className="btn btn-outline-primary">Done</button>
      </section>
    );
  }
}