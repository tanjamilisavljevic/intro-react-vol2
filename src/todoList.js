import React, {useState} from 'react';

export default function TodoList(props) {


    const todos = props.todos;
    const checkTodo = props.checkTodo;


    return (
        <div>
            <ol>
                {todos.map((todo) => {
                    return <li key={todo.name}><input type="checkbox" checked={todo.checked} onChange={() => checkTodo(todo.name)}/> {todo.name} </li>
                })
                }
            </ol>
        </div>
    );
}
