import * as ActionTypes from './ActionTypes';

const initialState = {test_case:""}
export const Tc_Reducer = (state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.TEST_CASE:
            var payload_tc = action.payload.test_case;
            return Object.assign({},state,{test_case:payload_tc});
        default:
            return state;
    }
} 