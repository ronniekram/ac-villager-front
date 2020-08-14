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