import React, {Component} from 'react';
import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import AppFooter from '../app-footer/app-footer';

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
    term: ''
  }

  search(arr, term) {
    if (term === '') {
      return arr;
    } else {
      return arr.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
    }
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

    const { todoData, term } = this.state;
    const VisibleItems = this.search(todoData, term);

    return (
      <div className="container">
        <AppHeader todos = {this.state.todoData}/>
        <SearchPanel onSearchChange={this.onSearchChange} />
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