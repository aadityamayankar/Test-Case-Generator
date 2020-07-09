import * as ActionTypes from './ActionTypes';

export const changeDs = (button) =>({
    type:ActionTypes.CHANGE_DS,
    payload:{
        selectedDS:button
    }
});
export const testCase = (value) =>({
    type:ActionTypes.TEST_CASE,
    payload:{
        test_case:value
    }
});
export const submitResult = (boool) =>({
    type:ActionTypes.SUBMIT_RESULT,
    payload:{
        showResult:boool
    }
});
export const clearStore = () => {
    return {
      type: ActionTypes.CLEAR_STORE
    }
}

export const submitList =(input)=>({
    type: ActionTypes.SUBMIT_LIST,
    payload:{
        input:input
    }
});