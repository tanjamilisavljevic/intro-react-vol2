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
        setTodos([...todos, {name: inputElement, checked: false}])
    }

    function clickHandlerDelete() {
        const unCheckedTodos = todos.filter(todo => todo.checked === false);
        console.log(unCheckedTodos);
        setTodos(unCheckedTodos)
    }

    function checkTodoHandler(todoName) {
        const newTodos = [...todos];
        const checkedTodo = newTodos.find(todo => todo.name === todoName);
        if (checkedTodo.checked) {
            checkedTodo.checked = false;
        } else {
            checkedTodo.checked = true;
        }
        setTodos(newTodos);
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
                < TodoList todos={todos} checkTodo={checkTodoHandler}/>

                <label htmlFor="newToDo"/>
                <input ref={inputRef} className="newTodo" type="text" name="newToDo" id="newToDo"
                       placeholder="Do the groceries..."/>
                <br/>
                <input className="submit" type="submit" id="submit" name="submit" value="Add to list"
                       onClick={clickHandler}/>
                <input className="submit" type="submit" id="delete" name="delete" value="Delete selected"
                       onClick={clickHandlerDelete}/>
            </div>
        </>
    );
}
