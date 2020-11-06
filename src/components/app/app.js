import React, {Component} from 'react';
import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import AppFooter from '../app-footer/app-footer';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData : [
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Make React App', important: true, id: 2},
      {label: 'Drink Tea', important: false, id: 3},
      {label: 'Fix React bugs', important: false, id: 4},
      {label: 'Drink Vine', important: true, id: 5},
    ]
  }

  addItem = (data) => {
    this.setState( ({todoData}) => {
      const result = [data, ...todoData];

      return {
        todoData: result
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
    return (
      <div className="container">
        <AppHeader />
        <SearchPanel />
        <TodoList todos = {this.state.todoData} onDeleted = {this.deleteItem} />
        <AppFooter addTask = {this.addItem} />
      </div>
    );
  }
  
};