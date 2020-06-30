import {describe, it} from "mocha";
const {expect} = chai;
import {loadTodos} from "../thunks";
import sinon from 'sinon';
import 'node-fetch';
import fetchMock from "fetch-mock";

describe('The loadTodos thunks', () => {
    it('Dispatches the correct actions in the success scenarios', async () => {
        const fakeDispatch = sinon.spy();

        const fakeTodos = [{text: 1}, {text: 2}];
        fetchMock.get('http://localhost:3000/todos', fakeTodos);

        const expectedFirstAction = { type: 'LOAD_TODOS_IN_PROGRESS' };
        const expectedSecondAction = {type: 'LOAD_TODOS_SUCCESS', payload: {todos: fakeTodos},};

        await loadTodos()(fakeDispatch);

        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);

        fetchMock.reset();
    });
});