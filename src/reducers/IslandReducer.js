const islandReducer = (state = {islands: [], loading: false}, action) => {
  switch(action.type) {
    case 'FETCH_ISLANDS': 
      return {
        ...state, 
        islands: [...state.islands],
        loading: true
      }
    case 'ISLANDS_FETCHED':
      return {
        ...state,
        islands: action.islands,
        loading: false
      }
    case 'ADD_ISLAND':
      return {...state, islands: [...state.islands, action.payload]}
    case 'EDIT_ISLAND': 
    let islandsFour = state.islands.map(island => {
      if (island.id === action.payload.id) {
        return action.payload
      } else {
        return island
      }
    })
    return {...state, islands: islandsFour}
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
      const islandsThree = state.islands.filter(island => island.id !== action.id)
      return {...state, islandsThree}
    default: 
      return state;
  }
}

export default islandReducer;