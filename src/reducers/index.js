import { combineReducers } from 'redux';
import islandReducer from './IslandReducer';
import villagerReducer from './VillagerReducer';

const rootReducer = combineReducers({
  islandReducer,
  villagerReducer
})

export default rootReducer;

// reducer: simple function that returns an object -- takes 2 params (state = initial state, action)
// reduces state and action into one new state
// describes HOW actions transform state into one updated state
// multiple reducers need to be put into a combined reducer to be called in createStore
// checks which action is used to modify the store