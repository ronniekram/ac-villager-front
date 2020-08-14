export function fetchIslands() {
  return (dispatch) => {
    dispatch({type: 'FETCH_ISLANDS'})
    fetch('http://localhost:3000/islands')
    .then(resp => resp.json())
    .then(data => dispatch({
      type: 'ISLANDS_FETCHED',
      islands: data
    })
    )
  }
}

export const addIsland = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/islands', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(island => dispatch({type: 'ADD_ISLAND', payload: island}))
  }
}

export const deleteIsland = (islandId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/islands/${islandId}`, {
      method: 'DELETE'
    })
    .then(island => dispatch({type: 'DELETE_ISLAND', payload: island}))
  }
}
