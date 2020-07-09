import * as ActionTypes from './ActionTypes';

const initialState = {showResult:false}
export const Result_Reducer = (state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.SUBMIT_RESULT:
            var payload_res = action.payload.showResult;
            return Object.assign({},state,{showResult:payload_res});
        default:
            return state;
    }
}