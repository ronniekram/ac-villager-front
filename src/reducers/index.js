import {combineReducers} from 'redux'
import islandReducer from './IslandReducer'
import wishlistReducer from './WishlistReducer'

const rootReducer = combineReducers({
  islandReducer,
  wishlistReducer
})

export default rootReducer