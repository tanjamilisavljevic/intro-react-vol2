import React from 'react';

export default function TodoList(props) {
    const todos = ["Don't procrastinate!", " Do work!"];
    return (
        <div>
            <h1> My TO-DO List</h1>
            <ul>
                {todos.map((todo) => {
                   return <li key={todo}> <input type="checkbox"/> {todo} </li>
                })
                }
            </ul>
        </div>
    );
}
