
const villagerReducer = (state = { villagers: [], loading: false }, action) => {
  switch(action.type) {
    case 'FETCH_VILLAGER':
      return {
        ...state,
        villager: [...state.villager],
        loading: true
      }
    case 'VILLAGER_FETCHED':
      return {
        ...state,
        villager: action.villager,
        loading: false
      }
    default:
      return state;
  }
}

export default villagerReducer;