import React, {Component} from 'react';
import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import AppFooter from '../app-footer/app-footer';
import AppHeadPanel from '../app-head-panel/app-head-panel';
import AppStatusFilter from '../app-status-filter/app-status-filter';

export default class App extends Component {

  maxId = 999;
  minId = 1;

  state = {
    todoData : [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make React App'),
      this.createTodoItem('Drink Tea'),
      this.createTodoItem('Fix React bugs'),
      this.createTodoItem('Drink Vine')
    ],
    term: '',
    filter: 'all' // all / active / done
  }

  search(arr, term) {
    if (term === '') {
      return arr;
    } else {
      return arr.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
    }
  }

  filter(arr, rule) {
    switch(rule) {
      case 'all':
        return arr;
      case 'active':
        return arr.filter(item => !item.done)
      case 'done':
        return arr.filter(item => item.done)
      default: return arr
    }
  }

  onFilterChange = (filter) => {
    this.setState({filter});
  }

  onSearchChange = (term) => {
    this.setState({term});
  }

  createTodoItem(label) {
    return ({
      label: label,
      id: this.randomId(this.minId, this.maxId),
      important: false,
      done: false,
    });
  }

  randomId(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  addItem = (data) => {
    if (!data) alert('Empty task, write down the text');
    else {
      const item = this.createTodoItem(data);

      this.setState( ({todoData}) => {
        const result = [item, ...todoData];

        return { todoData: result }
      });
    }
  }

  toggleProperty(arr, id, prop) {

    const inx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[inx];

    const newItem = {...oldItem,
      [prop]: !oldItem[prop]
    };

    return [
      ...arr.slice(0,inx),
      newItem,
      ...arr.slice(inx + 1)
    ];
  }

  onImportant = (id) => {
    this.setState( ({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onDone = (id) => {
    this.setState( ({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  deleteItem = (id) => {
    this.setState( ({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);

      const result = [
        ...todoData.slice(0,index),
        ...todoData.slice(index + 1)
      ];
      return {todoData : result};
    });
  }

  render() {

    const { todoData, term, filter } = this.state;
    const VisibleItems = this.filter(this.search(todoData, term), filter);
    

    return (
      <div className="container">
        <AppHeader todos = {this.state.todoData}/>
        <AppHeadPanel>
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <AppStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
        </AppHeadPanel>
        
        <TodoList 
          todos = {VisibleItems} 
          onDeleted = {this.deleteItem}
          onImportant = {this.onImportant}
          onDone = {this.onDone}
          onFilter = {this.filterList}
        />
        <AppFooter 
          addTask = {this.addItem}     
        />
      </div>
    );
  }
  
}