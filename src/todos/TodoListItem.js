import React from 'react';
import styled from "styled-components";

const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const ButtonContainer  = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const RemoveButton = styled.button`
    display: inline-block;
    background-color: #ee2222;
    margin-left: 8px;
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
`;

const CompleteButton = styled.button`
    display: inline-block;
    background-color: #22ee22;
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <TodoItemContainer>
        <h3>{todo.text}</h3>
        <ButtonContainer>
            {todo.isCompleted
                ? null :
                <CompleteButton
                onClick={() => onCompletedPressed(todo.id)}
                className="completed-button">
                    Mark As Completed
                </CompleteButton>}
            <RemoveButton
                onClick={() => onRemovePressed(todo.id)}
                className="remove-button">Remove</RemoveButton>
        </ButtonContainer>
    </TodoItemContainer>
);

export default TodoListItem;