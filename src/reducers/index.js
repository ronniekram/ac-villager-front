import {combineReducers} from 'redux'
import islandReducer from './IslandReducer'
import wishlistReducer from './WishlistReducer'

export const rootReducer = combineReducers({
  islandReducer,
  wishlistReducer
})