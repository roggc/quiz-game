import {SCREENS_TOGGLESEEMODAL,SCREENS_TOGGLESEEMODAL2} from '../actions/screens'

const initialState={
    seeModal:false,
    seeModal2:false
}

const toggleSeeModal=(state,action)=>{
    return {
        ...state,
        seeModal:!state.seeModal
    }
}

const toggleSeeModal2=(state,action)=>{
    return {
        ...state,
        seeModal2:!state.seeModal2
    }
}

export default (state=initialState,action)=>{
    switch(action.type){
        case SCREENS_TOGGLESEEMODAL:
            return toggleSeeModal(state,action)
        case SCREENS_TOGGLESEEMODAL2:
            return toggleSeeModal2(state,action)
        default:
            return state
    }
}