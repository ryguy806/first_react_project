import { createSelector } from 'reselect';

export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.data.isLoading;

export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) =>todos.filter(todo => !todo.isCompleted),
)