import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addVillager } from '../../actions/villagerActions'
import SearchResults from './SearchResults';

function SearchBar({villagers, island, addVillager}) {
  const [query, setQuery] = useState('')

  let results = villagers.filter(villager => villager.name.toLowerCase().includes(query.toLowerCase()))

  const handleAdd = (villager, island) => {
    addVillager(villager, island);
  }


  const displayResults = () => {
    if (query === '') {
      return ''
    } else {
      return <div className="column card"> <SearchResults results={results} island={island} handleAdd={handleAdd} /> </div>
    }
  }

  return (
    <div className="column card">
      <input type="text" 
        className="searchbar"
        placeholder="Search villager by name..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} />

        {displayResults()}
    </div>
  )

}

export default connect(null, {addVillager})(SearchBar);