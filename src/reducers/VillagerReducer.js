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
    default:
      return state;
  }
}

export default villagerReducer;