export const deleteIsland = (islandId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/islands/${islandId}`, {
      method: 'DELETE'
    })
    .then(island => dispatch({type: 'DELETE_ISLAND', payload: island}))
  }
}