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