import React from 'react';
import './App.css';
import { DynamicTable } from './DynamicTable';

function App() {
  return (
    <div>
      Ahoj
      <DynamicTable rows={5} columns={3}></DynamicTable>
    </div>
  );
}

export default App;
