import React from 'react';

export default function TodoList(props) {
    return (
        <div>
            <h1> My TO-DO List</h1>
            <ul>
                <li>
                    <input type="checkbox" /> Don't procrastinate!
                </li>
                <li>
                    <input type="checkbox" /> Do work!
                </li>
            </ul>

        </div>
    );
}
