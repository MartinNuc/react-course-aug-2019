import React from 'react';
import './App.css';
import { DynamicTable } from './DynamicTable';
import { CounterWrapper } from './CounterWrapper';

function App() {
  return (
    <div>
      <CounterWrapper />
      <DynamicTable rows={5} columns={3}></DynamicTable>
    </div>
  );
}

export default App;
