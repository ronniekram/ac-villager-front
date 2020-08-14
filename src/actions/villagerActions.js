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

export const addVillager = (villager, islandId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/villagers/${villager.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        island_id: islandId
      })
    })
    .then(resp => resp.json())
    .then(island => dispatch({type: 'ADD_VILLAGER', payload: island}))
  }
}

export const removeVillager = (villagerId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/villagers/${villagerId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        island_id: ''
      })
    })
    .then(villager => dispatch({type: 'REMOVE_VILLAGER', payload: villager}))
  }
}