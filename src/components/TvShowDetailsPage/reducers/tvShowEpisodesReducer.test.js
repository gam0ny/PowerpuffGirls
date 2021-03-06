import { TV_SHOW__EPISODES__UPDATE } from "./actionTypes";
import { tvShowEpisodesReducer, initialState } from "./tvShowEpisodesReducer";

const action = {
    type: TV_SHOW__EPISODES__UPDATE,
    payload: Array(10).fill({ testProperty: 'test' }),
};

describe('TV Show Episodes Reducer test', () => {
    it(`${TV_SHOW__EPISODES__UPDATE} test, that update is performed correctly`, () => {

        const stateBeforeAction = initialState;

        const result = tvShowEpisodesReducer(stateBeforeAction, action);

        //Test, that
        expect(result).toEqual([...action.payload]);
    });

    it(`${TV_SHOW__EPISODES__UPDATE} test, that object has not mutated`, () => {

        const stateBeforeAction = initialState;

        const result = tvShowEpisodesReducer(stateBeforeAction, action);
        //but references are different
        expect(result === action.payload).toBeFalsy();
    })
});
