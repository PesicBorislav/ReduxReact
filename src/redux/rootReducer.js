import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import bomboneReducer from './bombone/bomboneReducer'

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    bombone:bomboneReducer
})

export default rootReducer