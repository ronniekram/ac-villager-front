export default function villagerReducer(state = {villagers: []}, action) {
  switch (action.type) {
    case "FETCH_VILLAGER":
      return {villager: action.payload}
    case "ADD_VILLAGER_ISLAND":
      return state;
    case "ADD_VILLAGER_WISH":
      return state;
    case "DELETE_VILLAGER_ISLAND":
      return state;
    case "DELETE_VILLAGER_WISH":
      return state;
    default: 
      return state;
  }
}