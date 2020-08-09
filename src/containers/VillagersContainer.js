import React from 'react';
import Villager from '../components/villagers/Villager';
import Villagers from '../components/villagers/Villagers';
import VillagerSearch from '../components/villagers/VillagerSearch';

const VillagersContainer = () => {
  return (
    <div>
      <Villager />
      <Villagers />
      <VillagerSearch />
    </div>
  )
} 

export default VillagersContainer;