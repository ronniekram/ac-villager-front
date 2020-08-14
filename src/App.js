import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import IslandsContainer from './containers/IslandsContainer';
import VillagersContainer from './containers/VillagersContainer';
import IslandInput from './components/islands/IslandInput'
import {fetchIslands} from './actions/islandActions';
import {fetchVillagers} from './actions/villagerActions';


function App({fetchIslands, fetchVillagers}) {

  useEffect(() => {
    fetchIslands();
    fetchVillagers();
    // fetchWishlists();
  },[fetchIslands, fetchVillagers])

    return (
      <div className="App">
        <Navbar />
          <Route exact path="/" render={() => <IslandInput />} />
          <Route path="/island" render={(routerProps) => <IslandsContainer {...routerProps} /> } />
          {/* <Route path="/wishlists" render={(routerProps) => <WishlistsContainer {...routerProps} /> } /> */}
          <Route path="/villagers" render={(routerProps) => <VillagersContainer {...routerProps} />} />
      </div>
    )
  }

  const mapStateToProps = state => {
    return {
      islands: state.islandReducer.islands,
      villagers: state.villagerReducer.villagers,
      // wishlists: state.wishlistReducer.wishlsts
    }
  }

export default connect(mapStateToProps, {fetchIslands, fetchVillagers})(App);
