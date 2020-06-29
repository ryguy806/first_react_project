import { createTodo, loadTodosInProgree, loadTodosSuccess, loadTodosFailure } from "./actions";

export const displayAlert = (text) => {
    alert(text);
};

export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgree());
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();

        dispatch(loadTodosSuccess(todos));
    }catch (e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e))
    }
}

export const addTodoRequest = text => async dispatch => {
    try {
        const body = JSON.stringify({text});
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-type': 'application/json',
            },
            method: post,
            body,
        });
        const todo = await response.json();
        dispatch(createTodo(todo));
    } catch(e) {
        dispatch(displayAlert(e));
    }
}