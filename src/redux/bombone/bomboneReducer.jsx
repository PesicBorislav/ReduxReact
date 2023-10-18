import { BUY_BOMBONE } from "./bomboneTypes"

const initialState={
    numOfBombone:30
}

const bomboneReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_BOMBONE:
            return{
            ...state,
            numOfBombone:state.numOfBombone -1
        }
        default:return state
    }
}

export default bomboneReducer