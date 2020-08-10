export const deleteVillager = (villagerId, islandId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/islands/${islandId}/villagers/${villagerId}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(island => dispatch({
      type: 'DELETE_VILLAGER',
      payload: island
    }))
  }
}