import React from 'react';
import './App.css';
import { DynamicTable } from './DynamicTable';
import { CounterWrapper } from './CounterWrapper';
import { Joke } from './Joke';

function App() {
  return (
    <div>
      <Joke />
      <CounterWrapper />
      <DynamicTable rows={5} columns={3}></DynamicTable>
    </div>
  );
}

export default App;
