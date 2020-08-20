import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addVillager} from '../actions/villagerActions';
import SearchBar from '../components/search/SearchBar';

function SearchContainer(villagers, addVillager) {
  const [query, setQuery] = useState('');

  return (
    <> 
      <SearchBar villagers={villagers} query={query} setQuery={setQuery} addVillager={addVillager} />
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