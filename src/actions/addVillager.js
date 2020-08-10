export const addVillager = (villager, islandId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/islands/${islandId}/villagers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(villager)
    })
    .then(resp => resp.json())
    .then(island => {
      dispatch({
        type: 'ADD_VILLAGER',
        payload: island
      })
    })
  }
}