export const fetchVillager = (query) => {
  return (dispatch) => {
    fetch(`https://nookipedia.com/api/villager/${query}/?api_key=a0f9c0e9-e1a3-4bb8-a216-25791670ffc4`)
    .then(resp => resp.json())
    .then(villager => dispatch({
      type: 'FETCH_VILLAGER',
      payload: villager
    }))
  }
}

// add alert when villager does not exist