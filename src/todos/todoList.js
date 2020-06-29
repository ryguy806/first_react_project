import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import {loadTodos, removeTodoRequest, markTodoAsCompletedRequest, displayAlert} from "./thunks";

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>
        Loading ToDos!!!
    </div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm/>
            {todos.map(todo => <TodoListItem
                todo={todo}
                onCompletedPressed={onCompletedPressed}
                onRemovePressed={onRemovePressed}/>)}
        </div>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    todos: state.todos,
    isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
    onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
    startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);