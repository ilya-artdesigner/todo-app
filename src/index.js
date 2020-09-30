import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  const items = ['Learn React', 'Build Awesome App'];
  return (
    <ul>
      {items.map((item) => <li>{item}</li>)}
    </ul>
  );
};

const AppHeader = () => {
  return (
    <h1>My Todo List</h1>
  );
};

const SearchPanel = () => {
  const searchStyle = {'font-size': '1.5rem'};
  const caption = "Search";
  return (
    <input style={searchStyle} placeholder={caption} />
  );
};

const App = () => {

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));