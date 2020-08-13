import { combineReducers } from 'redux';
import islandReducer from './IslandReducer';
import villagerReducer from './VillagerReducer';
import wishlistReducer from './wishlistReducer';

const rootReducer = combineReducers({
  islandReducer,
  villagerReducer,
  wishlistReducer
})

export default rootReducer;