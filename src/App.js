import React from 'react';

const todoList = [
  {
    id:1,
    title:"Complete assignment"},
  {
    id:2,
    title:"Make an appointment"
  },
  {
    id:3,
    title:"Call mom"
  }
]; 

function App() {
  const listItems = todoList.map(function(item){
    return <li>{item.id} {item.title}</li>;
  });
  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Todo List</h1>
      <hr />
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default App;
