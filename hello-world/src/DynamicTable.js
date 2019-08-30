import React from 'react';

export function DynamicTable(props) {

  let rows = [];
  let columns = [];
  debugger
  for(let i = 0 ; i < props.columns; i++) {
    columns.push('x');
  }
  for(let i = 0; i < props.rows; i++) {
    rows.push(<tr key={i}>
      {columns.map((item, index) => <td key={index}>Hello</td>)}
    </tr>);
  }

  return <table>
    <tbody>
      {rows}
    </tbody>
  </table>
}