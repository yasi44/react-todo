import React from "react";
import TodoListItem from "./TodoListItem";




const TodoList = () => {
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
  return(
    // const listItems = todoList.map(function(item){
    //     return <li key={item.id}> {item.title}</li>;
    //   });

    <ul>
      {todoList.map((item) => ( 
        <TodoListItem key={item.id} title={item.title} />))     
          }
    </ul>
    
  );
        }

export default TodoList;
