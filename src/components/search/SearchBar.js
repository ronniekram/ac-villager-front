import React from 'react';
import { Col } from 'react-bootstrap';
import SearchResults from './SearchResults';

function SearchBar({villagers, query, setQuery}) {


  const results = villagers && villagers.filter(villager => villager.name.toLowerCase().includes(query.toLowerCase()))

  const displayResults = () => {
    if (query === '') {
      return ''
    } else {
      return <SearchResults villagers={results} />
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