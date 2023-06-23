import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import TodoListItem from './TodoListItem';
// import Search from './TodoListItem';


function App() {
  const [newTodo, setNewTodo] = React.useState('');

  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>

      <hr />
      <TodoList />
      <hr />
      {/* <Search /> */}
    </div>
  );
}

export default App;
