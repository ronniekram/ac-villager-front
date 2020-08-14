import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Header from './Header'
import IslandsContainer from './containers/IslandsContainer';
import VillagersContainer from './containers/VillagersContainer';
import {fetchIslands} from './actions/islandActions';
import {fetchVillagers} from './actions/villagerActions';


function App({fetchIslands, fetchVillagers}) {

  useEffect(() => {
    fetchIslands();
    fetchVillagers();
  },[])

    return (
      <div className="App">
        <Router>
          <Navbar />
            <Route exact path="/" render={() => <Header />} />
            <Route path="/islands" render={(routerProps) => <IslandsContainer {...routerProps} /> } />
            <Route path="/villagers" render={(routerProps) => <VillagersContainer {...routerProps} />} />
        </Router>
      </div>
    )
  }

  const mapStateToProps = state => {
    return {
      islands: state.islandReducer.islands,
      villagers: state.villagerReducer.villagers
    }
  }

export default connect(mapStateToProps, {fetchIslands, fetchVillagers})(App);
