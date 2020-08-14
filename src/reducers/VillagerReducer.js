const villagerReducer = (state = { villagers: [], loading: false }, action) => {
  switch(action.type) {
    case 'FETCH_VILLAGERS':
      return {
        ...state,
        villagers: [...state.villagers],
        loading: true
      }
    case 'VILLAGERS_FETCHED':
      return {
        ...state,
        villagers: action.villagers,
        loading: false
      }
      case 'ADD_VILLAGER': 
      let villagersPlus = state.islands.map(villager => {
        if (villager.id === action.payload.id) {
          return action.payload
        } else {
          return villager
        }
      })
      return {...state, villagers: villagersPlus}
    case 'REMOVE_VILLAGER':
      let villagersMinus = state.villagers.map(villager => {
        if (villager.id === action.payload.id) {
          return action.payload
        } else {
          return villager
        }
      })
      return {...state, villagers: villagersMinus}
    default:
      return state;
  }
}

export default villagerReducer;