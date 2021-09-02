import React, {useRef, useState, useEffect} from 'react';
import TodoList from "./todoList";

const LOCAL_STORAGE_KEY = "TodoList.todos";

export default function Form() {
    const initialTodos = [
        {name: "Don't procrastinate!", checked: false},
        {name: " Do work!", checked: false}
    ];

    let loadedTodos;

    const inputRef = useRef();

    if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))){
        loadedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    }
    else {
        loadedTodos = initialTodos;
    }

    const [todos, setTodos] = useState(loadedTodos);

    function clickHandler() {
        const inputElement = inputRef.current.value;
        setTodos([...todos, {name: inputElement, checked: 'false'}])
    }

    useEffect(() => {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]
    );

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
