import React from 'react';
import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';

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

export default App;