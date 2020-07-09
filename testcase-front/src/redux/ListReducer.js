import * as ActionTypes from './ActionTypes';

const initialState = [];
export const List_Reducer = (state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.SUBMIT_LIST:
            var payload_input = action.payload.input;
            payload_input.id = state.length;
            let string = JSON.stringify(payload_input).slice(1,-1).replace(/"|,/g,' ');
            alert(string)
            return state.concat(payload_input);
        default:
            return state;
    }
}