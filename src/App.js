import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { Container, Row } from 'react-bootstrap';
import {fetchIslands} from './actions/islandActions';
import {fetchVillagers} from './actions/villagerActions';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import IslandsContainer from './containers/IslandsContainer';
import VillagersContainer from './containers/VillagersContainer';
import SearchContainer from './containers/SearchContainer';


function App({fetchIslands, fetchVillagers}) {

  useEffect(() => {
    fetchIslands();
    fetchVillagers();
  },[])

    return (
      <>
      <Container className="container">
      {/* //Router gives the ability to handle routing (wrap the components you want to have routing) */}
        <Router> 
          <Header />
          <Navbar />
          <Row>
          {/* //Route renders component based url-- defines which path to render and what component should be registered for the path
              // exact path renders specific path (prevents "Home Page" (path '/') from being rendered on every page (i.e. '/about')) */}
            {/* <Route exact path="/" render={() => <Header />} /> */}
            <Route path="/islands" render={(routerProps) => <IslandsContainer {...routerProps} /> } />
            <Route path="/villagers" render={(routerProps) => <VillagersContainer {...routerProps} />} />
            <Route path="/search" render={(routerProps) => <SearchContainer {...routerProps} />} />
          </Row>
        </Router>
        <Footer />
      </Container>
      </>
    )
  }

  const mapStateToProps = (state) => {
    return {
      islands: state.islandReducer.islands,
      villagers: state.villagerReducer.villagers
    }
  }

export default connect(mapStateToProps, {fetchIslands, fetchVillagers})(App);