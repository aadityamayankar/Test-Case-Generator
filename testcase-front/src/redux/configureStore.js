import {createStore,combineReducers} from 'redux';
import {Ds_Reducer} from './DsReducer';
import {Tc_Reducer} from './TcReducer';
import {List_Reducer} from './ListReducer';
import {Result_Reducer} from './ResultReducer';
import {CLEAR_STORE} from './ActionTypes'

export const ConfigureStore = () =>{
    const Reducer = combineReducers({
        Ds_Reducer,
        Tc_Reducer,
        List_Reducer,
        Result_Reducer
    });
    const rootReducer = (state,action)=>{
        if(action.type===CLEAR_STORE){
            state=undefined;
        }
        return Reducer(state,action)
    }
    
    const store = createStore(rootReducer);
    return store; 
}