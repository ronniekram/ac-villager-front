export const deleteIsland = (islandId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/islands/${islandId}`)
    .then(resp => resp.json())
    .then(island => dispatch({type: 'DELETE_ISLAND', payload: island}))
  }
}