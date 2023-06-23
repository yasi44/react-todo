import React from "react";
// import TodoList from "./TodoList";



const TodoListItem = (props) => {
    return(
        <li key={props.key}> {props.todo} </li>
    )
};



// const Search = () => {

// ///ha
// const handleChange = (event) => {
// console.log(event.target.value);
// };

// return (
//     <div>
//         <label htmlFor="search"> Search: </label>
//         <input id="search" type="text" onChange={handleChange}></input>
//     </div>
// );

// };


// export default Search;
export default TodoListItem;