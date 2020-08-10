
const villagerReducer = (state = { villagers: [], loading: false }, action) => {
  switch(action.type) {
    case 'LOADING_VILLAGER':
      return {
        ...state, 
        villagers: [...state.villagers],
        loading: true
      }
    case 'SHOW_VILLAGER':
      return {
        ...state, 
        villagers: action.villagers,
        loading: false
      }
    default:
      return state;
  }
}

export default villagerReducer;