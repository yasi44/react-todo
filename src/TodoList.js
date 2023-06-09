import React from "react";

let todoList = [
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

const TodoList = () => {
    const listItems = todoList.map(function(item){
        return <li key={item.id}> {item.title}</li>;
      });
    return(
      <ul>
        {listItems}
      </ul>
    );
}

export default TodoList;
