export default function VillagerReducer(state = {villagers: []}, action) {
  switch (action.type) {
    case "FETCH_VILLAGER":
      return {villager: action.payload}
    default: 
      return state;
  }
}