import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Header from './Header'
import IslandsContainer from './containers/IslandsContainer';
import WishlistsContainer from './containers/wishlistContainer';
import {fetchWishlists} from './actions/wishlistActions';
import {fetchIslands} from './actions/islandActions';
import {fetchVillagers} from './actions/villagerActions';


function App({fetchIslands, fetchWishlists, fetchVillagers}) {

  useEffect(() => {
    fetchIslands();
    fetchVillagers();
    fetchWishlists();
  },[])

    return (
      <div className="App">
        <Navbar />
        <Header />
          <Route exact path="/" render={() => <Header />} />
          <Route path="/islands" render={(routerProps) => <IslandsContainer {...routerProps} /> } />
          <Route path="/wishlists" render={(routerProps) => <WishlistsContainer {...routerProps} /> } />
      </div>
    )
  }

  const mapStateToProps = state => {
    return {
      islands: state.islandReducer.islands,
      villagers: state.villagerReducer.villagers,
      wishlists: state.wishlistReducer.wishlsts
    }
  }

export default connect(mapStateToProps, {fetchIslands, fetchWishlists, fetchVillagers})(App);
