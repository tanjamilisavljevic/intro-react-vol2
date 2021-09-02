import React, {useRef, useState} from 'react';
import TodoList from "./todoList";

export default function Form() {
    const initialTodos = [
        {name: "Don't procrastinate!", checked: false},
        {name: " Do work!", checked: false}
    ];
    const inputRef = useRef();
    const [todos, setTodos] = useState(initialTodos);

    function clickHandler() {
        const inputElement = inputRef.current.value;
        setTodos([...todos, {name: inputElement, checked: 'false'}])
    }

    return (
        <>
            <label htmlFor="newToDo"/>
            <input ref={inputRef} type="text" name="newToDo" id="newToDo" placeholder="Add a to-do"/>
            <br/>
            <input type="submit" id="submit" name="submit" value="Add to list" onClick={clickHandler}/>
            < TodoList todos={todos}/>
        </>
    );
}
