import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addVillager } from '../../actions/villagerActions'
// import { Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
import SearchResults from './SearchResults';
// import add from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/add.png';

function SearchBar({villagers}) {
  const [query, setQuery] = useState('')

  let results = villagers.filter(villager => villager.name.toLowerCase().includes(query.toLowerCase()))


  const displayResults = () => {
    if (query === '') {
      return ''
    } else {
      return <div> <SearchResults results={results}/> </div>
    }
  }

  return (
    <>
    <input type="text" 
      className="searchbar"
      placeholder="Search villager by name..." 
      value={query} 
      onChange={(e) => setQuery(e.target.value)} />

      {displayResults()}
  </>
  )

}

export default connect(null, {addVillager})(SearchBar);