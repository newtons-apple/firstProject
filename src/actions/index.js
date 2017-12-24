import * as types from './actionTypes';

export function detail(i){
    return {type:types.Detail,
            index:i}
}
export function edit(){
    return{type:types.Edit}
}
export function remove(){
    return {type:types.Remove}
}
export function create(){
    return {type:types.Create}
}