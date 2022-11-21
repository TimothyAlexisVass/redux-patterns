import { combineReducers } from 'redux'
import shelfReducer from './shelf/shelfReducer'
import freezerReducer from './freezer/freezerReducer'

const rootReducer = combineReducers({
  shelf: shelfReducer,
  freezer: freezerReducer
})

export default rootReducer
