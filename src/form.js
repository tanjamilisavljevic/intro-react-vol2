import React from 'react';
import TodoList from "./todoList";

export default function Form(props) {
    return (
        <>
            <TodoList />

            <label htmlFor="newToDo"/>
            <input type="text" name="newToDo" id="newToDo" placeholder="Add a to-do"/>
            <br/>
            <input type="submit" id="submit" name="submit" value="Add to list"/>
        </>
    );
}
