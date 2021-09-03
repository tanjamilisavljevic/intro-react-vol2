import React from 'react';

export default function TodoList(props) {

    const todos = props.todos;

    return (
        <div>
            <div class="headingWrapper">
                <h1> My TO-DO List</h1>
            </div>
            <ul>
                {todos.map((todo) => {
                    return <li key={todo.name}><input type="checkbox" checked={todos.checked}/> {todo.name} </li>
                })
                }
            </ul>
        </div>
    );
}
