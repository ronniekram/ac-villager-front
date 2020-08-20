import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults';
import add from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/add.png';

function SearchBar({villagers, query, setQuery}) {


  const results = villagers && villagers.filter(villager => villager.name.toLowerCase().includes(query.toLowerCase()))

  const displayResults = () => {
    if (query === '') {
      return ''
    } else {
      return <div> <SearchResults villagers={results}/> </div>
    }
  }

  return (
    <Col className="column card">
    <input type="text" 
      className="searchbar"
      placeholder="Search villager by name..." 
      value={query} 
      onChange={(e) => setQuery(e.target.value)} />

      {displayResults()}
  </Col>
  )

}

export default SearchBar;