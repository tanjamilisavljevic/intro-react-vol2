import React from 'react';

export default function TodoList(props) {

    const todos = props.todos;

    return (
        <div>
            <ol>
                {todos.map((todo) => {
                    return <li key={todo.name}><input type="checkbox" checked={todos.checked}/> {todo.name} </li>
                })
                }
            </ol>
        </div>
    );
}
