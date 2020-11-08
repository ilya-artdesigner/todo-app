import React from 'react';
import './app-header-state.css'

const AppHeaderState = ({list}) => {
  const countDone = list.filter(el => el.done).length;
  const countIn = list.length - countDone;
  return <span className="list-state">{countIn} more todo, {countDone} done</span>;
};

export default AppHeaderState;