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

    if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))) {
        loadedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    } else {
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
            <div className="headingWrapper">
                <h1> My TO-DO List</h1>
            </div>
            <div className="contentWrapper">
                < TodoList todos={todos}/>

                <label htmlFor="newToDo"/>
                <input ref={inputRef} class="newTodo" type="text" name="newToDo" id="newToDo"
                       placeholder="Do the groceries..."/>
                <br/>
                <input class="submit" type="submit" id="submit" name="submit" value="Add to list"
                       onClick={clickHandler}/>
            </div>
        </>
    );
}
