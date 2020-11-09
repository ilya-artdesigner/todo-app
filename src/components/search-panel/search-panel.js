import React, {Component} from 'react';
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
        <input className="col input-group form-control search"
               placeholder="Type to search"
               value={this.state.term}
               onChange={this.searchListen}
        />
    );
  }
};