import React from 'react';
import ReactDataGrid from 'react-data-grid';
import 'bootstrap/dist/css/bootstrap.css';

function MyCustomRenderer() {
  return (
    <div style={
      {
        borderColor: 'blue',
        borderWidth: '5px 0 0 0',
        borderStyle: 'solid'
      }
    }>

    </div>
  )
}

const TotalCostHeader = item => (<MyCustomRenderer>{item.column.name}</MyCustomRenderer>)

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'count', name: 'Count', headerRenderer: TotalCostHeader, sortable: true } ];

const rows = [{id: 0, title: 'row1', count: 20}, {id: 1, title: 'row1', count: 40}, {id: 2, title: 'row1', count: 60}];

function App() {
  return (<ReactDataGrid
  columns={columns}
  rowGetter={i => rows[i]}
  rowsCount={3}
  minHeight={150} />);
}

export default App