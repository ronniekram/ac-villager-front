import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addVillager} from '../actions/villagerActions';
import SearchBar from '../components/search/SearchBar';
import SearchResults from '../components/search/SearchResults';

function SearchContainer(addVillager, villagers) {
  const [query, setQuery] = useState('');

  return (
    <> 
      <SearchBar query={query} setQuery={setQuery} villagers={villagers}  />
      <SearchResults addVillager={addVillager} />
    </>
  )
}

  const mapStateToProps = state => {
    return {
      villagers: state.villagerReducer.villagers,
      islands: state.islandReducer.islands
    }
  }

export default connect(mapStateToProps, {addVillager})(SearchContainer);