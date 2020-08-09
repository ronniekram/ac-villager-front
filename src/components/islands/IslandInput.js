import React from 'react';
// import { Route } from 'react-router-dom'

const IslandInput = () => {
  return (
    <form>
      <label>Island Name: </label>
      <input type="text"></input> <br />
      <label>Island Owner: </label>
      <input type="text"></input> <br />
      <button type="submit">Create Island</button>
    </form>
  )
}

export default IslandInput;