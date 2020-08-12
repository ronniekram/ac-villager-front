const islandReducer = (state = {wishlists: [], loading: false}, action) => {
  switch(action.type) {
    case 'FETCH_WISHLISTS': 
      return {
        ...state, 
        wishlists: [...state.wishlists],
        loading: true
      }
    case 'WISHLISTS_FETCHED':
      return {
        ...state,
        wishlists: action.wishlists,
        loading: false
      }
    case 'ADD_WISHLIST':
      return {...state, wishlists: [...state.wishlists, action.payload]}
    case 'ADD_VILLAGER': 
      let wishlists = state.wishlists.map(wishlist => {
        if (wishlist.id === action.payload.id) {
          return action.payload;
        } else {
          return wishlist;
        }
      })
      return {...state, wishlists: wishlists}
    case 'DELETE_VILLAGER':
      let wishlistsTwo = state.wishlists.map(wishlist => {
        if (wishlist.id === action.payload.id) {
          return action.payload
        } else {
          return wishlist
        }
      })
      return {...state, wishlists: wishlistsTwo}
    case 'DELETE_WISHLIST':
      const wishlistsThree = state.wishlists.filter(wishlist => wishlist.id !== action.id)
      return {...state, wishlistsThree}
    default: 
      return state;
  }
}

export default islandReducer;