export function fetchWishlists() {
  return (dispatch) => {
    dispatch({type: 'FETCH_WISHLISTS'})
    fetch('http://localhost:3000/wishlists')
    .then(resp => resp.json())
    .then(data => dispatch({
      type: 'WISHLISTS_FETCHED',
      wishlists: data
    })
    )
  }
}

export const addWishlist = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/wishlists', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(wishlist => dispatch({type: 'ADD_WISHLIST', payload: wishlist}))
  }
}

export const deleteWishlist = (wishlistId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/wishlists/${wishlistId}`, {
      method: 'DELETE'
    })
    .then(wishlist => dispatch({type: 'DELETE_WISHLIST', payload: wishlist}))
  }
}