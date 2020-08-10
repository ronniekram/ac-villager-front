
export default function islandReducer(state = { islands: []}, action) {
  switch(action.type) {
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
          return action.payload
        } else {
          return island
        }
      })
      return {...state, islands: islandsTwo}
    case 'DELETE_ISLAND':
      let islandsThree = state.islands.map(island => {
        if (island.id === action.payload.id) {
          return action.payload
        } else {
          return island
        }
      })
      return {...state, islands: islandsThree}
    default: 
      return state;
  }
}