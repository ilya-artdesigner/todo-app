import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';



const App = () => {

  const todoData = [
    {label: 'Drink Coffee', important: false, id: 1},
    {label: 'Make React App', important: true, id: 2},
    {label: 'Drink Tea', important: false, id: 3},
    {label: 'Fix React bugs', important: false, id: 4},
    {label: 'Drink Vine', important: true, id: 5},
  ]

  return (
    <div className="container">
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));