
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