import { USER_SET } from "../actions/user"

const initialState={
}

const set=(state,action)=>{
    return {
        ...state,
        user:action.user
    }
}

export default (state=initialState,action)=>{
    switch(action.type){
        case USER_SET:
            return set(state,action)
        default:
            return state
    }
}