import React from "react";

const AddTodoForm = () => {
    return(
        <form>
            <label htmlFor="todoTitle" id="todoTitle">
                Title
            </label>
            <input id="todoTitle"/>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
