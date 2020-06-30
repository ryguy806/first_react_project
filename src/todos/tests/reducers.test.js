const {expect} = chai;
import {todos} from '../reducers';
import {CREATE_TODO} from "../actions";
import {describe, it} from "mocha";

describe('The todos reducer', () => {
   it('Adds a new todo when CREATE_TODO action is received', () => {
       const fakeTodo = { text: 'Hello', isCompleted: false};
       const fakeAction = {type: 'CREATE_TODO', payload: { todo: fakeTodo}};
       const originalState = { isLoading: false, data: []};

       const expected = {
           isLoading: false,
           data: [fakeTodo]
       };
       const actual = todos(originalState, fakeAction);

       expect(actual).to.deep.equal(expected);
   })
});