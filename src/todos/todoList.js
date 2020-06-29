import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import {loadTodos, removeTodoRequest, markTodoAsCompletedRequest, displayAlert} from "./thunks";
import {
    getTodosLoading,
    getIncompleteTodos,
    getCompletedTodos
} from "./selectors";

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>
        Loading ToDos!!!
    </div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm/>
            <h3>Incomplete: </h3>
            {incompleteTodos.map(todo => <TodoListItem
                todo={todo}
                onCompletedPressed={onCompletedPressed}
                onRemovePressed={onRemovePressed}/>)}
            <h3>Comleted: </h3>
            {completedTodos.map(todo => <TodoListItem
                todo={todo}
                onCompletedPressed={onCompletedPressed}
                onRemovePressed={onRemovePressed}/>)}
        </div>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
    isLoading: getTodosLoading(state),
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
    onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
    startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);