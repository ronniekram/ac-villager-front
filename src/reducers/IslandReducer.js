// export default function islandReducer(state = {villagers: []}, action) {
//   switch (action.type) {
//     case 'FETCH_ISLANDS':
//       return {islands: action.payload}
//     case 'ADD_ISLAND': 
//       return {...state, islands: [...state.islands, action.payload]}
//     case 'DELETE_ISLAND':
//       return state;
//     case 'ADD_VILLAGER': 
//       let islands = state.islands.map(island => {
//         // in addition to matching id, make sure villager count is less than 10
//         if (island.id === action.payload.id && island.villagers.count < 10) {
//           return action.payload
//         } else {
//           return island
//         }
//       })
//       return {...state, islands: islands}
//     case 'DELETE_VILLAGER':
//       let islandsTwo = state.islands.map(island => {
//         if (island.id === action.payload.id) {
//           return action.payload;
//         } else {
//           return island
//         }
//       })
//       return {...state, islands: islandsTwo}
//     default:
//       return state;
//   }
// }

export default function islandReducer(state = {islands: []}, action) {
  switch (action.type) {
    case 'FETCH_ISLANDS':
      return state;
    case 'ADD_ISLAND':
      return {islands: action.payload}
    case 'DELETE_ISLAND': 
      return state;
    default:
      return state;
  }
}