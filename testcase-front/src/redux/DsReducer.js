import * as ActionTypes from './ActionTypes';

const initialState = {selectedDS:null}
export const Ds_Reducer = (state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.CHANGE_DS:
            var payload_ds = action.payload.selectedDS;
            return Object.assign({},state,{selectedDS:payload_ds});
        default:
            return state;
    }
} 