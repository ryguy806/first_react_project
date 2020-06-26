import React from 'react';
import TodoListItem from './TodoListItem.js';

const TodoList = ({ todos }) => (
    <div className="listWrapper">
        {todos.map(todo => <TodoList todo={todo}/>)}
    </div>
);

export default TodoList;