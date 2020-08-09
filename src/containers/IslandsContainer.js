import React from 'react';
import Island from '../components/islands/Island';
import Islands from '../components/islands/Islands';
import IslandInput from '../components/islands/IslandInput';

const IslandsContainer = () => {
  return (
    <div>
      <Island />
      <Islands />  
      <IslandInput /> 
    </div>
  )
}

export default IslandsContainer;