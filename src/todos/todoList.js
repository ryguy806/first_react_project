import React from 'react';
import './todoList.css'
import NewTodoForm from "./NewTodoForm";
import TodoListItem from './TodoListItem.js';

const TodoList = ({ todos = [{text: "Hello!"}] }) => (
    <div className="listWrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo}/>)}
    </div>
);

export default TodoList;