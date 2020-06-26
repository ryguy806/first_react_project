import React from 'react';
import './todoList.css'
import TodoListItem from '../todoListItem/TodoListItem.js';

const TodoList = ({ todos }) => (
    <div className="listWrapper">
        {todos.map(todo => <TodoList todo={todo}/>)}
    </div>
);

export default TodoList;