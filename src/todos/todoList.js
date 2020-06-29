import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { markTodoAsCompleted } from './actions';
import './TodoList.css';
import {displayAlert} from "./thunks";
import {loadTodos, removeTodoRequest} from "./thunks";

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
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
    onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
    startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);