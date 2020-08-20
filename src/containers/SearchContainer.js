import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import {addVillager} from '../actions/villagerActions';
import SearchBar from '../components/search/SearchBar';
// import SearchResults from '../components/search/SearchResults';

function SearchContainer(addVillager, villagers) {
  const [query, setQuery] = useState('');


  return (
    <> 
      <Switch>
        <Route path={'/search'} 
          render={(routerProps) => 
          <SearchBar {...routerProps} 
            villagers={villagers}
            query={query} 
            setQuery={setQuery} /> } />
      </Switch>
      {/* <SearchBar query={query} setQuery={setQuery} villagers={villagers}  /> */}
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