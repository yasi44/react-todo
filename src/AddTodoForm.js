import React from "react";

const AddTodoForm = (props) => {


    const handleAddTodo = (event) => {
        event.preventDefault(event);
        event.target.title.value = "";
        const todoTitle = event.target.title.value;
        props.onAddTodo (todoTitle);

    }

    return(
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle" id="todoTitle">
                Title
            </label>
            <input id="todoTitle" name="title"/>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
