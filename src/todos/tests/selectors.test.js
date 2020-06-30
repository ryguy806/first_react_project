const {expect} = chai;
import {describe, it} from "mocha";
import {getCompletedTodos} from "../selectors";

describe("The getCompletedTodos selectore", ()=> {
   it('Returns only completed todos', () => {
       const fakeTodos = [{
           text: "Say hello",
           isCompleted: true,
       },{
           text: "Ryan is Great!",
           isCompleted: false,
       },{
           text: "Play with Remy",
           isCompleted: false,
       }];

       const expected = [{text: "Say hello", isCompleted: true}];
       
       const actual = getCompletedTodos.resultFunc(fakeTodos);

       expect(actual).to.deep.equal(expected);
   });
});