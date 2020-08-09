// export default function wishlistReducer(state = {villagers: []}, action) {
//   switch (action.type) {
//     case 'FETCH_WISHLISTS':
//       return {wishlists: action.payload}
//     case 'ADD_WISHLIST': 
//       return {...state, wishlists: [...state.wishlists, action.payload]}
//     case 'DELETE_WISHLIST':
//       return state;
//     case 'ADD_VILLAGER': 
//       let wishlists = state.wishlists.map(wish => {
//         if (wish.id === action.payload.id) {
//           return action.payload
//         } else {
//           return wish
//         }
//       })
//       return {...state, wishlists: wishlists}
//     case 'DELETE_VILLAGER':
//       let wishlistsTwo = state.wishlists.map(wish => {
//         if (wish.id === action.payload.id) {
//           return action.payload;
//         } else {
//           return wish
//         }
//       })
//       return {...state, wishlists: wishlistsTwo}
//     default:
//       return state;
//   }
// }

export default function wishlistReducer(state = {villagers: []}, action) {
  switch (action.type) {
    case 'ADD_WISHLIST':
      return {wishlists: action.payload}
    case 'DELETE_WISHLIST': 
      return state;
    default:
      return state;
  }
}