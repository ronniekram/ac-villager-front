export default function islandReducer(state = {villagers: []}, action) {
  switch (action.type) {
    case 'FETCH_ISLANDS':
      return {islands: action.payload}
    case 'ADD_ISLAND': 
      return {...state, islands: [...state.islands, action.payload]}
    case 'ADD_VILLAGER': 
      let islands = state.islands.map(island => {
        if (island.id === action.payload.id) {
          return action.payload
        } else {
          return island
        }
      })
      return {...state, islands: islands}
    case 'DELETE_VILLAGER':
      let islandsTwo = state.islands.map(island => {
        if (island.id === action.payload.id) {
          return action.payload;
        } else {
          return island
        }
      })
      return {...state, islands: islandsTwo}
    default:
      return state;
  }
}