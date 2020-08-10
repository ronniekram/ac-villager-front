export function fetchIslands() {
  return (dispatch) => {
    fetch('http://localhost:3000/islands')
    .then(resp => resp.json())
    .then(islands => dispatch({
      type: 'FETCH_ISLANDS',
      payload: islands
    }))
  }
}