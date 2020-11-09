import React, {Component} from 'react';
import AppStatusFilter from '../app-status-filter/app-status-filter';
import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  }

  searchListen = (e) => {
    const term = e.target.value
    this.setState({ term });
    this.props.onSearchChange(term);
  }

  render() {
    return (
      <div className="d-flex justify-content-between align-items-center search-panel">
        <input className="col input-group form-control search"
               placeholder="Type to search"
               value={this.state.term}
               onChange={this.searchListen}
        />
        <AppStatusFilter />
      </div>
    );
  }
};