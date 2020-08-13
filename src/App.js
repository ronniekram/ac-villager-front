import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Navbar from './components/Navbar'
import IslandsContainer from './containers/IslandsContainer';
import VillagersContainer from './containers/VillagersContainer';
import WishlistsContainer from './containers/wishlistContainer';
import {fetchWishlists} from './actions/wishlistActions';
import {fetchIslands} from './actions/islandActions';
import {fetchVillagers} from './actions/villagerActions';

function App({fetchIslands, fetchWishlists, fetchVillagers}) {

  useEffect(() => {
    fetchIslands()
    fetchVillagers()
    fetchWishlists()
  },[fetchIslands, fetchVillagers, fetchWishlists])

    return (
      <div className="App">
        <Navbar />
        <IslandsContainer />
        <VillagersContainer />
        <WishlistsContainer />

      </div>
    )
  }

export default connect(null, {fetchIslands, fetchWishlists, fetchVillagers})(App);
