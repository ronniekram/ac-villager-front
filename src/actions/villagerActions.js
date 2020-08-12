export function fetchVillagers() {
  return (dispatch) => {
    dispatch({type: 'FETCH_VILLAGERS'})
    fetch('http://localhost:3000/villagers')
    .then(resp => resp.json())
    .then(data => dispatch({
      type: 'VILLAGERS_FETCHED',
      villagers: data
    })
    )
  }
}

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