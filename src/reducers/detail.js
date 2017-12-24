import * as types from '../actions/actionTypes';

const initialState={
    index:-1
}

export default function detail(state=initialState,action){
    if(action.type===types.Detail){
        return {index:action.index}
    }
    return state
}